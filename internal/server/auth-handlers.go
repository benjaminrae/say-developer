package server

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/benjaminrae/say-developer/internal/auth"
	"github.com/benjaminrae/say-developer/internal/models"
	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
	"github.com/markbates/goth/gothic"
)

// Auth Provider Callback
//
// @Param string path
// @Success 302
// @Failure 401 string
// @Failure 500 string
// @Router /auth/{provider}/callback [get]
func (s *Server) AuthProviderCallbackHandler(c echo.Context) error {
	provider := c.Param("provider")

	req := getProviderRequest(*c.Request(), provider)

	user, err := gothic.CompleteUserAuth(c.Response().Writer, req)

	if err != nil {
		return c.String(http.StatusUnauthorized, "Failed to authorize")
	}

	fmt.Println(user)

	loggedUser := &models.User{
		UserId:   user.UserID,
		Email:    user.Email,
		Provider: user.Provider,
	}

	models.LoginUser(s.db.GetDb(), loggedUser)

	sessionId := uuid.New().String()
	sessionExpiration := time.Duration(auth.MaxAge) * time.Second

	session := auth.Session{
		UserId: user.UserID,
		User: auth.SessionUser{
			UserID:            user.UserID,
			RawData:           user.RawData,
			Provider:          user.Provider,
			Email:             user.Email,
			Name:              user.Name,
			FirstName:         user.FirstName,
			LastName:          user.LastName,
			NickName:          user.NickName,
			Description:       user.Description,
			AvatarURL:         user.AvatarURL,
			Location:          user.Location,
			AccessToken:       user.AccessToken,
			AccessTokenSecret: user.AccessTokenSecret,
			RefreshToken:      user.RefreshToken,
			ExpiresAt:         user.ExpiresAt,
			IDToken:           user.IDToken,
		},
	}

	sessionData, err := json.Marshal(session)

	if err != nil {
		fmt.Printf("Error creating session data: %v\n", err)
		return c.String(http.StatusInternalServerError, err.Error())
	}

	redis := s.redis.GetClient()

	err = redis.Set(context.Background(), sessionId, sessionData, sessionExpiration).Err()

	if err != nil {
		fmt.Printf("Error caching sessions: %v\n", err)
		c.String(http.StatusInternalServerError, err.Error())
	}

	c.SetCookie(&http.Cookie{
		Name:     "session",
		Value:    sessionId,
		Path:     "/",
		MaxAge:   auth.MaxAge,
		HttpOnly: true,
		Secure:   auth.IsProd,
	})

	return c.Redirect(http.StatusFound, "http://localhost:5173")
}

// Logout Provider
//
// @Param string path
// @Success 307
// @Router /logout/{provider} [get]
func (s *Server) LogoutProviderHandler(c echo.Context) error {
	provider := c.Param("provider")
	session, err := c.Cookie("session")

	if err != nil {
		fmt.Printf("Session cookie not found: %v\n", err)
	}

	req := getProviderRequest(*c.Request(), provider)

	gothic.Logout(c.Response().Writer, req)

	redis := s.redis.GetClient()

	redis.Del(context.Background(), session.Value)
	session.MaxAge = -1

	c.SetCookie(
		session,
	)

	return c.Redirect(http.StatusTemporaryRedirect, "/")
}

// TODO: improve this handler
func (s *Server) AuthHandler(c echo.Context) error {
	provider := c.Param("provider")

	req := getProviderRequest(*c.Request(), provider)

	if user, err := gothic.CompleteUserAuth(c.Response().Writer, req); err == nil {
		return c.JSON(http.StatusOK, user)
	} else {
		gothic.BeginAuthHandler(c.Response().Writer, req)
		return nil
	}
}

func (s *Server) GetSession(c echo.Context) error {
	session, err := c.Cookie("session")

	if err != nil {
		fmt.Printf("Session cookie not found: %v\n", err)
		return c.NoContent(http.StatusOK)
	}

	redis := s.redis.GetClient()

	cachedSession, err := redis.Get(context.Background(), session.Value).Result()

	var sessionData auth.Session

	json.Unmarshal([]byte(cachedSession), &sessionData)

	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	return c.JSONPretty(http.StatusOK, sessionData, "  ")
}

func getProviderRequest(r http.Request, provider string) *http.Request {
	return r.WithContext(context.WithValue(context.Background(), "provider", provider))
}

func (s *Server) AuthCurrentUser(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		authCookie, err := c.Cookie("session")

		if err != nil {
			return next(c)
		}

	redis:= s.redis.GetClient()

	cachedSession, err := redis.Get(context.Background(), authCookie.Value).Result()

	var sessionData auth.Session

	json.Unmarshal([]byte(cachedSession), &sessionData)

	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	c.Set("session", sessionData)
	
	return next(c)
	}
}

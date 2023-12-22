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
	}

	sessionData, err := json.Marshal(session)

	// TODO: Cache session
	fmt.Println(session)
	fmt.Println(sessionData)
	fmt.Println(sessionExpiration)

	if err != nil {
		fmt.Printf("Error creating session data: %v\n", err)
		return c.String(http.StatusInternalServerError, err.Error())
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

// TODO: Delete sessions
func (s *Server) LogoutProviderHandler(c echo.Context) error {
	provider := c.Param("provider")

	req := getProviderRequest(*c.Request(), provider)

	gothic.Logout(c.Response().Writer, req)

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

func getProviderRequest(r http.Request, provider string) *http.Request {
	return r.WithContext(context.WithValue(context.Background(), "provider", provider))
}

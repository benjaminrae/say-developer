package server

import (
	"context"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/markbates/goth/gothic"
)

func AuthProviderCallbackHandler(c echo.Context) error {
	provider := c.Param("provider")

	req := getProviderRequest(*c.Request(), provider)

	user, err := gothic.CompleteUserAuth(c.Response().Writer, req)

	if err != nil {
		return c.String(http.StatusUnauthorized, "Failed to authorize")
	}

	return c.JSON(http.StatusOK, user)
}

func LogoutProviderHandler(c echo.Context) error {
	provider := c.Param("provider")

	req := getProviderRequest(*c.Request(), provider)

	gothic.Logout(c.Response().Writer, req)

	return c.Redirect(http.StatusTemporaryRedirect, "/")
}

func AuthHandler(c echo.Context) error {
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

package router

import (
	"encoding/gob"

	"github.com/benjaminrae/say-developer/internal/authenticator"
	"github.com/gorilla/sessions"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func New(auth *authenticator.Authenticator) *echo.Echo {
	router := echo.New()

	gob.Register(map[string]interface{}{})

	store := sessions.NewCookieStore([]byte("secret"))
	router.Use(middleware.Secure())
	router.Use(session.MiddlewareWithConfig(session.Config{
		Store: store,
	}))

	return router
}

package server

import (
	"encoding/gob"
	"net/http"

	"github.com/labstack/echo/v4"
)

func New() *echo.Echo {
	router := echo.New()

	gob.Register(map[string]interface{}{})

	//	router.Renderer = CreateTemplateRenderer()

	router.GET("/ping", func(c echo.Context) error {
		return c.String(http.StatusOK, "OK")
	})
	router.GET("/auth/:provider/callback", AuthProviderCallbackHandler)
	router.GET("/logout/:provider", LogoutProviderHandler)
	router.GET("/auth/:provider", AuthHandler)

	return router
}

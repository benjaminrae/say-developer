package server

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func (s *Server) RegisterRoutes() http.Handler {
	router := echo.New()
	router.Use(middleware.Logger())
	router.Use(middleware.Recover())
	//	router.Renderer = CreateTemplateRenderer()

	router.GET("/ping", func(c echo.Context) error {
		return c.String(http.StatusOK, "OK")
	})
	router.GET("/auth/:provider/callback", AuthProviderCallbackHandler)
	router.GET("/logout/:provider", LogoutProviderHandler)
	router.GET("/auth/:provider", AuthHandler)

	return router
}

package server

import (
	"net/http"

	_ "github.com/benjaminrae/say-developer/docs"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/swaggo/echo-swagger"
)

// @title Say Developer
// @version 1.0
// @description Say Developer API

// @contact.name Benjamin Rae
// @contact.email benjaminrae93@gmail.com

// @license.name MIT
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host localhost:3000
func (s *Server) RegisterRoutes() http.Handler {
	router := echo.New()
	router.Use(middleware.Logger())
	router.Use(middleware.Recover())
	router.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowCredentials: true,
	}))
	//	router.Renderer = CreateTemplateRenderer()

	router.GET("/swagger/*", echoSwagger.WrapHandler)

	router.GET("/health", s.HealthHandler)

	router.GET("/auth/:provider/callback", s.AuthProviderCallbackHandler)
	router.GET("/logout/:provider", s.LogoutProviderHandler)
	router.GET("/auth/:provider", s.AuthHandler)
	router.GET("/session", s.GetSession)

	return router
}

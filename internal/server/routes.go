package server

import (
	"net/http"
	"os"
	"strings"

	_ "github.com/benjaminrae/say-developer/docs"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	echoSwagger "github.com/swaggo/echo-swagger"
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
	whitelist := strings.Split(os.Getenv("ORIGIN_WHITELIST"), ",")

	router := echo.New()
	router.Use(middleware.Logger())
	router.Use(middleware.Recover())
	router.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins:     whitelist,
		AllowCredentials: true,
	}))
	//	router.Renderer = CreateTemplateRenderer()

	router.GET("/swagger/*", echoSwagger.WrapHandler)

	router.GET("/health", s.HealthHandler)

	router.Use(s.AuthCurrentUser)

	router.GET("/auth/:provider/callback", s.AuthProviderCallbackHandler)
	router.GET("/logout/:provider", s.LogoutProviderHandler)
	router.GET("/auth/:provider", s.AuthHandler)
	router.GET("/session", s.GetSession)

	router.POST("/terms", s.CreateTermHandler)
	router.GET("/terms", s.SearchTermHandler)
	router.GET("/terms/:term", s.GetTermHandler)
	router.GET("/terms/:term/pronunciations", s.GetTermWithPronunciations)

	router.GET("/files/:fileId/url", s.GetPronunciationUrlForFileById)

	router.POST("/pronunciations", s.UploadPronunciationHandler)

	return router
}

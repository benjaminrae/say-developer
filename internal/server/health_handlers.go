package server

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

type HealthResponse struct {
	Db    string `json:"db"`
	Redis string `json:"redis"`
}

// Get Server Health
//
// @Summary API Health
// @Success 200 {object} HealthResponse
// @Failure 500 {object} HealthResponse
// @Router /health [get]
func (s *Server) HealthHandler(c echo.Context) error {
	status := http.StatusOK
	dbHealth, err := s.db.Health()

	if err != nil {
		status = http.StatusInternalServerError
	}
	redisHealth, err := s.redis.Health()

	if err != nil {
		status = http.StatusInternalServerError
	}

	health := HealthResponse{
		Db:    dbHealth,
		Redis: redisHealth,
	}

	return c.JSON(status, health)
}

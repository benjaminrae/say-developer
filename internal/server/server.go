package server

import (
	"fmt"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/benjaminrae/say-developer/internal/auth"
	"github.com/benjaminrae/say-developer/internal/database"
)

type Server struct {
	port int
	db   database.Service
}

func NewServer() *http.Server {
	port, _ := strconv.Atoi(os.Getenv("PORT"))
	NewServer := &Server{
		port: port,
		db:   database.New(),
	}

	auth.NewAuth()

	server := &http.Server{
		Addr:         fmt.Sprintf(":%d", NewServer.port),
		Handler:      NewServer.RegisterRoutes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	fmt.Printf("Server running on %v", port)

	return server
}

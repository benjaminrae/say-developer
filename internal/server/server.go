package server

import (
	"fmt"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/benjaminrae/say-developer/internal/auth"
	"github.com/benjaminrae/say-developer/internal/database"
	"github.com/benjaminrae/say-developer/internal/redis"
	"github.com/benjaminrae/say-developer/internal/storage"
)

type Server struct {
	port    int
	db      database.Service
	redis   redis.Service
	storage storage.Service
}

func New() *http.Server {
	port, _ := strconv.Atoi(os.Getenv("PORT"))
	NewServer := &Server{
		port:    port,
		db:      database.New(),
		redis:   redis.New(),
		storage: storage.New(),
	}

	auth.New()

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

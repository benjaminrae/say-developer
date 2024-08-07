package redis

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/go-redis/redis/v8"
	_ "github.com/joho/godotenv/autoload"
)

var (
	password = os.Getenv("REDIS_PASSWORD")
	address  = os.Getenv("REDIS_ADDRESS")
	// TODO: database from env
	// database = os.Getenv("REDIS_DATABASE")
	connectionString string
)

type Service interface {
	GetClient() *redis.Client
	Health() (string, error)
}

type service struct {
	redis *redis.Client
}

func New() Service {
	redisClient := redis.NewClient(&redis.Options{
		Addr:     getAddress(),
		Password: password,
		DB:       0,
	})
	s := &service{
		redis: redisClient,
	}
	return s
}

func getAddress() string {
	if connectionString != "" {
		url, err := redis.ParseURL(connectionString)

		if err != nil {
			log.Fatal(err)
		}

		return url.Addr
	}

	return address
}

func (s *service) GetClient() *redis.Client {
	return s.redis
}

func (s *service) Health() (string, error) {

	status, err := s.redis.Ping(context.Background()).Result()

	if err != nil {
		log.Printf("redis down: %v\n", err)
		status := fmt.Sprintf("Unhealthy: %v", err)
		return status, err
	}

	log.Printf("redis status: %s\n", status)

	return "Healthy", nil
}

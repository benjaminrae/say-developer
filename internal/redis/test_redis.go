package redis

import (
	"context"
	"github.com/go-redis/redis/v8"
	tcRedis "github.com/testcontainers/testcontainers-go/modules/redis"
	"testing"
)

func SetupRedis(tb testing.TB) (func(tb testing.TB), *redis.Client) {
	ctx := context.Background()
	container, err := tcRedis.Run(ctx,
		"docker.io/redis:7")

	if err != nil {
		tb.Fatal(err)
	}

	connectionString, err := container.ConnectionString(ctx)
	if err != nil {
		tb.Fatal(err)
	}

	options, err := redis.ParseURL(connectionString)
	if err != nil {
		tb.Fatal(err)
	}

	redisClient := redis.NewClient(options)

	return func(tb testing.TB) {
		container.Terminate(ctx)
		redisClient.Close()
	}, redisClient
}

//go:build dev || e2e
// +build dev e2e

package redis

import (
	"context"
	"fmt"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/redis"
)

func init() {
	fmt.Println("Starting Redis dev")

	_, err := startRedis()

	if err != nil {
		panic(err)
	}
}

func startRedis() (testcontainers.Container, error) {
	ctx := context.Background()

	container, err := redis.Run(ctx,
		"docker.io/redis:7",
		redis.WithSnapshotting(10, 1),
		redis.WithLogLevel(redis.LogLevelVerbose),
	)

	if err != nil {
		return nil, err
	}

	connectionString, err = container.ConnectionString(ctx)

	if err != nil {
		return nil, err
	}

	fmt.Println(connectionString)

	return container, nil
}

//go:build dev || e2e
// +build dev e2e

package database

import (
	"context"
	"fmt"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/postgres"
	"github.com/testcontainers/testcontainers-go/wait"
	"time"
)

func init() {
	fmt.Println("Starting PostgreSQL Dev")
	_, err := startDatabase()

	MigrateUp()
	if err != nil {
		panic(err)
	}
}

func startDatabase() (testcontainers.Container, error) {
	ctx := context.Background()
	container, err := postgres.Run(ctx,
		"docker.io/postgres:16-alpine",
		postgres.WithDatabase(database),
		postgres.WithUsername(username),
		postgres.WithPassword(password),
		testcontainers.WithWaitStrategy(
			wait.ForLog("database system is ready to accept connections").
				WithOccurrence(2).
				WithStartupTimeout(5*time.Second),
		),
	)

	if err != nil {
		return nil, err
	}

	connectionString, err = container.ConnectionString(ctx)

	if err != nil {
		return nil, err
	}

	return container, nil
}

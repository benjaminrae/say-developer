//go:build dev || e2e
// +build dev e2e

package storage

import (
	"context"
	"fmt"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/localstack"
)

func init() {
	fmt.Println("Starting localstack")
	_, err := startStorage()

	if err != nil {
		panic(err)
	}
}

func startStorage() (testcontainers.Container, error) {
	ctx := context.Background()
	container, err := localstack.Run(ctx,
		"docker.io/localstack/localstack:1.4.0",
		testcontainers.WithEnv(map[string]string{
			"SERVICES": "s3",
		}),
	)
	if err != nil {
		return nil, err
	}

	return container, nil
}

package models

import (
	"context"
	"github.com/go-redis/redis/v8"
	tcRedis "github.com/testcontainers/testcontainers-go/modules/redis"
	"testing"
)

func TestGetFeaturedTermsKeys(t *testing.T) {
	t.Run("should retrieve featured term keys", func(t *testing.T) {
		tearDown, redisClient := setupRedis(t)
		defer tearDown(t)

		key := "terms:featured:featured-term-1"
		redisClient.Set(context.Background(), key, "", 0)

		keys, err := GetFeaturedTermsKeys(redisClient)

		if err != nil {
			t.Fatal(err)
		}

		cachedKey := keys[0]

		if key != cachedKey {
			t.Errorf("expected %s, actual %s", key, keys[0])
		}

		if len(keys) != 1 {
			t.Fatalf("got %d keys, expected 1", len(keys))
		}
	})
}

func setupRedis(tb testing.TB) (func(tb testing.TB), *redis.Client) {
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

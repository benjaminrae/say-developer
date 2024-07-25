package models

import (
	"context"
	"encoding/json"
	"github.com/go-redis/redis/v8"
	"github.com/google/uuid"
	"github.com/stretchr/testify/assert"
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

		assert.Equal(t, key, cachedKey)
		assert.Len(t, keys, 1)
	})
}

func TestGetFeaturedTerms(t *testing.T) {
	t.Run("should retrieve featured terms", func(t *testing.T) {
		tearDown, redisClient := setupRedis(t)
		defer tearDown(t)

		javaId := uuid.New()
		java := Term{
			Id:          javaId,
			Raw:         "Java",
			Words:       []string{"Java"},
			Phonetic:    "JAH-va",
			Description: "An OOP programming language",
			CreatedBy:   "admin",
		}
		javascriptId := uuid.New()
		javascript := Term{
			Id:          javascriptId,
			Raw:         "JavaScript",
			Words:       []string{"JavaScript"},
			Phonetic:    "JAH-va-SCRIPT",
			Description: "A dynamic programming language",
			CreatedBy:   "admin",
		}
		background := context.Background()
		javaKey := createKey(java)
		javaScriptKey := createKey(javascript)
		javaJson, _ := json.Marshal(java)
		javascriptJson, _ := json.Marshal(javascript)
		redisClient.Set(background, javaKey, javaJson, 0)
		redisClient.Set(background, javaScriptKey, javascriptJson, 0)

		terms, errors := GetFeaturedTerms(redisClient, []string{javaKey, javaScriptKey})

		if len(errors) != 0 {
			t.Fatal(errors)
		}

		assert.Len(t, terms, 2)
		assert.Contains(t, terms, java)
		assert.Contains(t, terms, javascript)
	})
}

func createKey(java Term) string {
	return "terms:featured:" + java.Id.String()
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

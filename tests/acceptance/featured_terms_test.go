package acceptance_test

//
//import (
//	"context"
//	"encoding/json"
//	"github.com/benjaminrae/say-developer/internal/models"
//	"github.com/benjaminrae/say-developer/internal/redis"
//	"github.com/benjaminrae/say-developer/internal/server"
//	"github.com/google/uuid"
//	"github.com/stretchr/testify/assert"
//	"io"
//	"net/http"
//	"net/http/httptest"
//	"testing"
//)
//
//func TestFeaturedTerms(t *testing.T) {
//	tearDownRedis, redisClient := redis.SetupRedis(t)
//	defer tearDownRedis(t)
//
//	java := models.Term{
//		Id:             uuid.New(),
//		Raw:            "Java",
//		Words:          []string{"Java"},
//		Phonetic:       "JAH-va",
//		Description:    "An OOP Programming Language",
//		CreatedBy:      "admin",
//		Aliases:        []string{},
//		Pronunciations: []models.Pronunciation{},
//	}
//	javaJson, err := json.Marshal(java)
//
//	if err != nil {
//		t.Fatal(err)
//	}
//
//	_, err = redisClient.Set(
//		context.Background(),
//		"terms:featured:"+java.Id.String(),
//		javaJson,
//		0,
//	).Result()
//
//	if err != nil {
//		t.Fatal(err)
//	}
//
//	s := &server.Server{
//		redis: redis.New(),
//	}
//
//	server := httptest.NewServer(s.RegisterRoutes())
//	defer server.Close()
//
//	resp, err := http.Get(server.URL + "/terms/featured")
//
//	if err != nil {
//		t.Fatal(err)
//	}
//
//	body, err := io.ReadAll(resp.Body)
//
//	if err != nil {
//		t.Fatal(err)
//	}
//	resp.Body.Close()
//
//	assert.Equal(t, http.StatusOK, resp.StatusCode)
//	assert.Equal(t, javaJson, string(body))
//}

package models

import (
	"context"
	"database/sql"
	"encoding/json"
	"github.com/go-redis/redis/v8"
	"strings"

	"github.com/google/uuid"
)

type Term struct {
	Id             uuid.UUID       `json:"id" redis:"id"`
	Raw            string          `json:"raw" redis:"raw"`
	Words          []string        `json:"words"`
	Phonetic       string          `json:"phonetic"`
	Description    string          `json:"description"`
	CreatedBy      string          `json:"createdBy"`
	Aliases        []string        `json:"aliases"`
	Pronunciations []Pronunciation `json:"pronunciations"`
}

func CreateTerm(db *sql.DB, term *Term) (sql.Result, error) {
	if term.Words == nil {
		term.Words = strings.Split(term.Raw, " ")
	}

	if term.Aliases == nil {
		term.Aliases = []string{}
	}

	result, err := db.ExecContext(context.Background(),
		"INSERT INTO terms (id, raw, words, phonetic, description, created_by, aliases) VALUES ($1, $2, $3, $4, $5, $6, $7)",
		term.Id,
		term.Raw,
		term.Words,
		term.Phonetic,
		term.Description,
		term.CreatedBy,
		term.Aliases,
	)
	return result, err
}

func TermExists(db *sql.DB, term *Term) (bool, error) {
	var termExists bool

	err := db.QueryRowContext(context.Background(),
		"SELECT EXISTS(SELECT 1 FROM terms WHERE raw = $1)",
		term.Raw,
	).Scan(&termExists)

	return termExists, err
}

func AddToRecentTerms(redis *redis.Client, term *Term) error {
	_, err := redis.LPush(context.Background(), "terms:recent", term.Raw).Result()

	if err != nil {
		return err
	}

	return nil
}

func GetRecentTerms(redis *redis.Client) ([]string, error) {
	rows, err := redis.LRange(context.Background(), "terms:recent", 0, 20).Result()

	if err != nil {
		return nil, err
	}

	return rows, nil
}

func GetFeaturedTerms(redis *redis.Client) ([]Term, error) {
	result, err := redis.Get(context.Background(), "terms:featured").Result()

	if err != nil {
		return nil, err
	}

	var terms = &[]Term{}

	err = json.Unmarshal([]byte(result), terms)

	if err != nil {
		return nil, err
	}

	return *terms, nil
}


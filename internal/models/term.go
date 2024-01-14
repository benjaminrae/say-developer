package models

import (
	"context"
	"database/sql"
	"fmt"
	"strings"

	"github.com/google/uuid"
)

type Term struct {
	Id          uuid.UUID `json:"id"`
	Raw         string    `json:"raw"`
	Words       []string  `json:"words"`
	Phonetic    string    `json:"phonetic"`
	Description string    `json:"description"`
	CreatedBy   string    `json:"createdBy"`
	Aliases     []string  `json:"aliases"`
}

func CreateTerm(db *sql.DB, term *Term) (sql.Result, error) {
	fmt.Println(term.Raw)
	if term.Words == nil {
		term.Words = strings.Split(term.Raw, " ")
	}
	fmt.Println(term.Raw)

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

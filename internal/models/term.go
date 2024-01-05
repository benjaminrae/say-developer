package models

import (
	"context"
	"database/sql"

	"github.com/google/uuid"
)

type Term struct {
	Id          uuid.UUID `json:"id"`
	Words       []string  `json:"words"`
	Phonetic    string    `json:"phonetic"`
	Description string    `json:"description"`
	CreatedBy   string    `json:"createdBy"`
	Aliases     []string  `json:"aliases"`
}

func CreateTerm(db *sql.DB, term *Term) error {
	_, err := db.ExecContext(context.Background(),
		"INSERT INTO terms (id, words, phonetic, description, created_by, aliases) VALUES ($1, $2, $3, $4, $5, $6)",
		term.Id,
		term.Words,
		term.Phonetic,
		term.Description,
		term.CreatedBy,
		term.Aliases,
	)
	return err
}

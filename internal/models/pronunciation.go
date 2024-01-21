package models

import (
	"context"
	"database/sql"
)

type Pronunciation struct {
	Id        string `json:"id"`
	TermId    string `json:"termId"`
	PublicUrl string `json:"publicUrl"`
	CreatedBy string `json:"createdBy"`
	FileName  string `json:"fileName"`
	MimeType  string `json:"mimeType"`
}

func CreatePronunciation(db *sql.DB, pronunciation *Pronunciation) (sql.Result, error) {
	result, err := db.ExecContext(context.Background(),
		"INSERT INTO pronunciations (id, term_id, public_url, created_by, file_name, mime_type) VALUES ($1, $2, $3, $4, $5, $6)",
		pronunciation.Id,
		pronunciation.TermId,
		pronunciation.PublicUrl,
		pronunciation.CreatedBy,
		pronunciation.FileName,
		pronunciation.MimeType,
	)
	return result, err
}

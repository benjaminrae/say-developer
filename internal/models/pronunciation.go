package models

import (
	"context"
	"database/sql"
	"github.com/google/uuid"
)

type Pronunciation struct {
	Id        uuid.UUID `json:"id"`
	TermId    uuid.UUID `json:"termId" form:"termId"`
	PublicUrl string    `json:"publicUrl"`
	CreatedBy string    `json:"createdBy"`
	FileName  string    `json:"fileName" form:"fileName"`
	MimeType  string    `json:"mimeType" form:"mimeType"`
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

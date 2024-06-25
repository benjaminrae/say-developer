package models

import (
	"context"
	"database/sql"
	"github.com/google/uuid"
)

type Pronunciation struct {
	Id        uuid.UUID `json:"id"`
	TermId    uuid.UUID `json:"termId" json:"term_id" form:"termId"`
	PublicUrl string    `json:"publicUrl" json:"public_url"`
	CreatedBy string    `json:"createdBy" json:"created_by"`
	FileName  string    `json:"fileName" json:"file_name" form:"fileName"`
	MimeType  string    `json:"mimeType" json:"mime_type" form:"mimeType"`
}

type NestedPronunciation struct {
	Id        uuid.UUID `json:"id"`
	TermId    uuid.UUID `json:"term_id"`
	PublicUrl string    `json:"public_url"`
	CreatedBy string    `json:"created_by"`
	FileName  string    `json:"file_name"`
	MimeType  string    `json:"mime_type"`
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

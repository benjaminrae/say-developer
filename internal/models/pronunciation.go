package models

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"github.com/google/uuid"
)

type Pronunciation struct {
	Id        uuid.UUID `json:"id"`
	TermId    uuid.UUID `json:"termId" json:"term_id" form:"termId"`
	PublicUrl string    `json:"publicUrl"`
	CreatedBy string    `json:"createdBy"`
	FileName  string    `json:"fileName" form:"fileName"`
	MimeType  string    `json:"mimeType" form:"mimeType"`
}

type NestedPronunciation struct {
	Id        uuid.UUID `json:"id"`
	TermId    uuid.UUID `json:"term_id"`
	PublicUrl string    `json:"public_url"`
	CreatedBy string    `json:"created_by"`
	FileName  string    `json:"file_name"`
	MimeType  string    `json:"mime_type"`
}

func NestedPronunciationsToPronunciations(data []byte) ([]Pronunciation, error) {
	if data == nil {
		return []Pronunciation{}, nil
	}

	var nestedPronunciations []NestedPronunciation
	fmt.Println("data")
	fmt.Println(data)

	err := json.Unmarshal(data, &nestedPronunciations)
	if err != nil {
		return []Pronunciation{}, err
	}

	fmt.Println(nestedPronunciations)

	return NewPronunciationsFromNested(nestedPronunciations), nil
}

func NewPronunciationsFromNested(nestedPronunciations []NestedPronunciation) []Pronunciation {
	var pronunciations []Pronunciation
	for _, nestedPronunciation := range nestedPronunciations {
		if nestedPronunciation.Id == uuid.Nil {
			continue
		}

		pronunciations = append(pronunciations, Pronunciation{
			Id:        nestedPronunciation.Id,
			TermId:    nestedPronunciation.TermId,
			PublicUrl: nestedPronunciation.PublicUrl,
			CreatedBy: nestedPronunciation.CreatedBy,
			FileName:  nestedPronunciation.FileName,
			MimeType:  nestedPronunciation.MimeType,
		})
	}

	fmt.Println(pronunciations)
	return pronunciations
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

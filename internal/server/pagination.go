package server

import (
	"github.com/benjaminrae/say-developer/internal/models"
)

type PaginatedTerms struct {
	Count    int           `json:"count"`
	Terms    []models.Term `json:"terms"`
	Next     string        `json:"next"`
	Previous string        `json:"previous"`
}

package server

import (
	"context"
	"fmt"
	"net/http"
	"net/url"
	"os"
	"strconv"

	"github.com/benjaminrae/say-developer/internal/auth"
	"github.com/benjaminrae/say-developer/internal/models"
	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
	"github.com/lib/pq"
)

func (s *Server) CreateTermHandler(c echo.Context) error {
	sessionInterface := c.Get("session")
	session, ok := sessionInterface.(auth.Session)

	if !ok {
		return c.String(http.StatusUnauthorized, "Invalid session")
	}

	term := &models.Term{
		Id:        uuid.New(),
		CreatedBy: session.UserId,
	}

	if err := c.Bind(term); err != nil {
		return c.String(http.StatusBadRequest, err.Error())
	}

	db := s.db.GetDb()

	termExists, err := models.TermExists(db, term)

	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	if termExists {
		return c.String(http.StatusConflict, fmt.Sprintf("Term %v already exists", term.Raw))
	}

	result, err := models.CreateTerm(db, term)

	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusCreated, result)
}

func (s *Server) SearchTermHandler(c echo.Context) error {
	term := c.QueryParam("term")
	limitQuery := c.QueryParam("limit")
	if limitQuery == "" {
		limitQuery = "10"
	}
	offsetQuery := c.QueryParam("offset")
	if offsetQuery == "" {
		offsetQuery = "0"
	}

	limit, err := strconv.Atoi(limitQuery)
	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}
	offset, err := strconv.Atoi(offsetQuery)
	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	db := s.db.GetDb()

	rows, err := db.QueryContext(context.Background(), `
		SELECT id, raw, words, phonetic, description, created_by, aliases, COUNT(*) OVER() as count
		FROM terms
		WHERE EXISTS (
			SELECT 1
			FROM unnest(words) AS word
			WHERE word ILIKE '%' || $1 || '%'
		)
		OR raw ILIKE '%' || $1 || '%'
		OR description ILIKE '%' || $1 || '%'
		OR EXISTS (
			SELECT 1
			FROM unnest(aliases) AS alias
			WHERE alias ILIKE '%' || $1 || '%'
		)
		LIMIT $2
		OFFSET $3
	`, term, limit, offset)

	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	defer rows.Close()

	var terms []models.Term = []models.Term{}
	var count int

	for rows.Next() {
		var t models.Term
		err := rows.Scan(&t.Id, &t.Raw, pq.Array(&t.Words), &t.Phonetic, &t.Description, &t.CreatedBy, pq.Array(&t.Aliases), &count)

		if err != nil {
			return c.String(http.StatusInternalServerError, err.Error())
		}

		terms = append(terms, t)
	}

	err = rows.Err()

	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}
	baseUrl, err := url.Parse(os.Getenv("SERVICE_URL"))
	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}
	results := PaginatedTerms{}
	results.Count = count
	results.Terms = terms
	query := url.Values{}
	query.Set("term", term)
	query.Set("limit", limitQuery)
	nextOffset := offset + limit
	if nextOffset < count {
		query.Set("offset", fmt.Sprint(nextOffset))
		baseUrl.RawQuery = query.Encode()
		results.Next = baseUrl.String()
	}

	prevOffset := offset - limit
	if prevOffset > 0 {
		query.Set("offset", fmt.Sprint(prevOffset))
		baseUrl.RawQuery = query.Encode()
		results.Previous = baseUrl.String()
	}

	return c.JSON(http.StatusOK, results)
}

func (s *Server) GetTermHandler(c echo.Context) error {
	termQuery := c.Param("term")

	db := s.db.GetDb()

	result, err := db.QueryContext(context.Background(), `
		SELECT id, raw, words, phonetic, description, created_by, aliases
		FROM terms
		WHERE raw = $1
	`, termQuery)

	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}
	defer result.Close()

	term := models.Term{}

	result.Next()
	result.Scan(&term.Id, &term.Raw, pq.Array(&term.Words), &term.Phonetic, &term.Description, &term.CreatedBy, pq.Array(&term.Aliases))

	return c.JSON(http.StatusOK, term)
}

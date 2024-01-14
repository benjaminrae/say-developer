package server

import (
	"context"
	"fmt"
	"net/http"

	"github.com/benjaminrae/say-developer/internal/auth"
	"github.com/benjaminrae/say-developer/internal/models"
	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
	"github.com/lib/pq"
)

func (s *Server) CreateTermHandler (c echo.Context) error {
	sessionInterface := c.Get("session");
	session, ok := sessionInterface.(auth.Session)

	if !ok {
		return c.String(http.StatusUnauthorized, "Invalid session")
	}

	fmt.Println(session)
	
	term := &models.Term{
		Id: uuid.New(),
		CreatedBy: session.UserId,
	}

	if err := c.Bind(term); err != nil {
		return c.String(http.StatusBadRequest, err.Error())
	}

	db := s.db.GetDb()

	result, err := models.CreateTerm(db, term)

	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusAccepted, result)
}

func (s *Server) SearchTermHandler (c echo.Context) error {
	term := c.QueryParam("term")

	fmt.Println(term)

	db := s.db.GetDb()

	rows, err := db.QueryContext(context.Background(), `
SELECT id, raw, words, phonetic, description, created_by, aliases 
		FROM terms 	
		WHERE EXISTS (
			SELECT 1 
			FROM unnest(words) AS word 
			WHERE word ILIKE '%' || $1 || '%'
		) 
		OR description ILIKE '%' || $1 || '%' 
		OR EXISTS (
			SELECT 1 
			FROM unnest(aliases) AS alias 
			WHERE alias ILIKE '%' || $1 || '%'
		)
	`, term)

	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	defer rows.Close()

	var terms []models.Term = []models.Term{}
	
	for rows.Next() {
		var t models.Term
		err := rows.Scan(&t.Id, &t.Raw,	 pq.Array(&t.Words), &t.Phonetic, &t.Description, &t.CreatedBy, pq.Array(&t.Aliases))

		if err != nil {
			return c.String(http.StatusInternalServerError, err.Error())
		}
		
		terms = append(terms, t)
	}

	err = rows.Err()

	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusOK, terms)
} 

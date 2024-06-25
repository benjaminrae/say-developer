package server

import (
	"fmt"
	"github.com/benjaminrae/say-developer/internal/auth"
	"github.com/benjaminrae/say-developer/internal/models"
	"github.com/google/uuid"
	"io"
	"net/http"

	"github.com/labstack/echo/v4"
)

func (s *Server) UploadPronunciationHandler(c echo.Context) error {

	sessionInterface := c.Get("session")
	session, ok := sessionInterface.(auth.Session)

	if !ok {
		return c.String(http.StatusUnauthorized, "Invalid session")
	}

	pronunciation := &models.Pronunciation{
		Id:        uuid.New(),
		CreatedBy: session.UserId,
	}

	fmt.Print(pronunciation)

	if err := c.Bind(pronunciation); err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	fmt.Print(pronunciation)

	file, err := c.FormFile("file")

	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	src, err := file.Open()

	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	defer src.Close()

	fileBytes, _ := io.ReadAll(src)

	output, err := s.storage.UploadFile(fileBytes, file.Filename, file.Header.Get("Content-Type"))

	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	pronunciation.PublicUrl = output.Location

	result, err := models.CreatePronunciation(s.db.GetDb(), pronunciation)

	if err != nil {
		return err
	}

	return c.JSON(http.StatusCreated, result)
}

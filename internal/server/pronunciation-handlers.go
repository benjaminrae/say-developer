package server

import (
	"io"
	"net/http"

	"github.com/labstack/echo/v4"
)

func (s *Server) UploadPronunciationHandler(c echo.Context) error {
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

	return c.String(http.StatusOK, output.UploadID)

}

package models

import (
	"context"

	"github.com/jackc/pgx/v5/pgxpool"
)

type Session struct {
	Id     string
	UserId string
}

func CreateSession(db *pgxpool.Pool, session *Session) error {
	_, err := db.Exec(context.Background(),
		"INSERT INTO sessions (id, user_id) VALUES ($1, $2)",
		session.Id,
		session.UserId,
	)
	return err
}

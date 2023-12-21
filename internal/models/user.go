package models

import (
	"context"

	"github.com/jackc/pgx/v5/pgxpool"
)

type User struct {
	UserId   string
	Provider string
	Email    string
}

func CreateUser(db *pgxpool.Pool, user *User) error {
	_, err := db.Exec(context.Background(),
		"INSERT INTO users (user_id, email, provider) VALUES ($1, $2, $3)",
		user.UserId,
		user.Email,
		user.Provider,
	)
	return err
}

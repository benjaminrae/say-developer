package models

import (
	"context"
	"database/sql"
	"time"
)

type User struct {
	UserId    string
	Provider  string
	Email     string
	LastLogin time.Time
}

func CreateUser(db *sql.DB, user *User) error {
	_, err := db.ExecContext(context.Background(),
		"INSERT INTO users (user_id, email, provider) VALUES ($1, $2, $3)",
		user.UserId,
		user.Email,
		user.Provider,
	)
	return err
}

func LoginUser(db *sql.DB, user *User) error {
	var userExists bool
	err := db.QueryRowContext(
		context.Background(),
		"SELECT EXISTS(SELECT 1 FROM users WHERE user_id = $1)",
		user.UserId,
	).Scan(&userExists)

	if err != nil {
		return err
	}

	now := time.Now()

	if userExists {
		_, err := db.ExecContext(context.Background(),
			"UPDATE users SET last_login = $1 WHERE user_id = $2",
			now,
			user.UserId,
		)

		return err

	}

	_, err = db.ExecContext(context.Background(),
		"INSERT INTO users (user_id, email, provider, last_login) VALUES ($1, $2, $3, $4)",
		user.UserId,
		user.Email,
		user.Provider,
		now,
	)

	return err
}

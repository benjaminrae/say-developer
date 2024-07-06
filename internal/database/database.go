package database

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	_ "github.com/jackc/pgx/v5/stdlib"
	_ "github.com/joho/godotenv/autoload"
)

type Service interface {
	Health() (string, error)
	GetDb() *sql.DB
}

type service struct {
	db *sql.DB
}

var (
	database         = os.Getenv("DB_DATABASE")
	password         = os.Getenv("DB_PASSWORD")
	username         = os.Getenv("DB_USERNAME")
	port             = os.Getenv("DB_PORT")
	host             = os.Getenv("DB_HOST")
	ConnectionString string
)

func New() Service {
	db := open()
	s := &service{db: db}
	return s
}

func MigrateUp() {
	db := open()

	defer db.Close()

	migration := createMigration(db)

	err := migration.Up()

	if err != nil {
		log.Fatal(err)
	}

}

func MigrateDown() {
	db := open()

	defer db.Close()

	migration := createMigration(db)

	err := migration.Down()

	if err != nil {
		log.Fatal(err)
	}

}

func (s *service) Health() (string, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
	defer cancel()

	err := s.db.PingContext(ctx)
	if err != nil {
		log.Println(fmt.Sprintf("db down: %v", err))
		status := fmt.Sprintf("Unhealthy: %v", err)
		return status, err
	}

	return "Healthy", nil
}

func getConnectionString() string {
	if ConnectionString != "" {
		return ConnectionString
	}

	return fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=disable", username, password, host, port, database)
}

func open() *sql.DB {
	connStr := getConnectionString()

	log.Print("Opening DB connection")

	db, err := sql.Open("pgx", connStr)
	if err != nil {
		log.Fatal(err)
	}

	log.Print("DB connection open")

	return db
}

func createMigration(db *sql.DB) *migrate.Migrate {

	driver, err := postgres.WithInstance(db, &postgres.Config{})
	if err != nil {
		log.Fatal(err)
	}

	migration, err := migrate.NewWithDatabaseInstance(
		"file://migrations",
		"postgres",
		driver,
	)

	if err != nil {
		log.Fatal(err)
	}

	return migration
}

func (s *service) GetDb() *sql.DB {
	return s.db
}

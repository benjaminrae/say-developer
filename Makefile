test:
	go test -v ./...

build:
	go build -o ./tmp/main cmd/api/main.go
	go build -o ./tmp/cli cmd/cli/main.go

run:
	go run cmd/api/main.go

run-dev:
	go run -tags dev cmd/api/main.go

run-cli:
	go run cmd/cli/main.go

run-test-db:
	docker run -it --rm --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres postgres

vet:
	go vet cmd/api/main.go
	go vet cmd/cli/main.go

fmt:
	go fmt cmd/api/main.go
	go fmt cmd/cli/main.go

migrate-up:
	go run cmd/cli/main.go migrate --up

migrate-create:
	migrate create -ext sql -dir migrations -seq $(table)

swagger-docs:
	swag init -g internal/server/routes.go

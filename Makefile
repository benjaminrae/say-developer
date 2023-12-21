test:
	go test -v ./...

build:
	go build -o ./tmp/main cmd/api/main.go
	go build -o ./tmp/cli cmd/cli/main.go

run:
	go run cmd/api/main.go

run-cli:
	go run cmd/cli/main.go

test:
	go test -v ./...

build:
	go build -o ./tmp/main cmd/api/main.go

run:
	go run cmd/api/main.go


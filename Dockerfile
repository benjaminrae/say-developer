# Start from the latest golang base image
FROM golang:1.21

# Create a directory in the container to hold the application
WORKDIR /app

ARG PORT

# Copy go mod and sum files
COPY go.mod go.sum ./

# Download all dependencies
RUN go mod download

# Copy the source from the current directory to the Working Directory inside the container
COPY . .

# Build the Go app
RUN go build -o main cmd/api/main.go

RUN go build -o cli cmd/cli/main.go

# Expose port to the outside world
EXPOSE $PORT


RUN echo '#!/bin/sh\n\./cli migrate --up\n\./main' > start.sh
RUN chmod +x start.sh

# Command to run the executable
CMD ["./start.sh"]

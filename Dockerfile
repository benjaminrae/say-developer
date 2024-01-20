# Start from the latest golang base image
FROM golang:1.21

# Create a directory in the container to hold the application
WORKDIR /app

ARG PORT
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET
ARG GITHUB_CLIENT_ID
ARG GITHUB_CLIENT_SECRET
ARG DB_DATABASE
ARG DB_USERNAME
ARG DB_PASSWORD
ARG DB_HOST
ARG DB_PORT
ARG REDIS_ADDRESS
ARG REDIS_PASSWORD
ARG REDIS_DATABASE

RUN echo $PORT

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

# env workaround for railway because no full control over build and deploy commands with docker
ENV PORT=${PORT} \
    GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID} \
    GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET} \
    GITHUB_CLIENT_ID=${GITHUB_CLIENT_ID} \
    GITHUB_CLIENT_SECRET=${GITHUB_CLIENT_SECRET} \
    DB_DATABASE=${DB_DATABASE} \
    DB_USERNAME=${DB_USERNAME} \
    DB_PASSWORD=${DB_PASSWORD} \
    DB_HOST=${DB_HOST} \
    DB_PORT=${DB_PORT} \
    REDIS_ADDRESS=${REDIS_ADDRESS} \
    REDIS_PASSWORD=${REDIS_PASSWORD} \
    REDIS_DATABASE=${REDIS_DATABASE}

RUN echo '#!/bin/sh\n\./cli migrate --up\n\./main' > start.sh
RUN chmod +x start.sh

# Command to run the executable
CMD ["./start.sh"]

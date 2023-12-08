package main

import (
	"github.com/benjaminrae/say-developer/internal/authenticator"
	"github.com/benjaminrae/say-developer/internal/router"
	"github.com/labstack/gommon/log"
)

func main() {
	auth, err := authenticator.New()

	if err != nil {
		log.Fatalf("Couldn't initialize authentication %v", err)
	}

	router := router.New(auth)

	router.Logger.Fatal(router.Start(":3000"))
}

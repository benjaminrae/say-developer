package main

import (
	"github.com/benjaminrae/say-developer/internal/auth"
	"github.com/benjaminrae/say-developer/internal/server"
)

func main() {
	auth.NewAuth()
	s := server.New()

	s.Logger.Fatal(s.Start(":3000"))
}

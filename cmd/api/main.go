package main

import (
	"fmt"

	"github.com/benjaminrae/say-developer/internal/server"
)

func main() {
	server := server.New()

	err := server.ListenAndServe()

	if err != nil {
		panic(fmt.Sprintf("Cannot start server: %s", err))
	}

}

package main

import (
	"log"

	"v/internal/server"
)

func main() {
	if err := server.Run(); err != nil {
		log.Fatalln(err.Error())
	}
}

// sudo docker build -t mygo .
// sudo docker run --rm -p 8080:8080 mygo

package main

import (	
	"log"
	"os"
	"net/http"

	"survey-app/server/router"
)

func getPort() string {
  p := os.Getenv("PORT")
  if p != "" {
    return ":" + p
  }
  return ":8080"
}

func main() {
	r := router.Router()	
	buildHandler := http.FileServer(http.Dir("./client/build"))
	r.PathPrefix("/").Handler(buildHandler)
	

	staticHandler := http.StripPrefix("/static/", http.FileServer(http.Dir("./client/build/static")))
	r.PathPrefix("/static/").Handler(staticHandler)
	port := getPort()
	log.Fatal(http.ListenAndServe(port, r))	
}

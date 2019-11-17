package router

import (
	"survey-app/server/middleware"
	"github.com/gorilla/mux"
	"net/http"
)

// Router is exported and used in main.go
func Router() *mux.Router {
	router := mux.NewRouter()


	buildHandler := http.FileServer(http.Dir("../client/build"))
	router.PathPrefix("/").Handler(buildHandler)
	staticHandler := http.FileServer(http.Dir("../client/build/static"))
	router.PathPrefix("/static/").Handler(staticHandler)

	router.HandleFunc("/api/survey", middleware.GetAllSurveys).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/survey/{id}", middleware.GetSurvey).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/survey", middleware.CreateSurvey).Methods("POST", "OPTIONS")		
	router.HandleFunc("/api/survey/{id}/vote", middleware.VoteSurvey).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/survey/{id}/results", middleware.GetSurvey).Methods("GET", "OPTIONS")
	
	return router
}

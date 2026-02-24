package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"github.com/ozcademy-platform/backend/internal/auth"
	"github.com/ozcademy-platform/backend/internal/booking"
	"github.com/ozcademy-platform/backend/internal/catalog"
	"github.com/ozcademy-platform/backend/internal/liveclass"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, relying on system environment variables")
	}

	// 1. Database Connection
	// Default to local PostgreSQL if ENV is not set.
	dbUser := getEnv("DB_USER", "postgres")
	dbPassword := getEnv("DB_PASSWORD", "415327") // Default local password
	dbName := getEnv("DB_NAME", "ozcademy")
	dbHost := getEnv("DB_HOST", "localhost")
	dbPort := getEnv("DB_PORT", "5432")

	dsn := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		dbHost, dbPort, dbUser, dbPassword, dbName)

	db, err := sql.Open("postgres", dsn)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer db.Close()

	if err := db.Ping(); err != nil {
		log.Fatalf("Failed to ping database: %v", err)
	}
	log.Println("Successfully connected to PostgreSQL")

	// 2. Dependency Injection
	jwtSecret := getEnv("JWT_SECRET", "supersecretkey") // Default local secret
	authRepo := auth.NewRepository(db)
	authSvc := auth.NewService(authRepo, jwtSecret)
	authHandler := auth.NewHandler(authSvc)

	catalogRepo := catalog.NewRepository(db)
	catalogSvc := catalog.NewService(catalogRepo)
	catalogHandler := catalog.NewHandler(catalogSvc)

	// Setup Booking Domain
	bookingRepo := booking.NewRepository(db)
	bookingService := booking.NewService(bookingRepo)
	bookingHandler := booking.NewHandler(bookingService)

	// Setup Liveclass Domain
	liveclassRepo := liveclass.NewRepository(db)
	liveclassService := liveclass.NewService(liveclassRepo)
	liveclassHandler := liveclass.NewHandler(liveclassService)

	authMiddleware := auth.AuthMiddleware(jwtSecret)

	// 3. Native Routing (Go 1.22+)
	mux := http.NewServeMux()
	authHandler.RegisterRoutes(mux)
	catalogHandler.RegisterRoutes(mux, authMiddleware)
	bookingHandler.RegisterRoutes(mux, authMiddleware)
	liveclassHandler.RegisterRoutes(mux, authMiddleware)

	// 4. CORS Middleware
	handler := enableCORS(mux)

	port := getEnv("PORT", "8080")
	log.Printf("Starting server on port %s", port)
	if err := http.ListenAndServe(":"+port, handler); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}

func getEnv(key, fallback string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return fallback
}

// enableCORS represents a simple CORS middleware wrapper
func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*") // For local development only
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

		// Handle preflight requests
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

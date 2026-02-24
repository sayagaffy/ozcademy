---
name: golang-backend
description: Golang Backend Development Best Practices (Loosely Coupled Monolith with Domain-Driven Structure)
---

# Golang Backend Architecture Guidelines

When building or modifying the Go backend, you MUST follow the **Domain-Driven 3-Layer Architecture**. Do not group files by technical types (e.g., avoid `internal/model`, `internal/repository`). Group files by their business feature domain (e.g., `internal/auth/`).

Example feature structure (`internal/auth/`):
- `model.go`
- `repository.go`
- `service.go`
- `handler.go`
- `service_test.go`

## 1. Handler Layer (`handler.go`)
- Only responsible for parsing incoming requests and formatting outgoing responses (REST/gRPC).
- Use Go 1.22+ `net/http` standard native routing or `go-chi/chi`.
- No business logic or database interactions allowed here.
- Converts HTTP requests into Service method calls.

## 2. Service Layer (`service.go`)
- Contains pure business logic.
- Must not know anything about HTTP (no `*http.Request` here).
- Calls the Repository layer for data persistence.

## 3. Repository Layer (`repository.go`)
- The *only* layer allowed to interact with the database (PostgreSQL).
- Responsible for executing SQL queries and mapping results to domain models.
- Return domain models (e.g., structs in `model.go`) instead of raw database rows.

## 4. Mandatory Testing (`service_test.go`)
- Unit testing for the Service layer is MANDATORY.
- Mock the Repository layer interface so the Service can be tested in isolation.

## Additional Rules:
- Avoid empty `interface{}` ("Escape to Heap") to minimize Garbage Collection overhead.
- Use `sync.Pool` for objects allocated frequently if performance is critical.
- Use `golang-jwt/jwt/v5` for JWT authentication.
- Use `golang.org/x/crypto/bcrypt` for secure password hashing.

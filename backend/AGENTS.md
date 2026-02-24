# Backend AI Instructions
- Backend uses high performance Go (Golang), PostgreSQL, and JWT.
- Avoid using empty `interface{}` ("Escape to Heap") to prevent heavy Garbage Collection. Use `sync.Pool` if necessary.
- Use a Loosely Coupled Monolith architecture based on Domain-Driven Structure (e.g. `internal/auth/model.go`, `internal/auth/repository.go`). Group files by business domain, not technical type.
- Unit Testing is MANDATORY. Every domain service must have tests (e.g. `internal/auth/service_test.go`) utilizing mocked repositories.
- Use standard library `net/http` routing (Go 1.22+) or `go-chi/chi` for handlers.

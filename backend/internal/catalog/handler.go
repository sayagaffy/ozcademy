package catalog

import (
	"encoding/json"
	"net/http"
)

type Handler struct {
	service Service
}

func NewHandler(service Service) *Handler {
	return &Handler{service: service}
}

func (h *Handler) RegisterRoutes(mux *http.ServeMux, authMiddleware func(http.Handler) http.Handler) {
	// Protected endpoints (require JWT)
	mux.Handle("GET /modules", authMiddleware(http.HandlerFunc(h.HandleGetModules)))
	mux.Handle("GET /mentors", authMiddleware(http.HandlerFunc(h.HandleGetMentors)))
}

func (h *Handler) HandleGetModules(w http.ResponseWriter, r *http.Request) {
	modules, err := h.service.FetchModules(r.Context())
	if err != nil {
		http.Error(w, "failed to get modules", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(modules); err != nil {
		http.Error(w, "failed to encode response", http.StatusInternalServerError)
	}
}

func (h *Handler) HandleGetMentors(w http.ResponseWriter, r *http.Request) {
	mentors, err := h.service.FetchMentors(r.Context())
	if err != nil {
		http.Error(w, "failed to get mentors", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(mentors); err != nil {
		http.Error(w, "failed to encode response", http.StatusInternalServerError)
	}
}

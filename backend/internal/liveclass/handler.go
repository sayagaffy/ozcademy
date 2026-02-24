package liveclass

import (
	"encoding/json"
	"net/http"

	"github.com/ozcademy-platform/backend/internal/auth"
)

type Handler struct {
	service Service
}

func NewHandler(service Service) *Handler {
	return &Handler{service: service}
}

func (h *Handler) RegisterRoutes(mux *http.ServeMux, authMiddleware func(http.Handler) http.Handler) {
	mux.Handle("GET /api/liveclass/token", authMiddleware(http.HandlerFunc(h.HandleGetToken)))
}

func (h *Handler) HandleGetToken(w http.ResponseWriter, r *http.Request) {
	studentID, ok := r.Context().Value(auth.UserIDKey).(string)
	if !ok || studentID == "" {
		http.Error(w, "unauthorized", http.StatusUnauthorized)
		return
	}

	bookingID := r.URL.Query().Get("booking_id")
	if bookingID == "" {
		http.Error(w, "booking_id is required", http.StatusBadRequest)
		return
	}

	resp, err := h.service.GenerateToken(r.Context(), bookingID, studentID)
	if err != nil {
		if err.Error() == "unauthorized: you do not have access to this room" {
			http.Error(w, err.Error(), http.StatusForbidden)
		} else {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}

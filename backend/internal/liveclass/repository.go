package liveclass

import (
	"context"
	"database/sql"
)

type Repository interface {
	VerifyBookingUser(ctx context.Context, bookingID string, userID string) (bool, error)
}

type repository struct {
	db *sql.DB
}

func NewRepository(db *sql.DB) Repository {
	return &repository{db: db}
}

func (r *repository) VerifyBookingUser(ctx context.Context, bookingID string, userID string) (bool, error) {
	// For simplicity, we only verify based on student_id for now.
	// In a real scenario, mentor verification might be added here too.
	query := `
		SELECT EXISTS(
			SELECT 1 FROM bookings 
			WHERE id = $1 AND student_id = $2
		)
	`
	var exists bool
	err := r.db.QueryRowContext(ctx, query, bookingID, userID).Scan(&exists)
	if err != nil {
		return false, err
	}
	return exists, nil
}

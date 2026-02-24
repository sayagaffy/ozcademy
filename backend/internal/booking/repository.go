package booking

import (
	"context"
	"database/sql"
)

type Repository interface {
	CreateBooking(ctx context.Context, booking *Booking) error
}

type repository struct {
	db *sql.DB
}

func NewRepository(db *sql.DB) Repository {
	return &repository{db: db}
}

func (r *repository) CreateBooking(ctx context.Context, b *Booking) error {
	query := `
		INSERT INTO bookings (student_id, mentor_id, session_type, schedule_date, schedule_time, goals_description, portfolio_link, price)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
		RETURNING id, status, created_at, updated_at
	`

	err := r.db.QueryRowContext(ctx, query,
		b.StudentID,
		b.MentorID,
		b.SessionType,
		b.ScheduleDate,
		b.ScheduleTime,
		b.GoalsDescription,
		b.PortfolioLink,
		b.Price,
	).Scan(&b.ID, &b.Status, &b.CreatedAt, &b.UpdatedAt)

	return err
}

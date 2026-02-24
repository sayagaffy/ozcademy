package booking

import (
	"context"
	"errors"
	"time"
)

type Service interface {
	CreateBooking(ctx context.Context, studentID string, req *CreateBookingRequest) (*Booking, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) Service {
	return &service{repo: repo}
}

func (s *service) CreateBooking(ctx context.Context, studentID string, req *CreateBookingRequest) (*Booking, error) {
	// Validate required fields
	if req.MentorID == "" || req.SessionType == "" || req.GoalsDescription == "" {
		return nil, errors.New("missing required fields")
	}

	// Validate date format (YYYY-MM-DD)
	if _, err := time.Parse("2006-01-02", req.ScheduleDate); err != nil {
		return nil, errors.New("invalid schedule_date format, expected YYYY-MM-DD")
	}

	// Validate time format (HH:MM or HH:MM:SS)
	if _, err := time.Parse("15:04", req.ScheduleTime); err != nil {
		if _, err2 := time.Parse("15:04:05", req.ScheduleTime); err2 != nil {
			return nil, errors.New("invalid schedule_time format, expected HH:MM")
		}
	}

	if req.Price < 0 {
		return nil, errors.New("price cannot be negative")
	}

	booking := &Booking{
		StudentID:        studentID,
		MentorID:         req.MentorID,
		SessionType:      req.SessionType,
		ScheduleDate:     req.ScheduleDate,
		ScheduleTime:     req.ScheduleTime,
		GoalsDescription: req.GoalsDescription,
		PortfolioLink:    req.PortfolioLink,
		Price:            req.Price,
	}

	err := s.repo.CreateBooking(ctx, booking)
	if err != nil {
		return nil, err
	}

	return booking, nil
}

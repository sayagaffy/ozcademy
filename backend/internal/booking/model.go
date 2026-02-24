package booking

import (
	"time"
)

type Booking struct {
	ID               string    `json:"id"`
	StudentID        string    `json:"studentId"`
	MentorID         string    `json:"mentorId"`
	SessionType      string    `json:"sessionType"`
	ScheduleDate     string    `json:"scheduleDate"`
	ScheduleTime     string    `json:"scheduleTime"`
	GoalsDescription string    `json:"goalsDescription"`
	PortfolioLink    *string   `json:"portfolioLink,omitempty"`
	Status           string    `json:"status"`
	Price            int64     `json:"price"`
	CreatedAt        time.Time `json:"createdAt"`
	UpdatedAt        time.Time `json:"updatedAt"`
}

type CreateBookingRequest struct {
	MentorID         string  `json:"mentorId"`
	SessionType      string  `json:"sessionType"`
	ScheduleDate     string  `json:"scheduleDate"`
	ScheduleTime     string  `json:"scheduleTime"`
	GoalsDescription string  `json:"goalsDescription"`
	PortfolioLink    *string `json:"portfolioLink,omitempty"`
	Price            int64   `json:"price"`
}

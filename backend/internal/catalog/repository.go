package catalog

import (
	"context"
	"database/sql"
)

type Repository interface {
	GetModules(ctx context.Context) ([]*Module, error)
	GetMentors(ctx context.Context) ([]*Mentor, error)
}

type repository struct {
	db *sql.DB
}

func NewRepository(db *sql.DB) Repository {
	return &repository{db: db}
}

func (r *repository) GetModules(ctx context.Context) ([]*Module, error) {
	query := `
		SELECT id, title, mentor_name, rating, lessons_count, image_url, category, price 
		FROM modules 
		ORDER BY created_at ASC
	`
	rows, err := r.db.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var modules []*Module
	for rows.Next() {
		var m Module
		var price sql.NullString
		if err := rows.Scan(&m.ID, &m.Title, &m.MentorName, &m.Rating, &m.LessonsCount, &m.ImageURL, &m.Category, &price); err != nil {
			return nil, err
		}
		if price.Valid {
			m.Price = &price.String
		}
		modules = append(modules, &m)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	if len(modules) == 0 {
		return []*Module{}, nil
	}

	return modules, nil
}

func (r *repository) GetMentors(ctx context.Context) ([]*Mentor, error) {
	query := `
		SELECT id, name, role, rating, image_url, status, price_start 
		FROM mentors 
		ORDER BY created_at ASC
	`
	rows, err := r.db.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var mentors []*Mentor
	for rows.Next() {
		var m Mentor
		var priceStart sql.NullString
		if err := rows.Scan(&m.ID, &m.Name, &m.Role, &m.Rating, &m.ImageURL, &m.Status, &priceStart); err != nil {
			return nil, err
		}
		if priceStart.Valid {
			m.PriceStart = &priceStart.String
		}
		mentors = append(mentors, &m)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	if len(mentors) == 0 {
		return []*Mentor{}, nil
	}

	return mentors, nil
}

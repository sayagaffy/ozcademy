package catalog

import (
	"context"
)

type Service interface {
	FetchModules(ctx context.Context) ([]*Module, error)
	FetchMentors(ctx context.Context) ([]*Mentor, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) Service {
	return &service{repo: repo}
}

func (s *service) FetchModules(ctx context.Context) ([]*Module, error) {
	return s.repo.GetModules(ctx)
}

func (s *service) FetchMentors(ctx context.Context) ([]*Mentor, error) {
	return s.repo.GetMentors(ctx)
}

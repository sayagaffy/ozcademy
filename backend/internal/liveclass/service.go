package liveclass

import (
	"context"
	"errors"
	"os"
	"time"

	"github.com/livekit/protocol/auth"
)

type Service interface {
	GenerateToken(ctx context.Context, bookingID string, studentID string) (*TokenResponse, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) Service {
	return &service{repo: repo}
}

func (s *service) GenerateToken(ctx context.Context, bookingID string, studentID string) (*TokenResponse, error) {
	hasAccess, err := s.repo.VerifyBookingUser(ctx, bookingID, studentID)
	if err != nil {
		return nil, err
	}
	if !hasAccess {
		return nil, errors.New("unauthorized: you do not have access to this room")
	}

	apiKey := os.Getenv("LIVEKIT_API_KEY")
	if apiKey == "" {
		apiKey = "devkey_livekit_placeholder"
	}
	apiSecret := os.Getenv("LIVEKIT_API_SECRET")
	if apiSecret == "" {
		apiSecret = "secret_livekit_placeholder_secret_key"
	}
	serverUrl := os.Getenv("LIVEKIT_URL")
	if serverUrl == "" {
		serverUrl = "wss://ozcademy-placeholder-ur.livekit.cloud"
	}

	canPublish := true
	canSubscribe := true
	canPublishData := true

	at := auth.NewAccessToken(apiKey, apiSecret)
	grant := &auth.VideoGrant{
		RoomJoin:       true,
		Room:           bookingID,
		CanPublish:     &canPublish,
		CanSubscribe:   &canSubscribe,
		CanPublishData: &canPublishData,
	}
	at.AddGrant(grant).
		SetIdentity(studentID).
		SetValidFor(time.Hour * 3)

	token, err := at.ToJWT()
	if err != nil {
		return nil, err
	}

	return &TokenResponse{
		Token:     token,
		ServerUrl: serverUrl,
	}, nil
}

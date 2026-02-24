package auth

import (
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"golang.org/x/crypto/bcrypt"
)

// MockRepository is a mock implementation of the Repository interface.
type MockRepository struct {
	mock.Mock
}

func (m *MockRepository) CreateUser(ctx context.Context, user *User) error {
	args := m.Called(ctx, user)
	return args.Error(0)
}

func (m *MockRepository) GetUserByEmail(ctx context.Context, email string) (*User, error) {
	args := m.Called(ctx, email)
	if args.Get(0) != nil {
		return args.Get(0).(*User), args.Error(1)
	}
	return nil, args.Error(1)
}

func TestRegister(t *testing.T) {
	mockRepo := new(MockRepository)
	svc := NewService(mockRepo, "secret")

	req := &RegisterRequest{
		Email:    "test@example.com",
		Password: "password123",
	}

	// We don't know the exact hash, so we match anything of type *User with matching email and non-empty hash
	mockRepo.On("CreateUser", mock.Anything, mock.MatchedBy(func(user *User) bool {
		return user.Email == req.Email && user.PasswordHash != ""
	})).Return(nil)

	err := svc.Register(context.Background(), req)

	assert.NoError(t, err)
	mockRepo.AssertExpectations(t)
}

func TestLogin_Success(t *testing.T) {
	mockRepo := new(MockRepository)
	svc := NewService(mockRepo, "secret")

	password := "password123"
	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)

	mockUser := &User{
		ID:           "123",
		Email:        "test@example.com",
		PasswordHash: string(hashedPassword),
	}

	mockRepo.On("GetUserByEmail", mock.Anything, "test@example.com").Return(mockUser, nil)

	req := &LoginRequest{
		Email:    "test@example.com",
		Password: password,
	}

	token, err := svc.Login(context.Background(), req)

	assert.NoError(t, err)
	assert.NotEmpty(t, token)
	mockRepo.AssertExpectations(t)
}

func TestLogin_InvalidPassword(t *testing.T) {
	mockRepo := new(MockRepository)
	svc := NewService(mockRepo, "secret")

	password := "password123"
	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)

	mockUser := &User{
		ID:           "123",
		Email:        "test@example.com",
		PasswordHash: string(hashedPassword),
	}

	mockRepo.On("GetUserByEmail", mock.Anything, "test@example.com").Return(mockUser, nil)

	req := &LoginRequest{
		Email:    "test@example.com",
		Password: "wrongpassword",
	}

	token, err := svc.Login(context.Background(), req)

	assert.ErrorIs(t, err, ErrInvalidCredentials)
	assert.Empty(t, token)
	mockRepo.AssertExpectations(t)
}

func TestLogin_UserNotFound(t *testing.T) {
	mockRepo := new(MockRepository)
	svc := NewService(mockRepo, "secret")

	mockRepo.On("GetUserByEmail", mock.Anything, "notfound@example.com").Return(nil, ErrUserNotFound)

	req := &LoginRequest{
		Email:    "notfound@example.com",
		Password: "password123",
	}

	token, err := svc.Login(context.Background(), req)

	assert.ErrorIs(t, err, ErrInvalidCredentials)
	assert.Empty(t, token)
	mockRepo.AssertExpectations(t)
}

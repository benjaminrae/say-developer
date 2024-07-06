package auth

import (
	"fmt"
	"os"
	"time"

	"github.com/gorilla/sessions"
	_ "github.com/joho/godotenv/autoload"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/github"
	"github.com/markbates/goth/providers/google"
)

type SessionUser struct {
	UserID            string                 `json:"userId"`
	RawData           map[string]interface{} `json:"rawData"`
	Provider          string                 `json:"provider"`
	Email             string                 `json:"email"`
	Name              string                 `json:"name"`
	FirstName         string                 `json:"firstName"`
	LastName          string                 `json:"lastName"`
	NickName          string                 `json:"nickName"`
	Description       string                 `json:"description"`
	AvatarURL         string                 `json:"avatarUrl"`
	Location          string                 `json:"location"`
	AccessToken       string                 `json:"accessToken"`
	AccessTokenSecret string                 `json:"accessTokenSecret"`
	RefreshToken      string                 `json:"refreshToken"`
	ExpiresAt         time.Time              `json:"expiresAt"`
	IDToken           string                 `json:"idToken"`
}

type Session struct {
	UserId string      `json:"userId"`
	User   SessionUser `json:"user"`
}

const (
	// TODO: This should come from .env
	key    = "key"
	MaxAge = 86400 * 30
	IsProd = false
)

func New() {

	domain := os.Getenv("SERVICE_URL")
	googleClientId := os.Getenv("GOOGLE_CLIENT_ID")
	googleClientSecret := os.Getenv("GOOGLE_CLIENT_SECRET")
	githubClientId := os.Getenv("GITHUB_CLIENT_ID")
	githubClientSecret := os.Getenv("GITHUB_CLIENT_SECRET")

	store := sessions.NewCookieStore([]byte(key))
	store.MaxAge(MaxAge)

	store.Options.Path = "/"
	store.Options.HttpOnly = true
	store.Options.Secure = IsProd

	gothic.Store = store

	goth.UseProviders(
		google.New(googleClientId, googleClientSecret, fmt.Sprintf("%s%s", domain, "/auth/google/callback")),
		github.New(githubClientId, githubClientSecret, fmt.Sprintf("%s%s", domain, "/auth/github/callback")),
	)

}

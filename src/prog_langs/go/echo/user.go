package models

import (
	"time"
)

type User struct {
	ID        uint      `gorm:"primaryKey"`
	Email     string    `gorm:"unique;not null"`
	Password  string    `gorm:"not null"` // ハッシュ化されたパスワード
	Status    string    `gorm:"default:active"` // active / suspended など
	CreatedAt time.Time
}

type UserResponse struct {
	ID     uint   `json:"id"`
	Email  string `json:"email"`
	Status string `json:"status"`
}
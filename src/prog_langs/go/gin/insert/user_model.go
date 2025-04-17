package model

import (
    "gorm.io/gorm"
)

// Userモデルの定義
type User struct {
    gorm.Model
    Name string
}

// 各種db処理
func GetAll() (datas []User) {
    result := Db.Find(&datas)
    if result.Error != nil {
        panic(result.Error)
    }
    return
}

func GetOne(id int) (data User) {
    result := Db.First(&data, id)
    if result.Error != nil {
        panic(result.Error)
    }
    return
}

func (b *User) Create() {
    result := Db.Create(b)
    if result.Error != nil {
        panic(result.Error)
    }
}

func (b *User) Update() {
    result := Db.Save(b)
    if result.Error != nil {
        panic(result.Error)
    }
}

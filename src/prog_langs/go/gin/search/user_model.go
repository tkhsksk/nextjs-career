package model

import (
    "gorm.io/gorm"
)

// Userモデルの定義
type User struct {
    gorm.Model
    Name string
}

// 検索関数を追加
func Search(word string) (datas []User) {
    word = "%" + word + "%"
    result := Db.Where("name LIKE ?", word).Find(&datas)
    if result.Error != nil {
        panic(result.Error)
    }
    return
}

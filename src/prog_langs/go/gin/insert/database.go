package model

import (
    "fmt"
    _"os"
    "time"

    "gorm.io/driver/mysql"
    "gorm.io/gorm"
)

var Db *gorm.DB

func init() {
    user := "guest"
    pw   := "DK4XMDVATL2N8448CMF9"
    db_name := "gin"
    // 情報を元にdb接続
    var path string = fmt.Sprintf("%s:%s@tcp(localhost)/%s?charset=utf8&parseTime=true", user, pw, db_name)
    dialector := mysql.Open(path)
    var err error
    if Db, err = gorm.Open(dialector); err != nil {
        connect(dialector, 100)
    }
    // マイグレーション処理
    Db.AutoMigrate(&User{})
    fmt.Println("db connected!!")
}


// 接続処理
func connect(dialector gorm.Dialector, count uint) {
    var err error
    if Db, err = gorm.Open(dialector); err != nil {
        if count > 1 {
            time.Sleep(time.Second * 2)
            count--
            fmt.Printf("retry... count:%v\n", count)
            connect(dialector, count)
            return
        }
        panic(err.Error())
    }
}
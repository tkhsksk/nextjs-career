package main

import (
    "log"
    "database/sql"
    _ "github.com/go-sql-driver/mysql"
)

func main() {
    // データベースのハンドルを取得する
    db, err := sql.Open("mysql", "guest:DK4XMDVATL2N8448CMF9@tcp(localhost)/go")
    if err != nil {
      // エラーが発生したらログを残す
      log.Fatal(err)
    }

    ins, err := db.Prepare("update toy set name = (?) where id = (?)")
    if err != nil {
        log.Fatal(err)
    }
    ins.Exec("robot",1)

    defer db.Close()
}

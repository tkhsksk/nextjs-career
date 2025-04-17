package main

import (
    "log"
    "fmt"
    "database/sql"
    _ "github.com/go-sql-driver/mysql"
)

// selectしたデータを格納するToy構造体を宣言しておく
type Toy struct {
    id   int
    name string
}

func main() {
    // データベースのハンドルを取得する
    db, err := sql.Open("mysql", "guest:DK4XMDVATL2N8448CMF9@tcp(localhost)/go")
    if err != nil {
      // エラーが発生したらログを残す
      log.Fatal(err)
    }
    // selectを実行してデータ取得
    rows, err := db.Query("select id, name from toy")
    // toyResult=Toy構造体
    var toyResult []Toy

    // selectで取得したデータで配列を作成
    for rows.Next() {
        // toyをToy構造体にする
        var toy Toy
        // エラーが発生したらログを残す
        if err := rows.Scan(&toy.id,&toy.name); err != nil {
            log.Fatal(err)
        }
        // データを配列に格納
        toyResult = append(toyResult,toy)
    }

    // 作成した配列を出力
    for _,u := range toyResult{
        fmt.Println("id: ", u.id,", name: ", u.name)
    }
    
    // close
    defer db.Close()
}

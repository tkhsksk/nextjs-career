// main.go
package main

import (
    // ここでprice.goのpackage pkgを取得
    "struct/pkg"
)

// 外部で取得する必要がないので、mainでOK
func main() {
    drink := pkg.Product{Name: "coffee", Price: 700}
    // pkg.Productをdrinkに代入した時点で、Productメソッドを利用することができる
    drink.Order()
}
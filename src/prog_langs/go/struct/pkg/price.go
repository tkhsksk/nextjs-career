// price.go
package pkg

import (
    "fmt"
)

// 外部パッケージpackage mainから取得できるPublicにするため、
// メソッド名の頭文字を大文字の"P"roductにする
type Product struct {
    // 同じく、"N"ameにする
    Name  string
    // 同じく、"P"riceにする
    Price int
}

func (p Product) String() string {
    return fmt.Sprintf("お飲み物%vは、%d円になります", p.Name, p.Price)
}

// 同じく、"O"rderにする
func (p Product) Order() {
    fmt.Println(p)
}
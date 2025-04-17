package main

import (
 "fmt"
 "math/big"
)

// 型を作る
type product struct {
    name  string
    price int
    tax   int
}

// 型を元に関数で結果を返す
// 関数宣言 (型の取得) 関数名(変数 型)
func (p product) getInvoice(i int) {
    // 税率
    taxRate := int64(p.tax)
    // 税込金額
    taxInPrice := int64(p.price)
    quenty := int64(i)

    // 税込金額を有理数(分数)として表現
    taxInPriceRat := big.NewRat(taxInPrice, 1)
    // 税込金額を宣言し直して入れ直し
    taxExPriceRat := new(big.Rat).Quo(taxInPriceRat, big.NewRat(100+taxRate, 100))
    // 税抜金額
    taxExPrice, remainder := new(big.Int).DivMod(taxExPriceRat.Num(), taxExPriceRat.Denom(), new(big.Int))

    if remainder.Cmp(big.NewInt(0)) > 0 {
        taxExPrice.Add(taxExPrice, big.NewInt(1))
    }

    // 商品1つあたりの税額
    taxPrice := taxInPrice - int64(taxExPrice.Uint64())

    // 税抜、税額それぞれの総計
    taxExPriceTotal := new(big.Int).Mul(taxExPrice, big.NewInt(quenty))
    taxTotal := new(big.Int).Mul(big.NewInt(taxPrice), big.NewInt(quenty))
    // それぞれの総計を合計
    invoice := new(big.Int).Add(taxExPriceTotal, taxTotal)


    fmt.Printf("%s、1点あたりの税込金額は¥%d\n",p.name, p.price)
    fmt.Printf("税抜金額¥%d、税額は¥%d\n",taxExPrice, taxPrice)
    fmt.Println("-----通常の合計------")
    fmt.Printf("%d点購入したので、支払い金額は¥%d\n", i, p.price*i)
    fmt.Println("-----インボイスを考慮した合計------")
    fmt.Printf("%d点購入したので\n", i)
    fmt.Printf("税抜価格の合計が¥%d、税額の合計が¥%d、支払い金額は¥%d\n", taxExPriceTotal, taxTotal, invoice)
}

// 型に値を当てはめて、関数を実行する
func main() {
    p := product{
        name: "redbull",
        price: 220,
        tax:   8,
    }

    p.getInvoice(7)
}
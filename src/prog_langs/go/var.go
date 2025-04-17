package main

import "fmt"

func main() {
  //以下、内容としては同じ変数宣言
  
  // 厳格に文字列であることを宣言する場合
  var x string = "test"
  // 省略パターン1
  var y = "test"
  // 省略パターン2
  z := "test"

  fmt.Println(x)
  fmt.Println(y)
  fmt.Println(z)
}
package main

import "fmt"

func main() {
  arr := []string{"hoge", "piyo", "huga", "test"}

  for i, v := range arr {
    fmt.Println(i, v)
  }
}

// 実行結果
// 0 hoge
// 1 piyo
// 2 huga
// 3 test
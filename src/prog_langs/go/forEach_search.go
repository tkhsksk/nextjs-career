package main

import (
    "fmt"
    "strings"
)

func main() {
  search := []string{}
  arr := []string{"hoge", "piyo", "huga", "test"}

  for i, v := range arr {
    _ = i
    if strings.Contains(v, "e") {
      search = append(search, v)
    }
  }

  for i, v := range search {
    fmt.Println(i, v)
  }
}

// 実行結果
/*0 hoge
1 test*/
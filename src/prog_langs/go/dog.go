package main

import (
    "fmt"
)

func main() {
  dog := []string{}
  arr := []string{"hoge", "piyo", "huga", "test"}

  for i, v := range arr {
    // indexは使わないので無効にする
    _ = i
    dog = append(dog, v+"🐶")
  }

  for i, v := range dog {
    fmt.Println(i, v)
  }
}

// 実行結果
/*0 hoge🐶
1 piyo🐶
2 huga🐶
3 test🐶*/
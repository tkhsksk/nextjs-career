package main

import "fmt"

func main() {
  arr := []string{"hoge", "piyo", "huga", "test"}

  fmt.Println(arr)
  // 0番目から1ずつ増やして4回まわす
  for i := 0; i < 4; i++{
      fmt.Println(arr[i])
  }

  // 実行結果
  // [hoge piyo huga test]
  // hoge
  // piyo
  // huga
  // test
}
package main

import "fmt"

func main() {
    fmt.Println(add(1))
    fmt.Println(addAndPrint(4))
}

// 一つの型を返す
func add(i int) int {
    return i + 1
}

// 複数の型を返す
func addAndPrint (x int) (int, string) {
    // 返す値
    return x+11, "return!"
}
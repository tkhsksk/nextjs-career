package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/get_query", func(w http.ResponseWriter, r *http.Request) {
        id := r.URL.Query().Get("id")
        fmt.Println("id =>", id)
    })
    http.ListenAndServe(":8080", nil)
}
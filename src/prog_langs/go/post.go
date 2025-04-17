package main

import (
    "fmt"
    "io"
    "net/http"
)

func main() {
    http.Handle("/", http.FileServer(http.Dir("./")))
    http.HandleFunc("/form_confirm", func(w http.ResponseWriter, r *http.Request) {
        mr, _ := r.MultipartReader()
        for {
            p, err := mr.NextPart()
            if err == io.EOF {
                break
            }

            // input type が "text" の場合は FileName() が空になる
            if len(p.FileName()) == 0 {
                d := make([]byte, 1024)
                _, _ = p.Read(d)
                fmt.Println(p.FormName(), ":", string(d), p.Header.Get("Content-Type"))
            } else {
                fmt.Println(p.FormName(), ":", p.FileName(), p.Header.Get("Content-Type"))
            }
        }

        // post後に元のhtmlにリダイレクト
        http.Redirect(w, r, "/go_form.html", 301)
    })
    http.ListenAndServe(":8080", nil)
}
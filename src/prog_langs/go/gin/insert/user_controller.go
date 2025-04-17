package controller

import (
    "gin.ksk318.me/model"
    "strconv"

    "github.com/gin-gonic/gin"
)

func CreateUser(c *gin.Context) {
    c.HTML(200, "user.html", gin.H{})
}

func CreateProcess(c *gin.Context) {
    // postを受け取ってdbに登録する
    name := c.PostForm("name")
    data := model.User{Name: name}
    data.Create()
    c.Redirect(301, "/")
}

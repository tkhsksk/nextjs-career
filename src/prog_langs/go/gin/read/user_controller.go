package controller

import (
    "gin.ksk318.me/model"
    "strconv"

    "github.com/gin-gonic/gin"
)

func CreateUser(c *gin.Context) {
    datas := model.GetAll()
    c.HTML(200, "user.html", gin.H{"datas": datas})
}

func CreateProcess(c *gin.Context) {
    // postを受け取ってdbに登録する
    name := c.PostForm("name")
    data := model.User{Name: name}
    data.Create()
    c.Redirect(301, "/")
}

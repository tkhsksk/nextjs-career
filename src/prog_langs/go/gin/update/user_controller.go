package controller

import (
    "gin.ksk318.me/model"
    "strconv"

    "github.com/gin-gonic/gin"
)

func EditUser(c *gin.Context) {
    // パラメータのidからデータを取得
    id, _ := strconv.Atoi(c.Param("id"))
    data := model.GetOne(id)
    // dataを受け渡し
    c.HTML(200, "edit.html", gin.H{"data": data})
}

func EditProcess(c *gin.Context) {
    // idからデータを取得
    id, _ := strconv.Atoi(c.PostForm("id"))
    data := model.GetOne(id)
    // nameをpostから取得して設定
    name := c.PostForm("name")
    data.Name = name
    // dataをupdate
    data.Update()
    c.Redirect(301, "/")
}

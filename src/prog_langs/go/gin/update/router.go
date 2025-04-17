package controller

import (
    "github.com/gin-gonic/gin"
)

func GetRouter() *gin.Engine {
    router := gin.Default()
    // viewを司るファイルのディレクトリを指定
    router.LoadHTMLGlob("view/*")

    // 通常ページはGET、postを受け取る処理はPOST
    // 引数にはurlとcontrollerの関数
    router.GET("/", Home)
    router.GET("/user", CreateUser)
    router.POST("/user", CreateProcess)
    router.GET("/edit/:id", EditUser)
    router.POST("/edit", EditProcess)
    return router
}
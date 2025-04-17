package controller

import (
    "github.com/gin-gonic/gin"
)

func GetRouter() *gin.Engine {
    router := gin.Default()
    // viewを司るファイルのディレクトリを指定
    router.LoadHTMLGlob("view/*")

    // 検索ページを追加
    router.GET("/search", SearchUser)
    router.POST("/search", SearchUser)
    return router
}
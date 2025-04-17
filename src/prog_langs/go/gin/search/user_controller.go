package controller

import (
    "gin.ksk318.me/model"
    "strconv"

    "github.com/gin-gonic/gin"
)

// 検索ページの表示
func SearchUser(c *gin.Context) {
    name := c.Query("name")
    datas := model.Search(name)
    c.HTML(200, "search.html", gin.H{"datas":datas, "query":name})
}


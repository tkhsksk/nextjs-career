package main

import (
    "gin.ksk318.me/controller"
)

func main() {
    router := controller.GetRouter()
    router.Run(":8090")
}
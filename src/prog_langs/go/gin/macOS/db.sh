#!/bin/bash

sudo mysql -uroot
# pcログインパスを入力
Password:
create database gin;
# 初回のみ
# create user 'guest'@'localhost' IDENTIFIED BY 'DK4XMDVATL2N8448CMF9';
grant all on gin.* TO 'guest'@'localhost';

go get -u gorm.io/gorm
go get -u "gorm.io/driver/mysql"
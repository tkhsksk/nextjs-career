#!/bin/bash

sudo mysql -uroot
create database django;
# 初回のみ
# create user 'guest'@'localhost' IDENTIFIED BY 'DK4XMDVATL2N8448CMF9';
grant all on django.* TO 'guest'@'localhost';
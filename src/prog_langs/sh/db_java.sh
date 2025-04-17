#!/bin/bash

sudo mysql -uroot
#pcログインパスを入力
Password:
create database java;
#初回のみ
create user 'guest'@'localhost' IDENTIFIED BY 'DK4XMDVATL2N8448CMF9';
grant all on java.* TO 'guest'@'localhost';
use java;
create table toy (id MEDIUMINT(10) NOT NULL AUTO_INCREMENT, name VARCHAR(20) NOT NULL, PRIMARY KEY (id));
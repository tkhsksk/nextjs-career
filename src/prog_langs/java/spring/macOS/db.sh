#!/bin/bash

sudo mysql -uroot
# pcログインパスを入力
Password:
create database spring;
# 初回のみ
# create user 'guest'@'localhost' IDENTIFIED BY 'DK4XMDVATL2N8448CMF9';
grant all on spring.* TO 'guest'@'localhost';

# マイグレーション用
use spring;

# userテーブルを作成
CREATE TABLE user (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
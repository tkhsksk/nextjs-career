#!/bin/bash

create database php;
create user 'guest'@'localhost' IDENTIFIED BY 'DK4XMDVATL2N8448CMF9';
grant all on php.* TO 'guest'@'localhost';
create table toy (id MEDIUMINT(10) NOT NULL AUTO_INCREMENT, name VARCHAR(20) NOT NULL, PRIMARY KEY (id));
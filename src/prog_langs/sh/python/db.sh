#!/bin/bash

sudo mysql -uroot
create database python;
create user 'guest'@'localhost' IDENTIFIED BY 'DK4XMDVATL2N8448CMF9';
grant all on python.* TO 'guest'@'localhost';
use python;
create table toy (id MEDIUMINT(10) NOT NULL AUTO_INCREMENT, name VARCHAR(20) NOT NULL, PRIMARY KEY (id));
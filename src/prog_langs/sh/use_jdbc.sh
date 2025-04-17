#!/bin/bash

# 以下よりjdbcコネクタをダウンロード
# https://dev.mysql.com/downloads/connector/j/
# Libraryにjarファイルをコピーしclassパスを通す

sudo cp ~/Download/mysql-connector-j-9.0.0.jar /Library/Java/Extensions
sudo echo 'export CLASSPATH=.:/Library/Java/Extensions/mysql-connector-j-9.0.0.jar:$CLASSPATH' >> ~/.bash_profile
source ~/.bash_profile
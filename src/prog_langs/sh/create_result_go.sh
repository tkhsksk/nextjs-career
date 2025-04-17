#!/bin/bash

# データベースgoに移動
use go;
# デーブルtoyのデータを一覧表示
select * from toy;

#実行結果
#+----+------+
#| id | name |
#+----+------+
#|  1 | bear |
#+----+------+
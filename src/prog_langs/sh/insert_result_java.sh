#!/bin/bash

# データベースjavaに移動
use java;
# デーブルtoyのデータを一覧表示
select * from toy;

#実行結果
#+----+------+
#| id | name |
#+----+------+
#|  1 | bear |
#+----+------+
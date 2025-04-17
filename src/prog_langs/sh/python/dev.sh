#!/bin/bash

# 場所を指定して、pythonの仮装環境を作成(初回のみ)
python3 -m venv ~/python_env
# pythonの仮装環境を実行
source ~/python_env/bin/activate

# mysqlclientでは上手くいかなかったので、バージョンを指定してinstall
(python_env) pip install mysqlclient==2.1.1
# pyファイルを実行する場合
(python_env) python ~/git/ksk318.me/python/create.py
# 仮装環境python_envを終了
(python_env) deactivate
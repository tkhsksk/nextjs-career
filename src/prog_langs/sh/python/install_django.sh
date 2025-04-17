#!/bin/bash

sudo yum install -y libffi-devel
cd <ドメインルート>

# 本体のインストール
pip3 install django
python3 -m django --version

# 出力結果
# 4.2.16
django-admin startproject demo
sudo vi demo/demo/settings.py

# ALLOWED_HOSTS = []
ALLOWED_HOSTS = ["*"]

# プロジェクトディレクトリに移動して起動
cd demo
python3 manage.py runserver 0.0.0.0:8000
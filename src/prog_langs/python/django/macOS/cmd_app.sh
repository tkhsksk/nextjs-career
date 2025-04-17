#!/bin/bash

# python仮装環境実行
source ~/python_env/bin/activate

# アプリ作成
cd ~/<プロジェクトがある階層>
python manage.py startapp myapp

tree -L 1
# .
# ├── db.sqlite3
# ├── demo
# ├── manage.py
# └── myapp

# デフォルトで入っているdbのmigration
python manage.py migrate
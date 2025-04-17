tree -L 3

.
├── db.sqlite3
├── demo
│   ├── __init__.py
│   ├── __pycache__
│   ├── asgi.py
│   ├── settings # ディレクトリ作成
│   │   ├── __init__.py # ファイル作成
│   │   ├── settings.py # ファイル移動
│   │   ├── settings_common.py # ファイル作成
│   │   └── settings_dev.py # ファイル作成
│   ├── urls.py
│   └── wsgi.py
└── manage.py
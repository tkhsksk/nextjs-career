# pythonの実行環境を起動する
source python_env/bin/activate

# pymysqlをinstall
pip install pymysql

# migrateする
python manage.py migrate

# 実行環境から抜ける
deactivate

# djangoの実行
python3 manage.py runserver 0.0.0.0:8000
# djangoを実行し続ける
python3 manage.py runserver 0.0.0.0:8000&
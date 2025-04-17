#!/bin/bash

cd <プロジェクトルート>
python manage.py makemigrations myapp

# Migrations for 'myapp':
#   myapp/migrations/0001_initial.py
#     + Create model User

python manage.py migrate

# Operations to perform:
#   Apply all migrations: admin, auth, contenttypes, myapp, sessions
# Running migrations:
#   Applying myapp.0001_initial... OK
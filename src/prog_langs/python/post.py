# CGIモジュールのインポート
import cgi

# フォームデータを取得する
form = cgi.FieldStorage()

# HTMLを記述するためのヘッダ
print("Content-Type: text/html; charset=UTF-8")
print("")

# データの値を取得する
text = form.getvalue("text")

print(text)
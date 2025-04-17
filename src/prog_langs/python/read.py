import MySQLdb

# 接続するための情報
conn = MySQLdb.connect(
	user   = 'guest',
	passwd = 'DK4XMDVATL2N8448CMF9',
	host   = 'localhost',
	db     = 'python'
)

# カーソルを指定、python独自らしい
cur = conn.cursor()
# テーブルtoyのデータを取得するsql文を格納
sql = "SELECT * FROM toy"
# sql文を実行
cur.execute(sql)
# 取得したデータをresultに格納
results = cur.fetchall()
# resultを表示
print(results)
# resultをfor文で回す
for r in results:
    print(r)

# 実行結果
# ((1, 'bear'),)
# (1, 'bear')

# カーソルを終了
cur.close
# db接続を終了
conn.close
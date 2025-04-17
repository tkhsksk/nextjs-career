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
# テーブルtoyのnameカラムにbearを登録する文
sql = "INSERT INTO toy (name) VALUES('bear')"
# 実行
cur.execute(sql)
# 実行を保存
conn.commit()
# カーソルを終了
cur.close
# db接続を終了
conn.close
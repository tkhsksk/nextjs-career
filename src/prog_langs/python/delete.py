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
# テーブルtoyにある指定のidの、nameカラムをupdateする文
sql = "DELETE FROM toy WHERE id = %s"
# 実行する際に、id:1を指定
# 第二引数は配列にする必要があるため(1,)という書き方にしている
cur.execute(sql, (1,))
# 実行を保存
conn.commit()
# カーソルを終了
cur.close
# db接続を終了
conn.close
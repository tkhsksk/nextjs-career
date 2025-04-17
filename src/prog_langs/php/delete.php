<?php
	$db = [
		'host' => 'localhost',
		'name' => 'guest',
		'pass' => 'DK4XMDVATL2N8448CMF9',
		'db'   => 'php'
	];

	$mysqli = new mysqli("$db[host]","$db[name]","$db[pass]","$db[db]");// dbに接続
	mysqli_set_charset($mysqli, 'utf8');// 文字コードをセット

	$stmt = $mysqli->prepare('DELETE FROM toy WHERE id = ?');// toyにbindしたデータでupdate
	$stmt->bind_param('i', $id);// この値をbindする、iは型を指定、int

	$id = 1;// bindする実際の値

	$stmt->execute();// ここで実行
	$mysqli->close();// dbを閉じる
?>
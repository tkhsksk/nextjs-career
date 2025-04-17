<?php
	$db = [
		'host' => 'localhost',
		'name' => 'guest',
		'pass' => 'DK4XMDVATL2N8448CMF9',
		'db'   => 'php'
	];
	// dbに接続
	$mysqli = new mysqli("$db[host]","$db[name]","$db[pass]","$db[db]");
	// 文字コードをセット
	mysqli_set_charset($mysqli, 'utf8');

	$stmt = $mysqli->prepare('UPDATE toy SET name = ? WHERE id = ?');// toyにbindしたデータでupdate
	$stmt->bind_param('si', $name, $id);// この値をbindする、siはそれぞれの型を指定、str,int

	$name = 'robot';// bindする実際の値
	$id = 1;// bindする実際の値

	$stmt->execute();// ここで実行
	$mysqli->close();// dbを閉じる
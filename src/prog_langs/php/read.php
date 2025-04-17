<?php
	$db = [
		'host' => 'localhost',
		'name' => 'guest',
		'pass' => 'DK4XMDVATL2N8448CMF9',
		'db'   => 'php'
	];

	$mysqli = new mysqli("$db[host]","$db[name]","$db[pass]","$db[db]");// dbに接続

	if( $mysqli->connect_errno ) {
		echo $mysqli->connect_errno . ' : ' . $mysqli->connect_error;
		return false;
	}

	mysqli_set_charset($mysqli, 'utf8');// 文字コードをセット
	$sql = "SELECT * FROM toy ORDER BY id DESC";// toyの内容をid降順で取得する文
	$res = mysqli_query($mysqli, $sql);// 実際に取得

	$mysqli->close();// dbを閉じる
	var_dump(mysqli_fetch_assoc($res));// 取得したものをvar_dumpで表示

	// 実行結果
	// array(2) {
	//   ["id"]=>
	//   string(1) "1"
	//   ["name"]=>
	//   string(4) "bear"
	// }
?>
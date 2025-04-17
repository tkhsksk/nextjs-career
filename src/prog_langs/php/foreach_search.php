<?php
	$x = ['test','hoge','piyo','huga'];// 元となる配列
	$search = [];// 検索データを格納する空の配列

	foreach ($x as $key => $value) {
		if(strpos($value,'e') !== false){// データにeが含まれる場合
			$search[] = $value;// $searchに格納する
		}
	}

	foreach ($search as $key => $value) {// 作成した$search配列を回す
		echo $value."\n";// すべてecho
	}
	// 実行結果
	// test
	// hoge
?>
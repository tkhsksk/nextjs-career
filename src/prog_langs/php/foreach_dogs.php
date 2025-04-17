<?php
	$x = ['test','hoge','piyo','huga'];// 元となる配列
	$dogs = [];// 検索データを格納する空の配列

	foreach ($x as $key => $value) {
		$dogs[] = $value.'🐶';// $dogsに犬をつける
	}

	foreach ($dogs as $key => $value) {// 作成した$dogs配列を回す
		echo $value."\n";// すべてecho
	}
	// 実行結果
	// test🐶
	// hoge🐶
	// piyo🐶
	// huga🐶
?>
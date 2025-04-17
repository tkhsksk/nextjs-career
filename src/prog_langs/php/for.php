<?php
	$x = ['test','hoge','piyo','huga'];

	for($val = 0; $val <= 3; $val++){// 0から始まり、3になるまで1づつ増やしながら回す、つまり計4回
		echo $x[$val]."\n";
	}
	// 実行結果
	// test
	// hoge
	// piyo
	// huga
?>
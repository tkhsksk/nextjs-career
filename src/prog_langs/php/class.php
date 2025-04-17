<?php
class Based{
	public function func00($fuga){
		return $fuga." is public";// func00はpublicなので取得可
	}

	protected function func01($fuga){
		return $fuga." is protected";// func01はprotectedなので継承していないと取得不可
	}

	private function func02($fuga){
		return $fuga." is private";// func02はprivateなので継承していても取得不可
	}
}

class NoExtend{
	public function func03($fuga){
		$base = new Based;
		return $base->func00($fuga)." to noextend";// func00はpublicなので取得可
	}

	public function func04($fuga){
		$base = new Based;
		return $base->func01($fuga)." to noextend";// func01はprotectedなので継承していないと取得不可
	}

	public function func05($fuga){
		$base = new Based;
		return $base->func02($fuga)." to noextend";// func02はprivateなので継承していても取得不可
	}
}

class Extend extends Based{
	public function func06($fuga){
		$base = new Based;
		return $base->func00($fuga)." to extend";// func00はpublicなので取得可
	}

	public function func07($fuga){
		$base = new Based;
		return $base->func01($fuga)." to extend";// func01はprotectedなので継承していれば取得可
	}

	public function func08($fuga){
		$base = new Based;
		return $base->func02($fuga)." to extend";// func02はprivateなので継承していても取得不可
	}
}

// 取得して表示
$class = new Based;
echo $class->func01("this"); 
?>
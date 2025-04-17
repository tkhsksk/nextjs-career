// クラスを定義
class PrintClass {
    let str1 = "test"
    let str2 = "hoge"

    func add(answer: Int) -> Int {
	    return answer + 1
	}

	private func minus(answer: Int) -> Int {
	    return answer - 1
	}
}
 
// クラスの定数を参照
print(PrintClass().str1) 
print(PrintClass().str2)

// クラスの関数を参照
print(PrintClass().add(answer: 1))
print(PrintClass().minus(answer: 5))
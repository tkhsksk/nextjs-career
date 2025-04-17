//  : [String]は入れなくても宣言できる
let strings : [String] = ["hoge", "piyo", "huga", "test"]

// 0から1ずつ増やして4回まわす
for i in 0 ..< 4{
    print(strings[i])

    if ( i == 3 ) {
	    print("========配列ここまで========")
	} 
}

// 配列が終わるまで（indexを取得しながら）回す
for (index, string) in strings.enumerated() {
    print(string)
    // 線の表示
    if ( index == 3 ) {
	    print("========配列ここまで========")
	}
}

// 配列が終わるまで回す
for string in strings {
    print(string)
}
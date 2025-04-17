//  : [String]は入れなくても宣言できる
let strings : [String] = ["hoge", "piyo", "huga", "test"]

//  : 多次元配列の宣言、intとstringが混在する場合は : [String: Any]を宣言する
let products : [String: Any] = ["id": 1, "name": "りんご", "price": 200]

// 配列が終わるまで回す
strings.forEach { string in
    print("Word is \(string)")
}

// 配列が終わるまで（indexを取得しながら）回す
strings.enumerated().forEach({ index, string in
    print("\(index): \(string)")
})

// 多次元配列の表示
products.forEach { (tag, product) in
    print("\(tag) is \(product)")
}
struct Product {
    let name: String // 商品名
    let price: Int // 税抜価格
    let tax: Double // 税率
    let num: Int // 個数
}

var milk = Product(name: "農協牛乳🐮", price: 260, tax: 8.0, num: 4)

// クラスを定義
class PriceTax {
    func calc(name: String, price: Int, tax: Double, num: Int)
    -> (tax: Double, sum: Int, taxsum: Double, allsum: Double)
    {
    	// 税率
    	let taxPer: Double = tax / 100
    	// 商品のみの合計金額
    	let onlySum = price * num
    	// 税額のみの合計金額
    	let onlyTaxSum = Double(onlySum) * taxPer
    	// すべての合計金額
    	let sum = Double(onlySum) + onlyTaxSum

	    return (taxPer, onlySum, onlyTaxSum, sum)
	}
}
 
// クラスの定数を参照
print("価格" + String(milk.price) + "円、" + "税率" + String(milk.tax) + "%の" + milk.name + "を" + String(milk.num) + "点購入すると")
print(PriceTax().calc(name: milk.name, price: milk.price, tax: milk.tax, num: milk.num))
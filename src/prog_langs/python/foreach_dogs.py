dogs  = []# 空の配列を作成
array = ['test', 'hoge', 'piyo', 'huga']

for val in array:
    # eが含まれる場合のみ空の配列にappendと🐶
    dogs.append(val+"🐶")

for v in dogs:# 全て回す
    print(v)

# 実行結果
# test🐶
# hoge🐶
# piyo🐶
# huga🐶
searched = []# 空の配列を作成
array    = ['test', 'hoge', 'piyo', 'huga']

for val in (f for f in array if 'e' in f):
    # eが含まれる場合のみ空の配列にappend
    searched.append(val)

for v in searched:# 全て回す
    print(v)

# 実行結果
# test
# hoge
array = ['test', 'hoge', 'piyo', 'huga']

for val in (f for f in array if 'e' in f):
    # eが含まれる場合のみprint
    print(val)

# 実行結果
# test
# hoge
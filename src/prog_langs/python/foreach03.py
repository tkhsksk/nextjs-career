array = ['hoge', 'piyo', 'huga']

for index in range(1, 3):
    # indexの部分はarray以外であればなんでもok、基本はindex
    # 回数のrangeは範囲を指定、インデックス1番目から3個目まで
    print('配列のvalueは'+array[index]+'、indexは'+str(index))

# 実行結果
# 配列のvalueはpiyo、indexは1
# 配列のvalueはhuga、indexは2
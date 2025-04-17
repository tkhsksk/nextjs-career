array = ['hoge', 'piyo', 'huga']

for index in range(len(array)):
    # indexの部分はarray以外であればなんでもok、基本はindex
    # 回数のrangeは配列の長さ分、つまりすべて表示するfor index in array:と同じ
    print('配列のvalueは'+array[index]+'、indexは'+str(index))

# 実行結果
# 配列のvalueはhoge、indexは0
# 配列のvalueはpiyo、indexは1
# 配列のvalueはhuga、indexは2
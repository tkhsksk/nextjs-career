import urllib.parse

url = 'https://example.com?hoge=value1&piyo=value2'

# パラメータを取得
param = urllib.parse.urlparse(url)
qs = param.query

# パラメータを表示
print(qs)
# パラメータをさらに配列に変換
param_arr = urllib.parse.parse_qs(qs)
# 配列に変換したパラメータを表示
print(param_arr)

# 実行結果
# hoge=value1&piyo=value2
# {'hoge': ['value1'], 'piyo': ['value2']}
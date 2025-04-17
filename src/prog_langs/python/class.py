class PublicClass:
    def __init__(self, x):
        # selfはClass内にdefを設定する際に、必ず付ける引数
        # public,protected,privateが有効なのは__init__関数内のみ

        self.public = x     # 変数の頭に何もつけないとpublic
        self._protected = x # 変数の頭に_をつけるとprotected
        self.__private = x  # 変数の頭に__をつけるとprivate

    def Sub(self):
        print('publicは同クラスの別関数で' + self.public)
        print('protectedは同クラスの別関数で' + self._protected)
        print('privateは同クラスの別関数で' + self.__private)

class Extend(PublicClass):# ここで継承している
    def Sub(self):
        print('publicは継承先クラスで' + self.public)
        print('protectedは継承先クラスで' + self._protected)
        # print('privateは継承先クラス内で' + self.__private) ->エラーで取得できない

p = PublicClass('取得できる')
e = Extend('取得できる')

print('publicはクラス外で'+p.public)
print('protectedはクラス外で'+p._protected) # 取得できるが非推奨
# print('クラス外で'+p.__private) ->エラーで取得できない

p.Sub() 
e.Sub()

# 出力結果
# 
# publicクラス外で取得できる
# protectedクラス外で取得できる
# publicは同クラスの別関数で取得できる
# protectedは同クラスの別関数で取得できる
# privateは同クラスの別関数で取得できる
# publicは継承先クラスで取得できる
# protectedは継承先クラスで取得できる
# build
swiftc -emit-executable helloWorld.swift 
# 「helloWorld」が生成される
# 実行する場合は生成ファイルへの相対パスを打ち込み
./helloWorld
# 実行結果
# Hello World!
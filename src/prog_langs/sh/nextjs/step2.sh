#!/bin/bash

cd <ドメインのルートディレクトリ>
# メモリが足りない場合、サービスをkill
ps -x
kill [pid]
# apacheもいったん停止
sudo systemctl stop httpd

# メモリが足りなそうだったら自前のswapファイル作成スクリプトを実行
source /home/ec2-user/swap.sh

# キャッシュの削除
npm cache clean --force
rm -rf .next/cache
npx tsc --build --clean

# gitでpullした差分のビルド
npm run build
# エラーが出なければそのままrunさせて表示確認
npm run start
# exitした後も起動させ続ける
nohup yarn start &
# apacheも起動
sudo systemctl start httpd
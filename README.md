## 概要
このプロジェクトは自身のキャリアについて記載するためのページです。Next.jsで作成されています。

## 起動

開発環境では以下のコマンドで起動してください:

```bash
# まずプロジェクトディレクトリへ移動
cd /path/to/project/your-project-name

# 基本はnode.jsなので以下コマンドで
npm run dev
# もしくは
yarn dev
# もしくは
pnpm dev
# もしくは
bun dev
```

初回起動の場合は、まず以下のコマンドを実行してpackage.jsonを元に依存ライブラリをインストールしてください:

```bash
npm install
```

## 本番

本番環境では以下のコマンドでビルドしてください:

```bash
# まずプロジェクトディレクトリへ移動
cd /path/to/project/your-project-name

# 基本はnode.jsなので以下コマンドで
npm run build
```

ビルド後に起動してください

```bash
# すでに起動している場合
pm2 delete all

# pm2を利用し以下コマンドで起動
pm2 start npm --name "nextjs-app-name" -- start
# bashなどを利用し対象ディレクトリで実行しない場合
pm2 start npm --name "nextjs-app-name" --cwd /path/to/project/your-project-name -- run start
```
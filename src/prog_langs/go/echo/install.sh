# まずはgolangが入っていることを確認
go version

# echoのインストール
go get github.com/labstack/echo/v4

# モジュールを一括導入
cd /path/to/your-project-directory
go mod tidy

# .env.sampleファイルを元に.envファイルの作成
cp .env.sample .env
vi .env

# echoの実行
go run /path/to/your-project-directory/main.go
# ポストの登録
curl -X POST https://api.ksk318.me/auth/user/posts \
-H "Content-Type: application/json" \
-H "Session-ID: [ユーザーセッション]" \
-d '{
	"title": "テスト投稿",
	"content": "これはテスト投稿の内容です"
}'

# 成功時の戻り値
# {"message":"投稿が作成されました","post":{"ID":1,"UserID":1,"User":{"ID":0,"Email":"","Password":"","Status":"","CreatedAt":"0001-01-01T00:00:00Z"},"Title":"テスト投稿","Content":"これはテスト投稿の内容です","CreatedAt":"2025-04-24T13:50:15.345+09:00"}}
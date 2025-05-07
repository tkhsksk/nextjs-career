# ユーザーの登録
curl -X POST https://api.ksk318.me/user/register \
-H "Content-Type: application/json" \
-d '{
	"name": "テストユーザー",
	"email": "test@example.com",
	"password": "password123"
}'

# 成功時の戻り値
# {"message":"ユーザー登録完了"}
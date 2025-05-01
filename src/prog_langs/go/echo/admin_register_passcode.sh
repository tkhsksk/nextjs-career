# 管理者の登録
curl -X POST https://api.ksk318.me/admin/register \
-H "Content-Type: application/json" \
-d '{
	"name": "テスト管理者",
	"email": "user@example.com", # 受信できる実在アドレスにする
	"password": "password123"
}'

# 成功時の戻り値
# {"message":"ユーザー登録完了"}
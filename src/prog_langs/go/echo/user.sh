# ユーザーの取得
curl -X GET https://api.ksk318.me/users/1 \
-H "Content-Type: application/json" \
-H "Session-ID: [管理者セッション]"

# {"id":1,"email":"user@example.com","status":"active"}
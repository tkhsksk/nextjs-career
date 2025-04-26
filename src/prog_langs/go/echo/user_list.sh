# ユーザーの取得
curl -X GET http://localhost:4207/users \
-H "Content-Type: application/json" \
-H "Session-ID: [管理者セッション]"

# 成功時の戻り値
# [{"id":1,"email":"user@example.com","status":"active"},{"id":2,"email":"test@example.com","status":"active"}]
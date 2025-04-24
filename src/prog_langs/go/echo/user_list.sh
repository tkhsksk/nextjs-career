# ユーザーの取得
curl -X GET http://localhost:4207/users \
-H "Content-Type: application/json" \
-H "Session-ID: [ログイン確認時に返ってきた管理者セッションID]"

# 成功時の戻り値
# [{"id":1,"email":"user@example.com","status":"active"},{"id":2,"email":"test@example.com","status":"active"}]
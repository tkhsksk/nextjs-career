curl -X GET https://api.ksk318.me/authed/admin/profiles \
-H "Content-Type: application/json" \
-H "Session-ID: [管理者ログインセッション]"

# 戻り値の例
# {"message":"取得成功","session_id":"xxx"}
curl -X GET https://api.ksk318.me/authed/user/profiles \
-H "Content-Type: application/json" \
-H "Session-ID: [ユーザーログインセッション]"

# 戻り値の例
# {"message":"ログイン成功","session_id":"xxx"}
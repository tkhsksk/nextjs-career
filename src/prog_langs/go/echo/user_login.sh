curl -X POST https://api.ksk318.me/auth/user/login \
-H "Content-Type: application/json" \
-d '{
    "email": "user@example.com",
    "password": "password123"
}'

# 戻り値の例
# {"message":"ログイン成功","session_id":"xxx"}
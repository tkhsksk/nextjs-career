# セッションの取得
curl -X GET https://api.ksk318.me/users/sessions \
-H "Content-Type: application/json" \
-H "Session-ID: 516362b6-50b5-4c29-9b8b-18e8369b9097"

# 成功時の戻り値
# [{"id":"3ef24e94-dae0-40ed-8402-6bd5c3580b37","userId":1,"createdAt":"2025-04-24T13:38:10.088+09:00","expiresAt":"2025-04-24T16:38:10.087+09:00"},{"id":"b8440091-21a4-43de-adb0-1f53d9cc9e8e","userId":1,"createdAt":"2025-04-24T13:48:07.171+09:00","expiresAt":"2025-04-24T16:48:07.169+09:00"}]
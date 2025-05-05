# セッションの取得
curl -X GET https://api.ksk318.me/authed/admin/users/sessions/1 \
-H "Content-Type: application/json" \
-H "Session-ID: [管理者セッション]"

# 成功時の戻り値
# [{"id":"3ef24e94-dae0-40ed-8402-6bd5c3580b37","createdAt":"2025-04-24T13:38:10.088+09:00","expiresAt":"2025-04-24T16:38:10.087+09:00"},{"id":"b8440091-21a4-43de-adb0-1f53d9cc9e8e","createdAt":"2025-04-24T13:48:07.171+09:00","expiresAt":"2025-04-24T16:48:07.169+09:00"}]
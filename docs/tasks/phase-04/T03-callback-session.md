# P04-T03 — OAuth callback, user upsert, session 발급

## 목표

GitHub callback에서 state를 검증하고, token/profile을 서버에서 처리해 Deebi 세션을 발급한다.

## 변경 범위

- **해도 됨:** `GET /api/auth/callback`, token exchange, GitHub profile fetch, `users` upsert, `user_oauth_tokens` upsert, session cookie
- **하면 안 됨:** commit sync 실행, dashboard 실제 데이터 완성

## 작업

- callback route를 구현한다.
- state를 검증하고 실패 시 안전하게 거부한다.
- GitHub token exchange를 서버에서 실행한다.
- GitHub profile을 조회한다.
- `users` row를 생성/갱신한다.
- GitHub access token을 `user_oauth_tokens` private table에 저장/갱신한다.
- httpOnly session cookie를 발급한다.

## 완료 조건

- [ ] callback에서 state 검증이 있다.
- [ ] token exchange는 서버에서만 실행된다.
- [ ] `users` row가 upsert된다.
- [ ] GitHub access token이 `user_oauth_tokens`에 저장되고 API/page response에는 나오지 않는다.
- [ ] session cookie가 httpOnly로 발급된다.
- [ ] 실패 시 secret/stack trace가 노출되지 않는다.

## 개발자 테스트

1. GitHub OAuth 앱 callback URL을 localhost로 설정한다.
2. 로그인 후 `/dashboard`로 이동하는지 확인한다.
3. Supabase에서 사용자 row가 생겼는지 확인한다.

## 참조

- `docs/API_CONTRACTS.md` 2장
- `docs/DATA_MODEL.md` users

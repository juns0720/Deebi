# P04-T02 — GitHub login route와 OAuth state

## 목표

사용자를 GitHub OAuth 승인 화면으로 안전하게 보내고 state 값을 검증 가능한 형태로 준비한다.

## 변경 범위

- **해도 됨:** `GET /api/auth/login`, OAuth state 생성/저장, 로그인 버튼 연결
- **하면 안 됨:** callback token exchange, user upsert, sync 기능

## 작업

- `GET /api/auth/login` route를 만든다.
- CSRF 방지를 위한 OAuth state를 생성한다.
- state를 httpOnly cookie 또는 동등한 서버 검증 가능 방식으로 저장한다.
- 랜딩 로그인 버튼을 route에 연결한다.

## 완료 조건

- [ ] 로그인 버튼이 `/api/auth/login`으로 이동한다.
- [ ] GitHub authorize URL에 client_id, redirect_uri, scope, state가 포함된다.
- [ ] state가 서버에서 검증 가능한 방식으로 저장된다.
- [ ] secret이 URL 또는 클라이언트에 노출되지 않는다.

## 개발자 테스트

1. `/`에서 GitHub 로그인 버튼을 누른다.
2. GitHub authorize URL로 이동하는지 확인한다.
3. URL에 client secret이 없는지 확인한다.

## 참조

- `docs/API_CONTRACTS.md` 2장
- `docs/QA_CHECKLIST.md` 보안 QA


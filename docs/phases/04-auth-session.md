# Phase 04 — 인증과 세션

## 목표

GitHub OAuth 로그인, callback, logout, 세션 쿠키, `/dashboard` 보호 라우트를 구현한다. 이 단계가 끝나면 GitHub 계정으로 로그인한 사용자만 대시보드에 접근할 수 있다.

## Task 목록

Phase 04는 인증 흐름을 서버 경계, OAuth, 세션, 보호 라우트 순서로 진행한다.

| Task | 이름 | 파일 | 상태 |
|---|---|---|---|
| T01 | 서버 환경과 auth helper 기반 | `docs/tasks/phase-04/T01-auth-foundation.md` | NOT STARTED |
| T02 | GitHub login route와 OAuth state | `docs/tasks/phase-04/T02-login-state.md` | NOT STARTED |
| T03 | OAuth callback, user upsert, session 발급 | `docs/tasks/phase-04/T03-callback-session.md` | NOT STARTED |
| T04 | logout과 dashboard 보호 | `docs/tasks/phase-04/T04-logout-protected-dashboard.md` | NOT STARTED |
| T05 | 인증 보안/오류/QA | `docs/tasks/phase-04/T05-auth-security-qa.md` | NOT STARTED |

## 변경 범위

- **해도 됨:** `src/app/api/auth/**`, session helper, GitHub OAuth helper, Supabase server helper, `/dashboard` 보호 껍데기, 로그인/로그아웃 UI 연결
- **하면 안 됨:** 커밋 동기화 구현, health/points 계산, 인벤토리/뽑기 구현, 룸 구현

## 작업

- `GET /api/auth/login` 구현
- OAuth state 생성과 검증 구현
- `GET /api/auth/callback` 구현
- GitHub token exchange 구현
- GitHub user profile fetch 구현
- `users` upsert 구현
- `user_oauth_tokens` upsert 구현
- httpOnly session cookie 발급 구현
- `POST /api/auth/logout` 구현
- `/dashboard` 접근 시 세션 없으면 `/`로 돌려보낸다.
- secret이 클라이언트로 노출되지 않게 파일 경계를 지킨다.

## 완료 조건

- [ ] 로그인 버튼이 `/api/auth/login`으로 연결된다.
- [ ] callback에서 state 검증을 한다.
- [ ] GitHub token exchange는 서버에서만 실행된다.
- [ ] `users` row가 생성 또는 갱신된다.
- [ ] GitHub access token이 `user_oauth_tokens` private table에 저장된다.
- [ ] session cookie는 httpOnly다.
- [ ] 로그아웃하면 session cookie가 삭제된다.
- [ ] 세션 없는 사용자는 `/dashboard`에 접근할 수 없다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. GitHub OAuth 앱 callback URL을 `http://localhost:3000/api/auth/callback`으로 등록한다.
2. `.env.local`에 GitHub와 Supabase 값을 채운다.
3. `npm run dev`를 실행한다.
4. `/`에서 GitHub 로그인 버튼을 누른다.
5. GitHub 승인 후 `/dashboard`로 이동하는지 확인한다.
6. 로그아웃 후 `/dashboard` 접근이 막히는지 확인한다.

## 참조

- `docs/API_CONTRACTS.md` 2장
- `docs/ARCHITECTURE.md` 5장
- `docs/QA_CHECKLIST.md` 보안 QA

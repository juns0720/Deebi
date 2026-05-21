# P04-T01 — 서버 환경과 auth helper 기반

## 목표

GitHub OAuth와 세션 구현에 필요한 서버 전용 helper와 환경 변수 검증 기반을 만든다.

## 변경 범위

- **해도 됨:** auth/session helper, env parser, Supabase server helper, 타입
- **하면 안 됨:** login/callback route 완성, 커밋 동기화 구현

## 작업

- 서버에서만 읽는 env helper를 만든다.
- GitHub OAuth 설정 값을 검증한다.
- Supabase server client helper를 만든다.
- session cookie 이름, 만료, secure 옵션 기준을 정한다.

## 완료 조건

- [ ] env 누락 시 서버에서 안전하게 오류를 낸다.
- [ ] secret이 클라이언트 bundle로 import되지 않는다.
- [ ] session cookie 옵션 기준이 코드에 있다.
- [ ] `npm run typecheck`가 통과한다.

## 개발자 테스트

1. `.env.local` 없이 dev server를 실행했을 때 오류가 이해 가능한지 확인한다.
2. 클라이언트 컴포넌트에서 secret helper가 import되지 않는지 확인한다.

## 참조

- `docs/phases/04-auth-session.md`
- `docs/ARCHITECTURE.md`


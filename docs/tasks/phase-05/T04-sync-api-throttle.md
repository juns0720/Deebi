# P05-T04 — sync API, DB 반영, throttle

## 목표

`POST /api/sync`가 세션 사용자의 GitHub 활동을 조회하고 DB에 안전하게 반영하도록 한다.

## 변경 범위

- **해도 됨:** sync API, DB upsert/transaction, throttle, API 타입
- **하면 안 됨:** gacha/room 기능, 캐릭터 렌더러 구현

## 작업

- 세션 사용자를 기준으로 sync API를 만든다.
- GitHub 활동 조회, stats 집계, health/points 계산을 연결한다.
- access token은 `user_oauth_tokens`에서 서버 전용으로만 읽는다.
- `commit_stats`와 `users`를 갱신한다.
- DB 반영은 `apply_commit_sync_result(...)` 같은 RPC transaction으로 묶는다.
- 10분 throttle을 적용한다.
- API 응답을 계약과 맞춘다.

## 완료 조건

- [ ] `POST /api/sync`가 세션 사용자 기준으로 동작한다.
- [ ] 10분 이내 재호출은 cache 결과를 반환한다.
- [ ] 신규 커밋만 포인트를 지급한다.
- [ ] GitHub 실패 시 안전한 오류를 반환한다.
- [ ] DB write가 중복 보상을 만들지 않는다.
- [ ] sync DB 반영의 transaction 경계가 명확하다.

## 개발자 테스트

1. 로그인 후 sync API를 호출한다.
2. Supabase에서 `commit_stats`, `users.health`, `users.points`가 갱신되는지 확인한다.
3. 즉시 재호출했을 때 throttle 응답이 나오는지 확인한다.

## 참조

- `docs/API_CONTRACTS.md` 3.2
- `docs/DATA_MODEL.md`

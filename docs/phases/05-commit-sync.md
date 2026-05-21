# Phase 05 — 커밋 동기화

## 목표

로그인 사용자의 GitHub 활동을 서버에서 조회하고, 날짜별 커밋 집계와 건강도, 포인트를 갱신한다. 이 단계가 끝나면 대시보드 진입 또는 동기화 API 호출로 `health`, `points`, `commit_stats`가 갱신된다.

## 변경 범위

- **해도 됨:** GitHub activity client, sync API, health/points/streak 순수 로직, 관련 타입/테스트, dashboard 데이터 fetch 초안
- **하면 안 됨:** 캐릭터 렌더러 완성, 뽑기 API, 인벤토리 UI, 룸 기능

## 작업

- GitHub API 호출 방식을 결정하고 `docs/DECISIONS.md`에 기록한다.
- 저장된 access token으로 커밋 활동을 조회한다.
- 날짜별 commit count를 계산한다.
- `commit_stats`를 upsert한다.
- 신규 커밋에 대해서만 포인트를 지급한다.
- streak를 계산한다.
- health를 계산한다.
- `last_synced_at` 기준 10분 throttle을 적용한다.
- sync API 응답을 `docs/API_CONTRACTS.md`와 맞춘다.

## 완료 조건

- [ ] `POST /api/sync`가 세션 사용자를 기준으로 동작한다.
- [ ] access token은 서버에서만 읽는다.
- [ ] 10분 이내 재호출 시 cache 결과를 반환한다.
- [ ] 신규 커밋만 포인트 지급 대상이다.
- [ ] health는 항상 0~100이다.
- [ ] GitHub API 실패 시 안전한 오류를 반환한다.
- [ ] 순수 계산 로직 테스트가 있다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. 로그인한다.
2. `/api/sync`를 호출하거나 대시보드에서 동기화를 실행한다.
3. Supabase에서 `commit_stats` row가 생기는지 확인한다.
4. `users.health`, `users.points`, `users.last_synced_at`이 갱신되는지 확인한다.
5. 바로 다시 동기화했을 때 cache 사용 응답이 나오는지 확인한다.

## 참조

- `docs/SPEC.md` 8.4~9장
- `docs/API_CONTRACTS.md` 3.2장
- `docs/DATA_MODEL.md` 3.2장

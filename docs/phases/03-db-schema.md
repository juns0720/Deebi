# Phase 03 — DB 스키마

## 목표

Supabase Postgres에 Deebi MVP 데이터 구조를 만들 수 있는 SQL migration과 seed를 작성한다. 이 단계가 끝나면 `users`, `user_oauth_tokens`, `commit_stats`, `items`, `inventory`, `equipped`, `rooms`, `room_members`, `room_messages`가 문서와 일치한다.

## Task 목록

Phase 03은 DB 기반을 기능 단위로 나누어 T 번호 순서대로 진행한다.

| Task | 이름 | 파일 | 상태 |
|---|---|---|---|
| T01 | migration 골격과 공통 DB 기준 | `docs/tasks/phase-03/T01-migration-foundation.md` | NOT STARTED |
| T02 | users, token, commit_stats 테이블 | `docs/tasks/phase-03/T02-users-commit-stats.md` | NOT STARTED |
| T03 | items, inventory, equipped, seed | `docs/tasks/phase-03/T03-items-inventory-seed.md` | NOT STARTED |
| T04 | rooms, room_members, room_messages | `docs/tasks/phase-03/T04-rooms-messages.md` | NOT STARTED |
| T05 | RLS, 인덱스, SQL 검증 | `docs/tasks/phase-03/T05-rls-indexes-verification.md` | NOT STARTED |

## 변경 범위

- **해도 됨:** `supabase/migrations/**`, `supabase/seed.sql`, DB 관련 타입 초안, `docs/DECISIONS.md`, `docs/PROGRESS.md`
- **하면 안 됨:** GitHub OAuth 구현, 실제 커밋 동기화 로직, 대시보드 UI 구현, 뽑기 API 구현, 룸 UI 구현

## 작업

- `docs/DATA_MODEL.md` 기준으로 migration SQL을 작성한다.
- `items` 15개 seed를 작성한다.
- 필요한 check constraint, primary key, foreign key, unique index를 추가한다.
- RLS를 활성화하고 MVP 최소 정책을 작성한다.
- `user_oauth_tokens.access_token` 보호 원칙을 SQL 또는 정책 주석으로 명확히 한다.
- Supabase local 실행이 불가능한 환경에서도 SQL 리뷰가 가능하게 파일을 읽기 쉽게 구성한다.

## 완료 조건

- [ ] `supabase/migrations`에 Phase 03 migration 파일이 있다.
- [ ] 9개 핵심 테이블이 모두 정의되어 있다.
- [ ] `items` seed가 15개를 정확히 포함한다.
- [ ] item slot과 rarity 제약이 있다.
- [ ] health 0~100, points >= 0 제약이 있다.
- [ ] `commit_stats`에 `rewarded_commit_count`가 있다.
- [ ] `room_messages`에 룸 멤버 전용 조회/작성 정책을 적용할 수 있는 FK와 인덱스가 있다.
- [ ] RLS 활성화와 기본 정책이 있다.
- [ ] SQL 안에 secret 값이 없다.
- [ ] `docs/DATA_MODEL.md`와 충돌하지 않는다.

## 개발자 테스트

1. Supabase 프로젝트 또는 로컬 Supabase를 준비한다.
2. Phase 03 migration SQL을 적용한다.
3. seed SQL을 적용한다.
4. `items` 테이블에 15개 row가 있는지 확인한다.
5. `room_messages`가 룸 멤버 전용 조회/작성 정책을 적용할 수 있는 구조인지 확인한다.
6. `user_oauth_tokens.access_token`이 일반 조회 경로로 노출되지 않는지 정책을 확인한다.

## 참조

- `docs/DATA_MODEL.md`
- `docs/SPEC.md` 10장
- `docs/ARCHITECTURE.md` 6장
- `docs/QA_CHECKLIST.md` DB QA

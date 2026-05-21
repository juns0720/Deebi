# P03-T01 — migration 골격과 공통 DB 기준

## 목표

Supabase migration 파일 구조와 공통 DB 기준을 만든다. 이 task가 끝나면 이후 테이블 task들이 같은 SQL 스타일과 확장/타입 기준 위에서 이어진다.

## 변경 범위

- **해도 됨:** `supabase/migrations/**`, `supabase/seed.sql` placeholder, DB 주석, `docs/PROGRESS.md`
- **하면 안 됨:** 모든 테이블을 한 번에 완성, OAuth/API 구현

## 작업

- Phase 03 migration 파일을 생성한다.
- 필요한 extension, enum, timestamp helper 기준을 정한다.
- migration 재실행/리뷰가 쉽도록 섹션 주석을 배치한다.
- seed 파일이 필요하면 빈 골격을 만든다.

## 완료 조건

- [ ] `supabase/migrations`에 Phase 03 migration 파일이 있다.
- [ ] SQL 섹션이 users, commits, items, rooms, RLS 순서로 읽힌다.
- [ ] secret 값이나 개인 계정 값이 없다.
- [ ] `docs/DATA_MODEL.md`와 충돌하지 않는다.

## 개발자 테스트

1. migration 파일을 열어 섹션 구조를 확인한다.
2. SQL에 secret 값이 없는지 검색한다.
3. Supabase SQL editor 또는 local 환경에서 문법 검토가 가능한지 확인한다.

## 참조

- `docs/phases/03-db-schema.md`
- `docs/DATA_MODEL.md`


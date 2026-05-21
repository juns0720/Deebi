# P01-T03 — 핵심 제품/기술 문서 체계

## 목표

제품 요구사항, 아키텍처, DB, API, QA 기준을 분리해 에이전트가 구현 전에 필요한 정보를 빠르게 찾을 수 있게 한다.

## 변경 범위

- **해도 됨:** `docs/SPEC.md`, `docs/ARCHITECTURE.md`, `docs/DATA_MODEL.md`, `docs/API_CONTRACTS.md`, `docs/QA_CHECKLIST.md`, `docs/CONVENTIONS.md`
- **하면 안 됨:** 문서에 없는 기능 구현, MVP 제외 항목을 구현 범위로 승격

## 작업

- 제품 요구사항과 MVP 제외 항목을 SPEC에 정리한다.
- 목표 폴더 구조와 서버/클라이언트 경계를 ARCHITECTURE에 정리한다.
- Supabase 테이블, 제약, RLS 방향을 DATA_MODEL에 정리한다.
- API endpoint 계약을 API_CONTRACTS에 정리한다.
- 반복 검증 기준을 QA_CHECKLIST에 정리한다.
- 커밋/코딩/문서 규칙을 CONVENTIONS에 정리한다.

## 완료 조건

- [ ] SPEC가 핵심 경험과 제외 항목을 명확히 구분한다.
- [ ] ARCHITECTURE가 구현자가 따를 폴더 구조와 런타임 경계를 설명한다.
- [ ] DATA_MODEL과 API_CONTRACTS가 Phase 03 이후 구현 기준으로 충분하다.
- [ ] QA_CHECKLIST가 UI, DB, 보안, 배포 검증 항목을 포함한다.
- [ ] CONVENTIONS가 커밋 메시지와 문서 갱신 규칙을 포함한다.

## 개발자 테스트

1. `docs/SPEC.md`의 MVP 제외 항목을 확인한다.
2. `docs/ARCHITECTURE.md`의 폴더 구조가 현재 앱 구조와 충돌하지 않는지 확인한다.
3. `docs/API_CONTRACTS.md`를 보고 필요한 API 목록을 이해할 수 있는지 확인한다.

## 참조

- `docs/SPEC.md`
- `docs/ARCHITECTURE.md`
- `docs/DATA_MODEL.md`
- `docs/API_CONTRACTS.md`
- `docs/QA_CHECKLIST.md`


# P01-T08 — 최종 계약/정합성 보강

## 목표

Phase 02 이후 자동 개발이 중간에 흔들리지 않도록 API, DB, UI/UX, 보안, transaction, 열린 기술 결정을 최종 점검하고 보강한다. 이 task가 끝나면 에이전트는 `Current Task`만 보고도 dashboard, room, sync, gacha 구현 계약을 일관되게 따라갈 수 있다.

## 변경 범위

- **해도 됨:** `docs/API_CONTRACTS.md`, `docs/ARCHITECTURE.md`, `docs/DATA_MODEL.md`, `docs/SPEC.md`, `docs/UI_UX.md`, `docs/UI_UX_QUESTIONS.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, Phase/Task 문서의 참조 보강
- **하면 안 됨:** Phase 02 UI 구현 시작, 실제 DB migration 작성, 실제 OAuth/API 코드 구현

## 작업

- dashboard view model과 joined rooms API 계약을 명확히 한다.
- GitHub OAuth scope와 GitHub 활동 조회 방식을 MVP 기준으로 확정한다.
- session cookie 구현 방식과 access token 저장/조회 경계를 명확히 한다.
- sync/gacha 같은 중복 보상 위험 API의 transaction 전략을 명시한다.
- UI/UX 문서의 잘못된 phase 참조와 이미 확정된 항목을 정리한다.
- 열린 항목 중 MVP 진행을 막는 항목을 제거하거나 후속 확장으로 분리한다.
- 최종 검증 결과를 `docs/PROGRESS.md`에 반영한다.

## 완료 조건

- [ ] `docs/API_CONTRACTS.md`에 dashboard view model과 joined rooms 계약이 있다.
- [ ] `docs/DATA_MODEL.md`가 access token 보호 구조를 분명히 설명한다.
- [ ] `docs/ARCHITECTURE.md`에 session, GitHub activity source, transaction 전략이 명시되어 있다.
- [ ] `docs/SPEC.md`의 열린 항목이 MVP 진행을 막지 않는다.
- [ ] `docs/UI_UX.md`의 phase 참조 오류가 없다.
- [ ] `docs/DECISIONS.md`에 이번 확정 사항이 기록되어 있다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `docs/API_CONTRACTS.md`에서 dashboard와 joined rooms 계약을 확인한다.
2. `docs/ARCHITECTURE.md`에서 OAuth scope, GitHub 활동 조회, session, transaction 전략을 확인한다.
3. `docs/DATA_MODEL.md`에서 access token이 공개 사용자 row와 분리되어 있는지 확인한다.
4. `docs/SPEC.md`의 열린 항목이 후속 확장 또는 플레이 테스트 항목으로 정리되어 있는지 확인한다.
5. `npm run build`가 통과하는지 확인한다.

## 참조

- `docs/API_CONTRACTS.md`
- `docs/ARCHITECTURE.md`
- `docs/DATA_MODEL.md`
- `docs/SPEC.md`
- `docs/UI_UX.md`
- `docs/DECISIONS.md`

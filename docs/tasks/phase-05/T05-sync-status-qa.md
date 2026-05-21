# P05-T05 — sync 상태 UI와 오류 검증

## 목표

동기화 상태를 dashboard에서 이해할 수 있게 보여주고 sync 흐름을 검증한다.

## 변경 범위

- **해도 됨:** sync status UI, loading/error/cache 표시, QA notes
- **하면 안 됨:** 전체 dashboard 데이터 UI 완성, gacha/room 구현

## 작업

- 마지막 동기화 시각을 표시한다.
- loading, success, cache, error 상태를 표시한다.
- dashboard 진입 시 sync를 호출할지 수동 버튼으로 둘지 정리한다.
- sync 관련 검증 결과를 기록한다.

## 완료 조건

- [ ] 사용자가 sync 상태를 볼 수 있다.
- [ ] cache 사용 여부가 표시된다.
- [ ] 오류 상태가 secret 없이 표시된다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.
- [ ] Phase 05 결과가 `docs/PROGRESS.md`에 기록된다.

## 개발자 테스트

1. dashboard에서 sync 버튼 또는 자동 sync 상태를 확인한다.
2. GitHub API 실패 상황을 만들고 오류 표시를 확인한다.
3. build가 통과하는지 확인한다.

## 참조

- `docs/UI_UX.md` dashboard
- `docs/QA_CHECKLIST.md`


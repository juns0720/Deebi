# P07-T05 — 함께하는 방 탭과 dashboard QA

## 목표

dashboard의 `함께하는 방` 탭을 실제 room read 구조에 맞춰 준비하고 Phase 07 전체를 검증한다.

## 변경 범위

- **해도 됨:** joined rooms list, empty state, room CTA, dashboard QA notes
- **하면 안 됨:** room 생성/참여 write 구현, 채팅 구현

## 작업

- 참여 중인 룸 목록을 표시한다.
- 룸이 없을 때의 empty state를 만든다.
- 이후 Phase 09에서 생성/참여 UI를 붙일 자리를 둔다.
- dashboard 전체 lint/typecheck/build를 검증한다.

## 완료 조건

- [ ] `함께하는 방` 탭이 존재한다.
- [ ] 참여 중인 룸 목록 또는 empty state가 보인다.
- [ ] Phase 09 write 기능이 들어갈 위치가 명확하다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/dashboard`에서 `내 방`과 `함께하는 방` 탭을 전환한다.
2. 룸이 없는 상태와 있는 상태를 확인한다.
3. build가 통과하는지 확인한다.

## 참조

- `docs/phases/07-dashboard-inventory.md`
- `docs/UI_UX.md`


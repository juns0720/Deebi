# P07-T02 — 내 방 실제 데이터 레이아웃

## 목표

Phase 02의 내 방 mock을 실제 사용자 데이터로 치환한다.

## 변경 범위

- **해도 됨:** `/dashboard` 내 방 UI, stats card, character stage 연결
- **하면 안 됨:** 뽑기 실행, room 생성/참여 구현

## 작업

- 캐릭터 렌더러를 실제 health/equipped 데이터와 연결한다.
- health, today commits, streak, points를 표시한다.
- 마지막 동기화 시각과 cache 상태를 표시한다.
- 모바일/데스크톱 레이아웃을 유지한다.

## 완료 조건

- [ ] 내 방이 실제 로그인 사용자 데이터를 보여준다.
- [ ] 큰 방 스테이지 + 오른쪽 관리 패널 구조가 유지된다.
- [ ] 모바일에서 핵심 정보가 자연스럽게 쌓인다.
- [ ] sync 상태가 보인다.

## 개발자 테스트

1. `/dashboard`에서 내 방 데이터를 확인한다.
2. 모바일 폭에서 정보 순서를 확인한다.
3. sync 상태가 읽히는지 확인한다.

## 참조

- `docs/UI_UX.md` 내 방
- `docs/phases/07-dashboard-inventory.md`


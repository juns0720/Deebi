# P02-T07 — 함께하는 방 탭

## 목표

대시보드의 `함께하는 방` 탭에서 참여 중인 룸, 새 룸 만들기, 코드로 참여 UI를 mock으로 확인한다.

## 변경 범위

- **해도 됨:** rooms tab components, room cards, create/join mock forms, empty states
- **하면 안 됨:** 실제 room create/join API, DB write, 친구 요청/수락

## 작업

- 참여 중인 룸 목록 mock을 만든다.
- room card에 이름, 멤버 수, 최근 상태, 재입장 CTA를 표시한다.
- 새 룸 만들기와 코드로 참여 UI를 mock form으로 둔다.
- 빈 룸 목록 상태를 만든다.
- 룸 멤버 상한 8명 안내를 작게 표시한다.

## 완료 조건

- [ ] `함께하는 방` 탭에 참여 중인 룸 목록 mock이 보인다.
- [ ] 새 룸 만들기/코드 참여 UI가 있다.
- [ ] 빈 상태가 자연스럽고 다음 행동이 보인다.
- [ ] 친구 요청/수락 UI가 없다.
- [ ] 모바일에서 room card가 깨지지 않는다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/dashboard`에서 `함께하는 방` 탭으로 전환한다.
2. 참여 중인 룸 목록과 create/join UI를 확인한다.
3. 모바일 폭에서 room card가 읽히는지 확인한다.

## 참조

- `docs/UI_UX.md` 3.2장

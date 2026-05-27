# P02-T07 — 함께하는 방 탭

## 목표

대시보드의 `함께하는 방` 탭에서 참여 중인 룸, 새 룸 만들기, 코드로 참여 UI를 mock으로 확인하되, P02-T05의 게임 UI 프레임과 내 방 문 오브젝트 흐름을 이어받는다.

## 변경 범위

- **해도 됨:** rooms tab components, room cards, create/join mock forms, empty states, T05 UI frame 에셋 재사용/보강
- **하면 안 됨:** 실제 room create/join API, DB write, 친구 요청/수락

## 작업

- `docs/PIXEL_ASSET_PIPELINE.md`와 P02-T05에서 만든 UI frame 에셋을 재사용한다.
- 참여 중인 룸 목록 mock을 만든다.
- room card는 일반 카드가 아니라 게임의 방 목록 슬롯처럼 보이게 만든다.
  - `panel-frame.png` 또는 `inventory-slot-*` 계열을 재사용한다.
  - 룸 이름, 멤버 수, 최근 상태, 재입장 CTA는 HTML 텍스트로 유지한다.
- 새 룸 만들기와 코드로 참여 UI를 mock form으로 둔다.
  - input은 `input-frame.png` 또는 동등한 skinned input으로 보이게 한다.
  - 실제 생성/참여가 되는 것처럼 오해하지 않게 mock label을 작게 둔다.
- 빈 룸 목록 상태를 만든다.
- 빈 상태는 내 방의 문 오브젝트와 연결되는 카피를 사용한다. 예: `아직 열린 방이 없어요. 문 너머 방을 만들어볼 수 있어요.`
- 룸 멤버 상한 8명 안내를 작게 표시한다.

## 완료 조건

- [ ] `함께하는 방` 탭에 참여 중인 룸 목록 mock이 보인다.
- [ ] 새 룸 만들기/코드 참여 UI가 있다.
- [ ] room card와 form이 T05의 게임 UI 프레임 감성을 유지한다.
- [ ] 빈 상태가 자연스럽고 다음 행동이 보인다.
- [ ] 친구 요청/수락 UI가 없다.
- [ ] 모바일에서 room card가 깨지지 않는다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/dashboard`에서 `함께하는 방` 탭으로 전환한다.
2. 참여 중인 룸 목록과 create/join UI를 확인한다.
3. 모바일 폭에서 room card가 읽히는지 확인한다.
4. 내 방의 문 오브젝트와 함께하는 방 탭 진입 경험이 같은 게임 세계처럼 이어지는지 확인한다.

## 참조

- `docs/UI_UX.md` 3.2장
- `docs/PIXEL_ASSET_PIPELINE.md`

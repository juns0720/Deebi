# P02-T06 — 방치 모드

## 목표

Deebi를 켜둔 채 일하거나 놀 수 있도록 내 방과 캐릭터를 크게 보여주는 mock 방치 모드를 만들고, 친구 상태 신호를 직접 제작한 방 오브젝트 에셋으로 표현한다.

## 변경 범위

- **해도 됨:** dashboard idle mode state, full-room layout, exit control, friend signal object, 방치 모드용 room object/effect PNG 에셋 생성/가공
- **하면 안 됨:** 실제 광고 SDK, 자동 새로고침, 실제 room presence API

## 작업

- `방치 모드` 진입/종료 UI를 만든다.
- 방치 모드에서는 관리 패널과 인벤토리를 최소화하고 방 스테이지를 크게 보여준다.
- `public/assets/rooms/my-room/`에 방치 모드용 상태 오브젝트 에셋을 직접 제작한다.
  - `door-glow.png`: 참여 중인 룸/친구 활동 신호
  - `lamp-on.png`, `lamp-off.png`: 조용한 상태 변화 신호
  - `small-status-board.png`: 짧은 숫자/아이콘을 올릴 수 있는 벽 오브젝트
  - 필요 시 `room-light.png` 또는 `idle-vignette.png`
- 문/전광판/램프 같은 방 안 오브젝트로 친구 상태 미니 신호를 보여준다.
- 친구 상태 텍스트는 길게 띄우지 않는다. 오브젝트 위 숫자, 짧은 label, 불빛, 작은 effect 중심으로 표현한다.
- 종료 버튼은 항상 접근 가능하게 둔다.
- 종료 버튼은 T05의 게임 UI 버튼 스킨을 사용하되, 화면 위에서 항상 발견 가능해야 한다.
- 광고 placeholder가 필요하면 아주 조용한 예약 영역으로만 둔다.

## 완료 조건

- [ ] 방치 모드 진입/종료가 mock 상태로 동작한다.
- [ ] 방치 모드에서 방과 캐릭터가 화면 중심이다.
- [ ] 방치 모드용 오브젝트/effect PNG가 프로젝트에 저장되어 있고 화면에서 사용된다.
- [ ] 친구 상태 미니 신호가 일반 토스트가 아니라 방 안 오브젝트처럼 보인다.
- [ ] 종료 버튼이 데스크톱/모바일 모두 항상 보인다.
- [ ] 광고 클릭 유도, 자동 새로고침, 실제 광고 SDK가 없다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/dashboard`에서 방치 모드로 진입한다.
2. 방과 캐릭터가 크게 보이는지 확인한다.
3. 종료 버튼으로 원래 화면으로 돌아오는지 확인한다.
4. 친구 상태 신호가 패널/토스트가 아니라 방 안 오브젝트처럼 보이는지 확인한다.

## 참조

- `docs/UI_UX.md` 방치 모드 섹션
- `docs/PIXEL_ASSET_PIPELINE.md`

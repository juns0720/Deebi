# P02-T05 — 공통 게임 프레임과 선택 메뉴창

## 목표

`/dashboard`를 카드형 웹 대시보드가 아니라 공통 게임 클라이언트 프레임처럼 보이게 정리한다. `내 방`과 `함께하는 방`은 `상단 에셋 메뉴 + 중앙 Stage + 우측 선택 메뉴창 + 하단 Dock` 골격을 공유하고, 내 방에서는 헤더의 픽셀 에셋 메뉴를 선택해 상태/가방/뽑기 정보를 확인한다.

## 변경 범위

- **해도 됨:** dashboard 공통 game frame, 상단 에셋 메뉴, 우측 선택 메뉴창, 상태 로그 dock, mock item 표시, 개발용 UI frame/object PNG 에셋 생성/가공, skinned UI components
- **하면 안 됨:** 실제 sync API, gacha API, equip API, DB read/write

## 작업

- `docs/PIXEL_ASSET_PIPELINE.md`의 UI 프레임 원칙을 따른다.
- `public/assets/ui/` 아래에 게임 UI 프레임 에셋을 직접 제작한다.
  - `hud-bar.png`
  - `command-panel.png`
  - `log-window.png`
  - `inventory-slot-empty.png`
  - `inventory-slot-equipped.png`
  - `progress-health-frame.png`
  - `progress-health-fill.png`
- `public/assets/rooms/my-room/` 아래에 별도 오브젝트 버튼 PNG를 추가한다.
  - `object-door.png`
  - `object-status-board.png`
  - `object-bag.png`
  - `object-gacha.png`
- 승인된 `source-scene.png`, `base-room.png`, `foreground-scene.png`는 수정하지 않는다.
- UI/오브젝트 에셋에는 텍스트를 굽지 않는다. 텍스트, 숫자, 상태값은 HTML로 유지한다.
- `GameRoomFrame`을 만들어 `내 방`과 `함께하는 방`이 같은 상단 에셋 메뉴, stage, 우측 command panel, 하단 dock 구조를 공유하게 한다.
- 상단에는 `DeeBi`, 현재 위치, 픽셀 에셋 메뉴만 노출한다. health와 오늘 커밋은 상단에 두지 않는다.
- 기존 오른쪽 카드 묶음은 제거하고, 선택된 방 오브젝트의 설명과 명령만 보여주는 RPG식 선택 메뉴창으로 바꾼다.
- 헤더 에셋 메뉴 동작:
  - `문`: `함께하는 방` 탭 전환만 수행한다.
  - `상태 보드`: health, streak, points, sync mock을 보여준다.
  - `가방`: 장착 슬롯과 보유 아이템을 보여준다.
  - `뽑기 장치`: 포인트와 비활성 mock CTA를 보여준다.
- 하단 Dock은 내 방에서는 sync/status 로그 카드로 사용하고 오늘 커밋 수를 이곳에 표시한다. `함께하는 방`에서는 향후 채팅이 들어갈 같은 위치를 placeholder로 둔다.
- 모바일에서는 `HUD → stage → command panel → log dock` 순서로 쌓고 가로 overflow를 만들지 않는다.

## 완료 조건

- [ ] 데스크톱에서 상단 에셋 메뉴, 중앙 stage, 우측 선택 메뉴창, 하단 Dock이 공통 게임 프레임처럼 보인다.
- [ ] `public/assets/ui/` 아래에 T05에서 사용하는 UI 프레임 PNG 에셋이 저장되어 있다.
- [ ] `public/assets/rooms/my-room/` 아래에 별도 오브젝트 버튼 PNG가 저장되어 있다.
- [ ] 메뉴가 stage 안에 끼어들지 않고 헤더의 픽셀 에셋 버튼처럼 보인다.
- [ ] UI 에셋에 텍스트가 굽혀 있지 않고 HTML 텍스트가 유지된다.
- [ ] 상단 헤더에는 health와 오늘 커밋이 보이지 않는다.
- [ ] 오늘 커밋은 하단 sync/status 로그 Dock에서 보인다.
- [ ] streak, points, 장착 슬롯, 인벤토리 mock은 우측 선택 메뉴창에서 보인다.
- [ ] 포인트 부족/뽑기 가능 mock 상태가 구분된다.
- [ ] `문` 에셋 메뉴가 `함께하는 방` 탭 전환으로만 동작한다.
- [ ] 하단 Dock이 내 방에서는 상태 로그로 보이고, 향후 채팅 영역과 충돌하지 않는 구조다.
- [ ] 모바일에서 텍스트와 버튼이 겹치지 않는다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/dashboard`의 `내 방` 탭을 데스크톱 폭에서 연다.
2. 방 stage가 중심이고 오른쪽 카드 더미 느낌이 사라졌는지 확인한다.
3. `상태 보드`, `가방`, `뽑기 장치` 헤더 에셋 메뉴를 클릭/키보드 포커스로 선택했을 때 우측 선택 메뉴창 내용이 바뀌는지 확인한다.
4. `문` 에셋 메뉴가 `함께하는 방` 탭 전환으로만 동작하는지 확인한다.
5. 하단 Dock이 내 방에서는 상태 로그로 보이고, 함께하는 방에서는 채팅 Dock placeholder로 보이는지 확인한다.
6. 모바일 360px 폭에서 stage, command panel, log dock이 겹치지 않고 가로 overflow가 없는지 확인한다.
7. 버튼/탭/인벤토리 슬롯의 텍스트가 이미지가 아니라 실제 HTML로 선택/읽기 가능한지 확인한다.

## 참조

- `docs/UI_UX.md` 3.2장
- `docs/SPEC.md` 8.3장
- `docs/PIXEL_ASSET_PIPELINE.md`

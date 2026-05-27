# P02-T05 — 관리 패널과 인벤토리 dock

## 목표

내 방 옆에서 건강도, 오늘 커밋, streak, 포인트, 뽑기 CTA, 장착 슬롯, 인벤토리를 mock 데이터로 확인하되, CSS 카드가 아니라 직접 제작한 게임 HUD/UI 프레임 에셋으로 보이게 만든다.

## 변경 범위

- **해도 됨:** dashboard management panel, stat tiles, equipment slots, inventory dock, mock items, 개발용 UI frame PNG 에셋 생성/가공, skinned UI components
- **하면 안 됨:** 실제 sync API, gacha API, equip API, DB read/write

## 작업

- `docs/PIXEL_ASSET_PIPELINE.md`의 UI 프레임 원칙을 따른다.
- `public/assets/ui/` 아래에 게임 UI 프레임 에셋을 직접 제작한다.
  - `hud-bar.png`
  - `panel-frame.png`
  - `panel-frame-compact.png`
  - `button-primary.png`
  - `button-quiet.png`
  - `tab-active.png`
  - `tab-idle.png`
  - `badge-frame.png`
  - `inventory-slot-empty.png`
  - `inventory-slot-equipped.png`
  - `progress-health-frame.png`
  - `progress-health-fill.png`
- UI 에셋에는 텍스트를 굽지 않는다. 텍스트, 숫자, 상태값은 HTML로 유지한다.
- `GamePanel`, `GameButton`, `GameTab`, `GameBadge`, `InventorySlot` 같은 skinned UI component를 만들거나 기존 `Pixel*` primitive를 확장한다.
  - 프레임은 이미지 에셋 또는 `border-image`로 표현한다.
  - focus-visible, disabled, aria 상태는 유지한다.
- 데스크톱 오른쪽 320~380px 관리 패널을 만든다.
- health, today commits, streak, points, sync mock 상태를 표시한다.
- 뽑기 CTA는 mock 상태로 표시하되 실제 실행처럼 오해되지 않게 한다.
- 장착 슬롯과 인벤토리 dock을 mock item으로 구성한다.
- 인벤토리 dock은 하단 게임 메뉴처럼 보이게 하고, 슬롯은 `inventory-slot-*` 에셋을 사용한다.
- 상단 HUD에는 DeeBi, health, points, sync mock을 압축해 표시한다.
- 모바일에서는 방/캐릭터 아래로 자연스럽게 쌓이게 한다.

## 완료 조건

- [ ] 데스크톱에서 큰 방 스테이지와 오른쪽 관리 패널이 함께 보인다.
- [ ] `public/assets/ui/` 아래에 T05에서 사용하는 UI 프레임 PNG 에셋이 저장되어 있다.
- [ ] 버튼, 탭, 패널, badge, inventory slot이 CSS 박스가 아니라 게임 UI 프레임처럼 보인다.
- [ ] UI 에셋에 텍스트가 굽혀 있지 않고 HTML 텍스트가 유지된다.
- [ ] 건강도, 오늘 커밋, streak, 포인트가 한눈에 보인다.
- [ ] 장착 슬롯과 인벤토리 mock이 픽셀 UI로 보인다.
- [ ] 포인트 부족/뽑기 가능 mock 상태가 구분된다.
- [ ] 모바일에서 텍스트와 버튼이 겹치지 않는다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/dashboard`의 `내 방` 탭을 연다.
2. 관리 패널의 숫자와 CTA를 확인한다.
3. 모바일에서 패널이 방 아래로 자연스럽게 내려오는지 확인한다.
4. 버튼/탭/인벤토리 슬롯의 텍스트가 이미지가 아니라 실제 HTML로 선택/읽기 가능한지 확인한다.

## 참조

- `docs/UI_UX.md` 3.2장
- `docs/SPEC.md` 8.3장
- `docs/PIXEL_ASSET_PIPELINE.md`

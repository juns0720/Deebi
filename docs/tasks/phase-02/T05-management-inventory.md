# P02-T05 — 관리 패널과 인벤토리 dock

## 목표

내 방 옆에서 건강도, 오늘 커밋, streak, 포인트, 뽑기 CTA, 장착 슬롯, 인벤토리를 mock 데이터로 확인할 수 있게 만든다.

## 변경 범위

- **해도 됨:** dashboard management panel, stat tiles, equipment slots, inventory dock, mock items
- **하면 안 됨:** 실제 sync API, gacha API, equip API, DB read/write

## 작업

- 데스크톱 오른쪽 320~380px 관리 패널을 만든다.
- health, today commits, streak, points, sync mock 상태를 표시한다.
- 뽑기 CTA는 mock 상태로 표시하되 실제 실행처럼 오해되지 않게 한다.
- 장착 슬롯과 인벤토리 dock을 mock item으로 구성한다.
- 모바일에서는 방/캐릭터 아래로 자연스럽게 쌓이게 한다.

## 완료 조건

- [ ] 데스크톱에서 큰 방 스테이지와 오른쪽 관리 패널이 함께 보인다.
- [ ] 건강도, 오늘 커밋, streak, 포인트가 한눈에 보인다.
- [ ] 장착 슬롯과 인벤토리 mock이 픽셀 UI로 보인다.
- [ ] 포인트 부족/뽑기 가능 mock 상태가 구분된다.
- [ ] 모바일에서 텍스트와 버튼이 겹치지 않는다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/dashboard`의 `내 방` 탭을 연다.
2. 관리 패널의 숫자와 CTA를 확인한다.
3. 모바일에서 패널이 방 아래로 자연스럽게 내려오는지 확인한다.

## 참조

- `docs/UI_UX.md` 3.2장
- `docs/SPEC.md` 8.3장

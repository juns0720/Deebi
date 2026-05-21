# P02-T04 — 내 방 스테이지

## 목표

사용자의 캐릭터가 머무는 개인 방을 mock 데이터로 구현해 Deebi의 중심 경험을 화면으로 확인한다.

## 변경 범위

- **해도 됨:** dashboard 내 방 stage components, placeholder character, room object CSS/SVG/HTML, mock health state
- **하면 안 됨:** 최종 캐릭터 디자인 확정, 실제 character renderer 완성, inventory/equip write 기능

## 작업

- 벽, 바닥, 문, 창문, 책상 같은 픽셀 방 요소를 배치한다.
- 32x32 placeholder 캐릭터를 정수 배율로 확대해 중앙에 둔다.
- health state mock에 따라 라벨/분위기/작은 효과가 바뀌게 한다.
- 공동 룸 진입 오브젝트인 문을 시각적으로 배치한다.
- 캐릭터 최종 생김새는 확정하지 않고 placeholder임을 코드/문서에서 분명히 한다.

## 완료 조건

- [ ] 내 방 스테이지가 대시보드의 시각적 중심이다.
- [ ] 32x32 placeholder 캐릭터가 픽셀 선명도를 유지한다.
- [ ] 문 오브젝트가 공동 룸 진입점을 암시한다.
- [ ] health state mock이 최소 4구간으로 구분된다.
- [ ] 모바일에서도 캐릭터가 최소 160px 이상으로 보인다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/dashboard`의 `내 방` 탭을 연다.
2. 방, 캐릭터, 문 오브젝트가 픽셀 방처럼 느껴지는지 확인한다.
3. 모바일 폭에서 캐릭터가 뭉개지거나 너무 작지 않은지 확인한다.

## 참조

- `docs/UI_UX.md` 2.1장, 5.1장

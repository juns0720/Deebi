# P02-T04 — 내 방 스테이지

## 목표

사용자의 캐릭터가 머무는 개인 방을 직접 제작한 개발용 픽셀 에셋과 mock 데이터로 구현해 Deebi의 중심 경험을 화면으로 확인한다.

## 변경 범위

- **해도 됨:** dashboard 내 방 stage components, 개발용 room PNG 에셋 생성/가공, room asset manifest, placeholder character, mock health state
- **하면 안 됨:** 최종 캐릭터 디자인 확정, 실제 character renderer 완성, inventory/equip write 기능

## 작업

- `docs/PIXEL_ASSET_PIPELINE.md`를 먼저 읽고 내 방 기준 좌표계와 에셋 검수 기준을 따른다.
- 개발용 `base-room.png`를 직접 제작해 `public/assets/rooms/my-room/base-room.png`에 저장한다.
  - 기준 해상도는 `1600x900` 16:9로 둔다.
  - 밝은 크림/우드/민트 계열의 픽셀 방으로 만든다.
  - 십자표/개발용 그리드/텍스트/워터마크가 없어야 한다.
- 문, 창문, 책상, 선반, 화분, 러그, 전경 테이블, 바닥 그림자 에셋을 직접 제작하거나 가공해 저장한다.
  - 권장 파일: `door-room.png`, `wall-window.png`, `desk-back.png`, `shelf.png`, `plant.png`, `rug.png`, `foreground-table.png`, `room-shadow.png`
  - 단일 오브젝트는 평면 크로마키 배경으로 생성 후 투명 PNG로 후처리한다.
  - base room과 투시, 팔레트, 픽셀 밀도가 맞는지 브라우저에서 확인한다.
- `src/types/room-assets.ts`와 `src/lib/mock/room-assets.ts`를 만들고 layer manifest를 정의한다.
  - 필드: `id`, `label`, `src`, `x`, `y`, `width`, `anchor`, `zIndex`, `interactive`
  - 좌표 원점은 1600x900 stage의 좌상단이다.
- `/dashboard`의 `내 방` 탭에서 기존 흰 박스형 stage를 에셋 기반 `MyRoomStage`로 교체한다.
- 벽, 바닥, 문, 창문, 책상 같은 픽셀 방 요소를 에셋 레이어로 배치한다.
- 32x32 placeholder 캐릭터를 정수 배율로 확대해 중앙에 둔다.
- health state mock에 따라 라벨/분위기/작은 효과가 바뀌게 한다.
- 공동 룸 진입 오브젝트인 문을 시각적으로 배치한다.
- 문 오브젝트는 클릭/키보드 활성화 시 `함께하는 방` 탭으로 이동할 수 있는 구조로 열어둔다. 실제 room API 연결은 하지 않는다.
- 캐릭터 최종 생김새는 확정하지 않고 placeholder임을 코드/문서에서 분명히 한다.
- 모바일에서는 방 stage가 가로 overflow를 만들지 않고, 캐릭터가 최소 160px 이상으로 보여야 한다.

## 완료 조건

- [ ] 내 방 스테이지가 대시보드의 시각적 중심이다.
- [ ] `public/assets/rooms/my-room/` 아래에 T04에서 사용하는 개발용 방/오브젝트 PNG 에셋이 저장되어 있다.
- [ ] room layer manifest가 있고, 화면 배치는 manifest 기준으로 이뤄진다.
- [ ] 32x32 placeholder 캐릭터가 픽셀 선명도를 유지한다.
- [ ] 문 오브젝트가 공동 룸 진입점을 암시한다.
- [ ] health state mock이 최소 4구간으로 구분된다.
- [ ] 모바일에서도 캐릭터가 최소 160px 이상으로 보인다.
- [ ] 십자표/개발용 그리드 배경과 흰 박스 stage 느낌이 내 방 화면에 남아 있지 않다.
- [ ] 생성 에셋에 텍스트, 워터마크, 크로마키 잔여색이 없다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/dashboard`의 `내 방` 탭을 연다.
2. 방, 캐릭터, 문 오브젝트가 픽셀 방처럼 느껴지는지 확인한다.
3. 모바일 폭에서 캐릭터가 뭉개지거나 너무 작지 않은지 확인한다.
4. `public/assets/rooms/my-room/`의 PNG들이 실제 화면에서 사용되는지 확인한다.

## 참조

- `docs/UI_UX.md` 2.1장, 5.1장
- `docs/PIXEL_ASSET_PIPELINE.md`

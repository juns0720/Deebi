# P02-T04 — 내 방 스테이지

## 목표

사용자의 캐릭터가 머무는 개인 방을 직접 제작한 개발용 픽셀 에셋과 mock 데이터로 구현해 Deebi의 중심 경험을 화면으로 확인한다. T04의 방은 조립식 CSS 목업이 아니라, 방/고정 구조물을 일체형 배경으로 둔 게임 스테이지다.

## 변경 범위

- **해도 됨:** dashboard 내 방 stage components, 개발용 room PNG 에셋 생성/가공, room asset manifest, 개발자 제공 `deebi.png`의 파생/배치, mock health state
- **하면 안 됨:** 최종 캐릭터 디자인 확정, 실제 character renderer 완성, inventory/equip write 기능

## 작업

- `docs/PIXEL_ASSET_PIPELINE.md`를 먼저 읽고 내 방 기준 좌표계와 에셋 검수 기준을 따른다.
- 개발자가 승인한 응집된 장면을 `public/assets/rooms/my-room/source-scene.png`로 보존한다.
  - 이 원본은 배경, 책상, 흰색 DeeBi placeholder가 하나의 시점과 팔레트로 맞춰진 기준 이미지다.
  - 이후 분리 작업에서 이 원본을 재생성하거나 임의로 바꾸지 않는다.
- 승인 원본을 분리해 `public/assets/rooms/my-room/base-room.png`와 `public/assets/rooms/my-room/foreground-scene.png`에 저장한다.
  - 기준 해상도는 `1600x900` 16:9로 둔다.
  - 밝은 크림/우드/민트 계열의 픽셀 방으로 만든다.
  - 벽, 바닥, 문, 창문, 선반, 식물, 작은 고정 소품은 base room에 일체형으로 포함한다.
  - 중앙 책상 영역 근처에는 러그를 두지 않는다.
  - `foreground-scene.png`는 책상, 캐릭터, 접지 그림자를 포함한 투명 PNG로 둔다.
  - `base-room.png`와 `foreground-scene.png`를 합성했을 때 `source-scene.png`와 픽셀 단위로 같아야 한다.
  - 십자표/개발용 그리드/텍스트/워터마크가 없어야 한다.
- 상단 메뉴 에셋을 별도로 제작하거나 가공해 저장한다.
  - 권장 파일: `menu-room.png`, `menu-gacha-locked.png`, `menu-bag-locked.png`
  - 메뉴 아이콘은 투명 PNG로 후처리한다.
  - base room과 투시, 팔레트, 픽셀 밀도가 맞는지 브라우저에서 확인한다.
- `public/assets/deebi.png`는 개발자 제공 기준 캐릭터로 보존하되 원본을 수정하지 않는다.
  - T04 화면의 흰색 DeeBi는 승인된 `source-scene.png`에서 분리한 placeholder이며 최종 캐릭터 디자인 확정이 아니다.
  - 별도 배경 제거/크롭이 필요하면 `deebi-stage.png` 같은 파생 파일만 만든다.
- `src/types/room-assets.ts`와 `src/lib/mock/room-assets.ts`를 만들고 layer manifest를 정의한다.
  - 필드: `id`, `label`, `src`, `x`, `y`, `width`, `anchor`, `zIndex`, `interactive`
  - 좌표 원점은 1600x900 stage의 좌상단이다.
- `/dashboard`의 `내 방` 탭에서 기존 흰 박스형 stage를 에셋 기반 `MyRoomStage`로 교체한다.
- base room, foreground scene, health/overwork effects, 상단 메뉴 아이콘을 stage 안에 배치한다.
- Deebi 캐릭터는 책상에 정면으로 앉은 것처럼 보이게 중앙에 둔다.
- health state mock에 따라 라벨/분위기/작은 효과가 바뀌게 한다.
- 오늘 커밋 수가 높은 mock 상태에서는 다크서클, 가벼운 수염, 작은 날벌레 같은 귀여운 과로 오버레이를 얹는다.
- 상단 RPG식 아이콘바를 배치한다.
  - `룸` 아이콘만 클릭/키보드 활성화 시 `함께하는 방` 탭으로 이동한다.
  - 뽑기/가방 아이콘은 잠긴 슬롯처럼 보이게 하되 실제 기능처럼 오해되지 않게 한다.
  - 상점, 구매, 결제처럼 보이는 메뉴는 만들지 않는다.
- 캐릭터 최종 생김새는 확정하지 않고 stage 검증용 placeholder임을 코드/문서에서 분명히 한다.
- 모바일에서는 방 stage가 가로 overflow를 만들지 않고, 캐릭터가 최소 160px 이상으로 보여야 한다.

## 완료 조건

- [ ] 내 방 스테이지가 대시보드의 시각적 중심이다.
- [ ] `public/assets/rooms/my-room/` 아래에 T04에서 사용하는 개발용 source/base/foreground/menu PNG 에셋이 저장되어 있다.
- [ ] room layer manifest가 있고, 화면 배치는 manifest 기준으로 이뤄진다.
- [ ] 개발자 제공 `deebi.png` 원본은 보존되고, 화면의 stage placeholder는 픽셀 선명도를 유지한다.
- [ ] 상단 `룸` 아이콘이 공동 룸 진입점을 암시하고 `함께하는 방` 탭 전환으로 동작한다.
- [ ] health state mock이 최소 4구간으로 구분된다.
- [ ] 오늘 커밋 수가 높은 mock 상태에서 귀여운 과로 오버레이가 보인다.
- [ ] 모바일에서도 캐릭터가 최소 160px 이상으로 보인다.
- [ ] 십자표/개발용 그리드 배경과 흰 박스 stage 느낌이 내 방 화면에 남아 있지 않다.
- [ ] 생성 에셋에 텍스트, 워터마크, 크로마키 잔여색이 없다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/dashboard`의 `내 방` 탭을 연다.
2. 방, 책상, 캐릭터, 상단 룸 아이콘이 픽셀 게임 화면처럼 느껴지는지 확인한다.
3. 모바일 폭에서 캐릭터가 뭉개지거나 너무 작지 않은지 확인한다.
4. `public/assets/rooms/my-room/`의 PNG들이 실제 화면에서 사용되는지 확인한다.

## 참조

- `docs/UI_UX.md` 2.1장, 5.1장
- `docs/PIXEL_ASSET_PIPELINE.md`

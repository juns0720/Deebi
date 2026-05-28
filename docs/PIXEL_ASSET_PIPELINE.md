# PIXEL_ASSET_PIPELINE.md — Phase 02 에셋 제작 기준

이 문서는 Phase 02에서 Codex가 직접 제작할 **개발용 픽셀 에셋**과 이를 화면에 입히는 방식을 정의한다.

중요한 경계:

- 여기서 말하는 이미지 생성은 개발 중 정적 에셋 제작이다.
- 제품 런타임에서 사용자가 AI 이미지를 생성하는 기능은 MVP 제외 항목으로 유지한다.
- 최종 캐릭터 디자인은 개발자가 별도로 확정한다. Codex는 Phase 02에서 구조 검증용 placeholder만 만든다.
- UI 텍스트, 숫자, 채팅, 상태값은 이미지에 굽지 않고 HTML로 유지한다.
- 이미지 에셋은 방/오브젝트/프레임/슬롯/아이콘처럼 시각적 껍데기와 게임 월드를 구성하는 데 사용한다.

## 1. 목표

현재 `/dashboard` 목업은 탭 구조를 확인하는 용도다. P02-T04부터는 같은 구조를 유지하되, 화면을 일반 웹 대시보드가 아니라 **픽셀 게임 화면**처럼 보이게 바꾼다.

목표 화면 성격:

- 중심은 카드 UI가 아니라 큰 방 씬이다.
- 정보 UI는 SaaS 카드가 아니라 게임 HUD, 관리창, 인벤토리 dock처럼 보인다.
- 십자표/개발용 그리드 배경은 제거한다.
- 픽셀 에셋, 프레임 스킨, 폰트, 그림자, 레이어 순서가 하나의 게임 화면처럼 맞아야 한다.

## 2. 폴더 구조

Phase 02에서 직접 생성하거나 가공한 에셋은 아래 위치에 둔다.

```text
public/assets/
  rooms/
    my-room/
      source-scene.png
      base-room.png
      foreground-scene.png
      menu-room.png
      menu-gacha-locked.png
      menu-bag-locked.png
      object-door.png
      object-status-board.png
      object-bag.png
      object-gacha.png
    shared-room/
      base-shared-room.png
      work-table.png
      table-props.png
      seat-marker.png
      member-shadow.png
      room-light.png
  ui/
    hud-bar.png
    command-panel.png
    log-window.png
    inventory-slot-empty.png
    inventory-slot-equipped.png
    progress-health-frame.png
    progress-health-fill.png
```

타입과 manifest는 아래 위치에 둔다.

```text
src/types/room-assets.ts
src/lib/mock/room-assets.ts
src/components/dashboard/my-room-stage.tsx
src/components/dashboard/game-ui.tsx
```

공동 룸 task에서는 아래 파일을 추가할 수 있다.

```text
src/app/room/demo/page.tsx
src/components/room/shared-room-stage.tsx
src/lib/mock/shared-room.ts
```

## 3. 내 방 기준 좌표계

P02-T04에서 고정할 기준:

| 항목 | 기준 |
|---|---|
| 방 기준 해상도 | `1600x900` |
| 좌표 원점 | 좌상단 `(0, 0)` |
| 바닥 접점 기준 | 오브젝트의 `anchor`가 가리키는 지점 |
| 기본 캐릭터 원본 | 개발자 제공 `public/assets/deebi.png` 보존 |
| 데스크톱 캐릭터 표시 크기 | 192~256px |
| 모바일 캐릭터 표시 크기 | 최소 160px |
| 기본 화면 비율 | 16:9 |
| 모바일 처리 | 우선 전체 축소, 필요 시 캐릭터 중심 crop으로 조정 |

Manifest 예시:

```ts
export interface RoomLayerAsset {
  id: string;
  label: string;
  src: string;
  x: number;
  y: number;
  width: number;
  anchor: "top-left" | "bottom-left" | "bottom-center" | "center";
  zIndex: number;
  interactive?: boolean;
  targetTab?: "my-room" | "rooms";
}
```

레이어 순서:

```text
source-scene (승인 원본, 화면 렌더 기준 보존용)
base-room
foreground-scene (책상, 흰색 DeeBi placeholder, 접지 그림자)
state effects
top icon menu
HUD / panels / dock
```

T04의 내 방은 승인된 하나의 응집된 장면을 `source-scene.png`로 보존한 뒤, 같은 장면을 `base-room.png`와 `foreground-scene.png`로 분리해 렌더링한다. 이렇게 하면 배경, 책상, 캐릭터가 서로 따로 노는 문제를 줄이고, 두 레이어를 다시 합쳤을 때 승인 원본과 픽셀 단위로 같은 화면을 유지할 수 있다. 중앙 책상 영역 근처에는 러그를 두지 않는다. 개발자 제공 캐릭터 `public/assets/deebi.png`는 원본을 보존하며, T04의 흰색 DeeBi는 최종 디자인 확정이 아닌 stage 검증용 placeholder로 취급한다.

## 4. 생성 에셋 원칙

공통:

- 모든 에셋은 텍스트, 워터마크, 로고를 포함하지 않는다.
- 색감은 밝은 크림/아이보리 벽, 옅은 우드 바닥, 민트/블루 포인트를 기본으로 한다.
- 과한 gradient, blur, glassmorphism, 3D 렌더 느낌을 피한다.
- 픽셀 외곽선은 선명해야 하며, CSS `image-rendering: pixelated`에서 뭉개지지 않아야 한다.
- 오브젝트별 투시가 base room과 맞아야 한다.

투명 오브젝트:

- 단일 오브젝트는 가능한 한 평면 크로마키 배경으로 생성한 뒤 투명 PNG로 후처리한다.
- 기본 키 컬러는 `#00ff00`을 사용한다. 초록 계열 오브젝트는 `#ff00ff`를 사용한다.
- 배경에는 그림자, 바닥면, 텍스처, 조명 변화가 없어야 한다.
- 후처리 후 모서리 alpha, 키 컬러 잔여 fringe, 불필요한 여백을 확인한다.

상단 RPG 메뉴:

- T04에서는 작은 PNG 아이콘바로 `룸` 진입만 활성화한다.
- 뽑기/가방은 잠긴 슬롯처럼 보이게 할 수 있지만 실제 기능처럼 보이거나 동작하면 안 된다.
- `상점`, 구매, 결제처럼 보이는 메뉴명과 아이콘은 MVP 제외 범위이므로 만들지 않는다.
- 아이콘 에셋에는 텍스트를 굽지 않고, 접근 가능한 라벨은 HTML/ARIA로 제공한다.

UI 프레임:

- 텍스트가 들어갈 영역은 비워둔다.
- 9-slice 또는 `border-image`로 늘릴 수 있게 네 귀퉁이와 중앙 영역이 분리되어 보여야 한다.
- 버튼/탭/패널 프레임에는 문구를 넣지 않는다.
- hover/active 상태는 CSS 그림자와 색상 조정으로 먼저 처리하고, 필요할 때만 별도 에셋을 추가한다.

## 5. 프롬프트 템플릿

내 방 base:

```text
Create a bright cozy pixel-art developer room background for a web game UI.
Resolution target 1600x900, 16:9.
Style: crisp 2D pixel art, hand-painted pixel game background, warm ivory wall, pale wood floor, muted mint accents.
Camera: fixed front-facing room with slight 3/4 floor perspective, readable floor contact area.
Include empty wall and floor space for a small character and furniture layers.
No text, no watermark, no UI labels, no realistic blur, no smooth gradients, no extreme isometric perspective.
Keep edges crisp and readable at web dashboard size.
```

내 방 오브젝트:

```text
Create a single pixel-art room object matching a bright cozy developer room.
Object: <object name>.
Camera: same fixed front-facing slight 3/4 perspective as a 1600x900 pixel-art room.
Style: crisp 2D pixel art, warm wood, ivory, muted mint and blue accents.
Background: perfectly flat solid <#00ff00 or #ff00ff> chroma-key background for removal.
No text, no watermark, no cast shadow, no floor plane, no gradient background.
Generous padding around the object, clean readable silhouette.
```

UI 프레임:

```text
Create a pixel-art UI frame asset for a cozy web game dashboard.
Asset: <panel/button/tab/inventory slot>.
Style: crisp 2D pixel art UI, warm ivory fill, dark brown outline, subtle mint or blue accent, hard pixel shadow.
The center area must be empty for live HTML text.
No words, no icons, no watermark.
Design it so it can be sliced or stretched as a 9-slice UI frame.
```

공동 룸:

```text
Create a bright pixel-art shared developer room background centered on a large work table.
Resolution target 1600x900, 16:9.
Style: cozy 2D pixel art, warm wall, pale wood floor, muted mint and blue accents.
The table must have space around it for 1 to 8 small character placeholders.
Include laptops, mugs, small papers, and a gentle work-room mood, but no text.
No watermark, no UI labels, no ranking board, no realistic blur.
```

## 6. 검수 기준

이미지 파일 검수:

- PNG가 브라우저에서 정상 로드된다.
- 투명 오브젝트는 alpha channel이 있다.
- 크로마키 색상이 남아 있지 않다.
- 원본 크기와 표시 크기를 문서/manifest에 기록한다.
- 파일명이 kebab-case이고 의미가 명확하다.

화면 검수:

- `/dashboard` 데스크톱에서 방 씬이 화면의 시각적 중심이다.
- 360px 모바일에서 가로 overflow가 없다.
- 캐릭터가 모바일에서 160px 미만으로 작아지지 않는다.
- 텍스트와 숫자는 이미지에 굽지 않고 읽기 가능한 HTML로 남아 있다.
- 버튼, 탭, 패널이 게임 UI처럼 보이되 키보드 focus가 보인다.
- 실제 DB/API가 연결된 것처럼 오해시키지 않는다.

## 7. Task별 적용 범위

| Task | 에셋 작업 |
|---|---|
| P02-T04 | 승인 원본 `source-scene.png`, `base-room.png`/`foreground-scene.png` 분리 렌더, 상단 룸 메뉴, room manifest |
| P02-T05 | 공통 게임 프레임, 헤더 에셋 메뉴, 우측 선택 메뉴창, sync/status 로그 dock, 인벤토리 슬롯 UI 프레임 |
| P02-T06 | 방치 모드용 문 불빛, 램프, 벽 모니터, 상태 오브젝트 |
| P02-T07 | 함께하는 방 탭 카드/폼이 T05 UI 프레임을 재사용하는지 정리 |
| P02-T08 | 공동 룸 base, 큰 작업 테이블, 좌석/소품, 멤버 배치 manifest |
| P02-T09 | 채팅 패널, 입력창, 말풍선 프레임 |
| P02-T10 | 전체 에셋 품질, 반응형, 접근성, 잔여 목업 티 제거 |

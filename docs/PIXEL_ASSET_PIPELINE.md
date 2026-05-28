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
      object-visit.png
      object-status.png
      object-customize.png
      object-gacha.png
      object-*-candidate-*.png (review only, approved 전 임시 후보)
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

- P02-T05 이후 `/dashboard` 상단 옵션명은 `놀러가기`, `상태`, `꾸미기`, `뽑기`로 고정한다.
- 내부 동작 id는 `rooms`, `status`, `bag`, `gacha`를 유지한다. 라벨과 에셋만 친근한 행동형/오브젝트형으로 바꾼다.
- `놀러가기`는 예쁜 문 오브젝트로 표현하고 `함께하는 방` 탭 전환만 수행한다.
- `상태`는 DeeBi 컨디션과 작업 리듬을 보는 모니터 오브젝트로 표현한다.
- `꾸미기`는 장착/보유 아이템 맥락이 읽히는 인벤토리 가방/백팩형 오브젝트로 표현한다. 색상은 고정하지 않고, 제품 아이콘처럼 보이지 않는 게임 아이템성을 우선한다.
- `뽑기`는 핑크 본체와 유리 돔이 있는 캡슐 뽑기 기계 오브젝트로 표현한다.
- `상점`, 구매, 결제처럼 보이는 메뉴명과 아이콘은 MVP 제외 범위이므로 만들지 않는다.
- 아이콘 에셋에는 텍스트를 굽지 않고, 접근 가능한 라벨은 HTML/ARIA로 제공한다.
- 색감은 기능에 충실한 오브젝트를 우선한다. 공통 톤에 억지로 맞추기보다, 작은 크기에서도 무엇인지 바로 읽히는 실루엣과 대표 색을 우선한다.

상단 메뉴 오브젝트 품질 기준:

- 기준 질감은 `public/assets/rooms/my-room/object-visit-candidate-1.png`의 문 후보에 맞춘다. 이 샘플은 "너무 고퀄 픽셀 일러스트"도 아니고 "너무 투박한 저퀄 도트"도 아닌, 작은 게임 메뉴 오브젝트에 가까운 품질 기준이다.
- 목표는 **기분 좋은 로우파이 인디 픽셀 게임 아이템**이다. 허접하게 단순화하는 것이 아니라, 42px 버튼 안에서 기능이 바로 읽히고 주변 UI보다 혼자 비싸 보이지 않는 질감이어야 한다.
- 오브젝트는 실제 제품 사진, 이커머스 아이콘, 에셋 스토어 고급 스티커가 아니라 게임 속 인벤토리/메뉴 아이템처럼 보여야 한다.
- 픽셀 질감은 큰 색면과 덩어리감 있는 계단형 외곽을 사용한다. 너무 부드러운 고해상도 브러시, 과한 안티앨리어싱, 고급 일러스트식 미세 묘사를 피한다.
- 반대로 픽셀을 일부러 과하게 우겨 넣은 모자이크 느낌도 피한다. 후보 문처럼 픽셀 덩어리는 보이되, 표면 전체가 잘게 부서져 있지 않아야 한다.
- 외곽선은 진한 갈색 또는 거의 검정에 가까운 갈색을 기본으로 한다. 외곽선은 오브젝트를 한눈에 잡아주되, 내부 디테일 선이 외곽선만큼 많아지면 안 된다.
- 음영은 재질당 2~4단계 정도의 큰 블록으로 제한한다. 작은 점 하이라이트, 촘촘한 디더링, 복잡한 주름, 사실적인 재질 텍스처는 사용하지 않는다.
- 하이라이트는 큰 덩어리 1~2개만 둔다. 광택이 반짝이는 장난감/제품 썸네일처럼 보이면 실패로 본다.
- 장식은 기능을 설명하는 최소 요소만 둔다. 문은 손잡이/작은 창, 가방은 플랩/버클/끈, 모니터는 화면/막대, 뽑기는 유리돔/캡슐/핸들 정도로 제한한다.
- 색상은 오브젝트별로 자유롭게 고른다. 예를 들어 가방은 황토/갈색으로 고정하지 않는다. 다만 색이 제품 아이콘처럼 현대적이거나 UI 전체에서 튀면 다시 잡는다.
- 각 에셋은 단일 오브젝트여야 한다. 배경 가구, 식물, 러그, 계단, 말풍선, 글자, 숫자, 로고, 가격표, 상점/결제 암시는 넣지 않는다.
- 후보 이미지는 반드시 한 개씩 만든다. 여러 에셋을 요청받아도 `생성 -> 128px/42px 미리보기 -> 사용자 검사 -> 승인 또는 수정` 루프를 한 에셋씩 진행한다.
- 승인 전에는 기존 적용 파일을 덮어쓰지 않는다. 후보는 `object-{purpose}-candidate-{n}.png`로 저장하고, 승인 후에만 최종 `object-{purpose}.png`로 복사한다.
- 후보를 판단할 때는 항상 문 후보 기준과 나란히 본다. 새 후보가 문 후보보다 더 고급 렌더링처럼 보이거나, 반대로 훨씬 조잡하면 스타일 불일치로 본다.

상단 메뉴 오브젝트 세부 제작 규칙:

- 캔버스는 항상 `128x128`로 만들고, 실제 오브젝트는 캔버스 중앙에 둔다. 오브젝트가 가장자리까지 닿으면 안 되며, 42px 표시에서 답답하지 않을 정도의 여백을 둔다.
- 오브젝트의 기본 인상은 "작은 RPG/생활 게임 메뉴 아이템"이어야 한다. 앱 아이콘, 쇼핑몰 상품 썸네일, 3D 렌더링을 픽셀화한 이미지처럼 보이면 안 된다.
- 형태는 42px에서 먼저 읽혀야 한다. 세부 장식이 사라져도 문/모니터/가방/뽑기 기계라는 정체성이 실루엣만으로 남아야 한다.
- 외곽은 살짝 두꺼운 픽셀 계단으로 만든다. 완벽한 벡터 선처럼 매끈하거나, 반대로 모든 칸이 같은 격자로 끊어진 도트 도안처럼 보이면 안 된다.
- 내부선은 외곽선보다 적고 짧게 쓴다. 내부 디테일이 많아져서 오브젝트 표면이 복잡한 패턴처럼 보이면 실패로 본다.
- 표면은 큰 색 블록이 먼저 보여야 한다. 작은 픽셀 노이즈, 촘촘한 디더링, 사진 같은 재질, 미세한 반사광은 줄인다.
- 광원은 대체로 위/왼쪽에서 오는 단순한 빛으로 통일한다. 밝은 면, 중간 면, 어두운 면이 큰 덩어리로 나뉘면 충분하다.
- 하이라이트는 기능과 형태를 살리는 곳에만 둔다. 문 손잡이 주변, 가방 플랩, 유리돔의 작은 반짝임처럼 한눈에 읽히는 1~2개면 충분하다.
- 그림자와 바닥 접지는 만들지 않는다. 버튼 안에 들어가는 독립 오브젝트이므로 바닥면, 드롭섀도, 주변 글로우, 배경 소품을 넣지 않는다.
- 크로마키 배경색은 오브젝트 대표색과 겹치지 않는 색을 고른다. 기본은 `#ff00ff`지만, 핑크 뽑기 기계처럼 피사체가 분홍 계열이면 `#00ff00`을 사용한다.
- 색은 고정하지 않는다. 오브젝트가 가장 자연스럽게 읽히는 대표 색을 먼저 고르고, 전체 UI 톤에 억지로 끼워 맞추지 않는다.
- 다만 색이 너무 현대적인 제품 팔레트처럼 보이면 다시 잡는다. 예를 들어 가방은 하늘색/갈색/황토색 중 무엇이든 가능하지만, "제품 상세 페이지의 새 가방"처럼 보이면 안 된다.
- 뽑기 기계는 핑크 본체와 유리돔이 핵심이지만, 고광택 장난감 렌더링처럼 반짝이면 안 된다. 유리 표현도 단순한 색면과 작은 하이라이트로 제한한다.
- 모니터는 상태 보드라는 기능이 읽히게 화면과 받침/프레임을 보여준다. 화면 안에는 글자, 숫자, 복잡한 그래프를 넣지 않고 단순한 색 블록이나 막대 정도만 허용한다.
- 문은 "놀러가기" 행동이 읽히는 포털/방문 느낌을 준다. 웅장한 판타지 게이트나 배경이 붙은 입구가 아니라, 버튼용 단일 문 오브젝트로 유지한다.
- 가방은 꾸미기/인벤토리 맥락이 읽혀야 한다. 토트백 제품 아이콘보다 게임 아이템 가방, 작은 백팩, 플랩백, 모험 가방 쪽의 형태가 우선이다.
- 한 번에 여러 후보를 뽑아 비교하는 방식은 사용하지 않는다. 생성 비용과 시간이 늘어도 최종 톤을 지키기 위해 한 후보씩 보고, 피드백을 다음 후보에 반영한다.
- 피드백 반영 시에는 사용자가 지적한 축만 바꾼다. 예를 들어 "너무 고퀄"이면 디테일과 광택을 낮추고, 색상/형태/컨셉 전체를 동시에 갈아엎지 않는다.
- 새 후보를 만들 때는 프롬프트에 반드시 "match `object-visit-candidate-1.png` texture"와 "not product icon, not premium asset-store sticker"를 포함한다.
- 최종 적용 전에는 128px 원본, 42px 축소 미리보기, 기존 문 후보를 한 화면에서 함께 확인한다. 이 세 가지를 비교하지 않은 후보는 승인 후보로 취급하지 않는다.

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

상단 메뉴 오브젝트:

```text
Create one 2D pixel-art object icon for a cozy indie pixel game dashboard top menu.
Object: <pretty wooden door / status monitor / inventory bag or backpack-like item / pink glass-dome gacha capsule machine>.
Quality reference: match the texture, pixel density, outline strength, warm block shading, and not-too-polished game-item feel of `public/assets/rooms/my-room/object-visit-candidate-1.png`.
Final use: transparent 128x128 PNG displayed around 42px, so the silhouette must be readable when small.
Style: charming lo-fi indie pixel game item, chunky readable pixel clusters, dark brown outline, large simple color blocks, a few restrained highlights.
Background: perfectly flat solid <#ff00ff or #00ff00> chroma-key background for removal. Choose a key color absent from the subject; use #00ff00 for a pink gacha machine.
No text, no letters, no numbers, no watermark, no logo.
No shop, payment, cash, price tag, or commerce feeling.
Avoid product icon, ecommerce catalog icon, premium asset-store sticker, high-detail pixel illustration, glossy rendering, realistic texture, excessive tiny details, and over-forced mosaic pixels.
No cast shadow, no floor plane, no gradient background.
Generous padding, centered object, crisp silhouette.
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
- 상단 메뉴 오브젝트는 최종 파일이 `128x128` RGBA PNG여야 한다.
- 상단 메뉴 오브젝트는 모서리가 투명해야 하며 `#ff00ff` 크로마키 잔여 픽셀이 없어야 한다.
- 크로마키 색상이 남아 있지 않다.
- 원본 크기와 표시 크기를 문서/manifest에 기록한다.
- 파일명이 kebab-case이고 의미가 명확하다.
- 프로젝트에서 참조하는 최종 에셋은 반드시 `public/assets/**` 아래에 저장한다. built-in `image_gen` 기본 저장 위치의 원본은 참조하지 않는다.
- 상단 메뉴 에셋 후보는 승인 전 최종 파일을 덮어쓰지 않았는지 확인한다.
- 상단 메뉴 에셋 후보는 128px 원본과 42px 버튼 미리보기를 함께 확인한다.
- 상단 메뉴 에셋 후보는 문 후보 기준과 비교해 같은 품질/질감인지 확인한다.

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

# P02-T08 — 공동 룸 스테이지

## 목표

친구들이 같은 방에서 개발하는 느낌을 주는 공동 룸 mock 화면을 직접 제작한 공동 룸 픽셀 에셋과 큰 작업 테이블 중심으로 만든다.

## 변경 범위

- **해도 됨:** `/room/demo` 또는 `/room/[code]` mock route, shared room stage components, shared room PNG 에셋 생성/가공, shared room manifest, mock members
- **하면 안 됨:** 실제 room fetch, join/leave API, 채팅 API 연결

## 작업

- `docs/PIXEL_ASSET_PIPELINE.md`의 공동 룸 에셋 기준을 따른다.
- 공동 룸 mock route를 만든다.
- `public/assets/rooms/shared-room/` 아래에 공동 룸 에셋을 직접 제작한다.
  - `base-shared-room.png`: 공동 룸 배경, 1600x900
  - `work-table.png`: 큰 작업 테이블
  - `table-props.png`: 노트북, 머그컵, 문서, 조명 등 테이블 소품
  - `seat-marker.png`: 멤버 자리 기준 표시용 투명 에셋
  - `member-shadow.png`: 캐릭터 접지 그림자
  - `room-light.png`: 조용한 조명/상태 분위기
- 큰 작업 테이블, 노트북, 머그컵, 조명 같은 픽셀 오브젝트를 에셋 레이어로 배치한다.
- 공동 룸 기준 좌표계도 1600x900으로 맞추고 shared room manifest를 만든다.
- 1~8명 mock 멤버 배치를 준비한다.
  - 1~4명은 테이블 주변 배치
  - 5~8명은 양쪽 좌석/긴 테이블 배치
  - 캐릭터 크기가 너무 작아지면 멤버 라벨 밀도를 줄인다.
- 멤버별 GitHub login, health, today commit, streak 라벨을 작게 표시한다.
- 멤버 상태는 라벨과 테이블 오브젝트/이펙트 조합으로 표현한다.
- 룸 이름, 공유 코드, 멤버 수, 나가기 mock CTA를 배치한다.
- 경쟁/랭킹 보드처럼 보이는 에셋은 만들지 않는다.

## 완료 조건

- [ ] 공동 룸 화면이 큰 작업 테이블 중심으로 보인다.
- [ ] `public/assets/rooms/shared-room/` 아래에 공동 룸 개발용 PNG 에셋이 저장되어 있다.
- [ ] 공동 룸 stage가 manifest 기반으로 배치된다.
- [ ] 1~8명 mock 멤버가 식별 가능하다.
- [ ] 긴 GitHub login이 레이아웃을 깨지 않는다.
- [ ] 경쟁/랭킹 UI가 과하게 보이지 않는다.
- [ ] 공동 룸 에셋에 텍스트, 워터마크, 크로마키 잔여색이 없다.
- [ ] 모바일에서 멤버 카드가 1~2열로 자연스럽게 조정된다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/room/demo` 또는 구현된 demo URL을 연다.
2. 공동 작업 테이블과 멤버 배치가 보이는지 확인한다.
3. 모바일 폭에서 멤버 정보가 겹치지 않는지 확인한다.
4. 공동 룸이 개인 방과 같은 팔레트/픽셀 밀도/게임 UI 감성을 공유하는지 확인한다.

## 참조

- `docs/UI_UX.md` 3.3장, 4.3장
- `docs/PIXEL_ASSET_PIPELINE.md`

# PROGRESS.md — 진행 상태 (단일 상태원)

> 이 파일은 개발자와 에이전트의 **유일한 접점**이다.
> 에이전트는 작업 전 이 파일을 읽고, 작업 후 이 파일을 갱신한다.
> 개발자는 이 파일만 보고 현재 phase/task, 테스트 항목, 다음 진행 대상을 판단한다.
> 형식 규칙은 `docs/AGENT_GUIDE.md` 3장 참조.

---

## Current Phase

- **Phase:** 02 — UI/UX 정적 프로토타입
- **File:** `docs/phases/02-ui-ux-prototype.md`
- **Status:** IN PROGRESS
  - 가능한 값: `NOT STARTED` / `IN PROGRESS` / `AWAITING REVIEW` / `DONE`

## Current Task

- **Task:** P02-T05 — 관리 패널과 인벤토리 dock
- **File:** `docs/tasks/phase-02/T05-management-inventory.md`
- **Status:** AWAITING REVIEW
  - 가능한 값: `NOT STARTED` / `IN PROGRESS` / `AWAITING REVIEW` / `DONE`
- **Next Ready Task:** P02-T06 — 방치 모드 (`docs/tasks/phase-02/T06-idle-mode.md`)

## Phase Status

- [x] Phase 01 — 프로젝트 셋업과 문서 기반 (DONE)
- [ ] Phase 02 — UI/UX 정적 프로토타입 (IN PROGRESS)
- [ ] Phase 03 — DB 스키마
- [ ] Phase 04 — 인증과 세션
- [ ] Phase 05 — 커밋 동기화
- [ ] Phase 06 — 도트 캐릭터 렌더러
- [ ] Phase 07 — 대시보드와 인벤토리
- [ ] Phase 08 — 뽑기와 장착
- [ ] Phase 09 — 룸
- [ ] Phase 10 — UI/UX 폴리시
- [ ] Phase 11 — 보안과 QA
- [ ] Phase 12 — 배포 준비

## Phase Task Status

### Phase 01 — 프로젝트 셋업과 문서 기반

- [x] P01-T01 — 프로젝트 기본 앱과 패키지 설정 — DONE
- [x] P01-T02 — 제품 브리프와 시작 문서 정리 — DONE
- [x] P01-T03 — 핵심 제품/기술 문서 체계 — DONE
- [x] P01-T04 — UI/UX 결정과 픽셀 감성 기준 — DONE
- [x] P01-T05 — Phase/Task 자동 개발 운영 구조 — DONE
- [x] P01-T06 — 초기 검증과 브라우저 확인 — DONE
- [x] P01-T07 — Phase 01 리뷰 패키지 — DONE
- [x] P01-T08 — 최종 계약/정합성 보강 — DONE

### Phase 02 — UI/UX 정적 프로토타입

- [x] P02-T01 — 픽셀 디자인 토큰과 폰트 기반 — DONE
- [x] P02-T02 — 랜딩 정적 프로토타입 — DONE
- [x] P02-T03 — 대시보드 앱 셸과 탭 구조 — DONE
- [x] P02-T04 — 내 방 스테이지 — DONE
- [ ] P02-T05 — 관리 패널과 인벤토리 dock — AWAITING REVIEW
- [ ] P02-T06 — 방치 모드 — NOT STARTED
- [ ] P02-T07 — 함께하는 방 탭 — NOT STARTED
- [ ] P02-T08 — 공동 룸 스테이지 — NOT STARTED
- [ ] P02-T09 — 공동 룸 채팅 — NOT STARTED
- [ ] P02-T10 — 반응형/접근성/QA 정리 — NOT STARTED

### Phase 03 — DB 스키마

- [ ] P03-T01 — migration 골격과 공통 DB 기준 — NOT STARTED
- [ ] P03-T02 — users, token, commit_stats 테이블 — NOT STARTED
- [ ] P03-T03 — items, inventory, equipped, seed — NOT STARTED
- [ ] P03-T04 — rooms, room_members, room_messages — NOT STARTED
- [ ] P03-T05 — RLS, 인덱스, SQL 검증 — NOT STARTED

### Phase 04 — 인증과 세션

- [ ] P04-T01 — 서버 환경과 auth helper 기반 — NOT STARTED
- [ ] P04-T02 — GitHub login route와 OAuth state — NOT STARTED
- [ ] P04-T03 — OAuth callback, user upsert, session 발급 — NOT STARTED
- [ ] P04-T04 — logout과 dashboard 보호 — NOT STARTED
- [ ] P04-T05 — 인증 보안/오류/QA — NOT STARTED

### Phase 05 — 커밋 동기화

- [ ] P05-T01 — GitHub activity client와 조회 방식 결정 — NOT STARTED
- [ ] P05-T02 — commit 날짜 정규화와 stats 집계 — NOT STARTED
- [ ] P05-T03 — health, points, streak 계산 로직 — NOT STARTED
- [ ] P05-T04 — sync API, DB 반영, throttle — NOT STARTED
- [ ] P05-T05 — sync 상태 UI와 오류 검증 — NOT STARTED

### Phase 06 — 도트 캐릭터 렌더러

- [ ] P06-T01 — 캐릭터 에셋 계약과 placeholder 기반 — NOT STARTED
- [ ] P06-T02 — health 상태와 idle 애니메이션 — NOT STARTED
- [ ] P06-T03 — 장착 아이템 레이어와 슬롯 합성 — NOT STARTED
- [ ] P06-T04 — 반응형 크기와 reduced motion — NOT STARTED
- [ ] P06-T05 — 대시보드 연결과 렌더러 QA — NOT STARTED

### Phase 07 — 대시보드와 인벤토리

- [ ] P07-T01 — dashboard 서버 데이터 조회 — NOT STARTED
- [ ] P07-T02 — 내 방 실제 데이터 레이아웃 — NOT STARTED
- [ ] P07-T03 — 인벤토리와 장착 상태 표시 — NOT STARTED
- [ ] P07-T04 — 방치 모드, 문, 룸 상태 신호 — NOT STARTED
- [ ] P07-T05 — 함께하는 방 탭과 dashboard QA — NOT STARTED

### Phase 08 — 뽑기와 장착

- [ ] P08-T01 — 뽑기 확률 순수 로직 — NOT STARTED
- [ ] P08-T02 — gacha API와 포인트 transaction — NOT STARTED
- [ ] P08-T03 — 장착/해제 API — NOT STARTED
- [ ] P08-T04 — 뽑기와 장착 UI 연결 — NOT STARTED
- [ ] P08-T05 — 뽑기/장착 edge case QA — NOT STARTED

### Phase 09 — 룸

- [ ] P09-T01 — 룸 생성, 참여, 목록 API — NOT STARTED
- [ ] P09-T02 — 룸 상세, 멤버십, 나가기 API — NOT STARTED
- [ ] P09-T03 — 공동 룸 스테이지와 멤버 표시 — NOT STARTED
- [ ] P09-T04 — 룸 메시지 API — NOT STARTED
- [ ] P09-T05 — 공동 룸 채팅 UI와 갱신 — NOT STARTED
- [ ] P09-T06 — 룸 권한, 제한, QA — NOT STARTED

### Phase 10 — UI/UX 폴리시

- [ ] P10-T01 — 디자인 토큰과 픽셀 UI 감사 — NOT STARTED
- [ ] P10-T02 — 랜딩과 dashboard polish — NOT STARTED
- [ ] P10-T03 — 룸과 채팅 반응형 polish — NOT STARTED
- [ ] P10-T04 — 상태 카피와 접근성 보강 — NOT STARTED
- [ ] P10-T05 — 브라우저 QA와 문서 정리 — NOT STARTED

### Phase 11 — 보안과 QA

- [ ] P11-T01 — secret과 token 노출 감사 — NOT STARTED
- [ ] P11-T02 — API 권한과 RLS 감사 — NOT STARTED
- [ ] P11-T03 — 핵심 도메인 로직 테스트 보강 — NOT STARTED
- [ ] P11-T04 — npm audit와 오류 응답 정리 — NOT STARTED
- [ ] P11-T05 — 보안 QA 리포트와 승인 준비 — NOT STARTED

### Phase 12 — 배포 준비

- [ ] P12-T01 — 배포 문서와 환경 변수 매트릭스 — NOT STARTED
- [ ] P12-T02 — production OAuth와 Supabase 절차 — NOT STARTED
- [ ] P12-T03 — 최종 build와 배포 전 수정 — NOT STARTED
- [ ] P12-T04 — MVP 범위와 보안 최종 QA — NOT STARTED
- [ ] P12-T05 — 릴리즈 인수인계와 PROGRESS 종료 — NOT STARTED

## Working Notes

P02-T05 구현 완료, 개발자 리뷰 대기.

주요 변경:

- `/dashboard`를 `상단 에셋 메뉴 + 중앙 Stage + 우측 선택 메뉴창 + 하단 Dock` 공통 게임 프레임으로 재구성했다.
- `src/components/dashboard/game-room-frame.tsx`를 추가해 `내 방`과 `함께하는 방`이 같은 header menu/stage/command/dock 구조를 공유하게 했다.
- 기존 오른쪽 카드 묶음을 제거하고, 선택된 방 오브젝트의 설명과 명령만 보여주는 RPG식 command panel로 교체했다.
- `MyRoomStage` 위에 얹었던 메뉴성 버튼은 제거하고, `같이 하기`, `내 방`, `꾸미기`, `뽑기`를 헤더 중앙의 대형 픽셀 에셋 메뉴로 이동했다.
- 상단 헤더에서 HP와 오늘 커밋 지표를 제거했다. 오늘 커밋은 하단 sync/status 로그 카드에서 표시한다.
- `같이 하기` 헤더 에셋은 `함께하는 방` 탭 전환만 수행하고, `내 방`/`꾸미기`/`뽑기`는 우측 선택 메뉴창 내용을 바꾼다. `내 방` 선택 시 우측 패널 제목은 기존 `상태`를 유지한다.
- 하단 Dock은 내 방에서 sync/status 로그를 보여주고, 함께하는 방에서는 향후 채팅 Dock placeholder를 같은 위치에 둔다.
- 새 UI 에셋 `hud-bar.png`, `command-panel.png`, `log-window.png`, `inventory-slot-*`, `progress-health-*`를 `public/assets/ui/game-frame`, `public/assets/ui/inventory`, `public/assets/ui/progress`로 구분했다.
- 새 오브젝트 에셋 `object-visit.png`, `object-my-room.png`, `object-customize.png`, `object-gacha.png`를 `public/assets/rooms/my-room/menu-objects/`에 추가했다.
- 상단 옵션 에셋은 사용자 피드백에 맞춰 예쁜 문, 작은 집, 인벤토리 가방/백팩형 오브젝트, 핑크 유리돔 뽑기 기계로 다시 생성했고, 모두 `128x128` 투명 PNG로 저장했다.
- 상단 메뉴 에셋 4종을 최종 파일로 승격했다: `object-visit.png`, `object-my-room.png`, `object-customize.png`, `object-gacha.png`.
- 상단 헤더 좌측 `DeeBi`/현재 위치 브랜드 영역을 제거하고, 4개 메뉴를 헤더 중앙의 큰 픽셀 오브젝트와 작은 라벨 중심 HUD 메뉴로 정리했다.
- 상단 헤더 프레임과 우상단 코인 HUD를 제거했다. 헤더 영역은 큰 패널이 아니라 중앙 메뉴만 가볍게 보이는 투명 HUD 영역으로 둔다.
- `상태` 선택 메뉴창의 포인트 카드를 제거했다. 포인트는 `뽑기` 선택 메뉴창에서만 보인다.
- 기존 최종 상단 메뉴 에셋은 재생성하지 않고 4종 모두 `64x64` 작업 그리드에 다시 맞춘 뒤 `128x128`로 업스케일해 큰 표시 크기에서도 픽셀 덩어리 크기와 실루엣 균형이 맞게 정규화했다.
- 헤더 메뉴 런타임 표시 크기를 `64px`로 낮추고, 메뉴 간격은 데스크톱에서 더 넓혀 픽셀 깨짐과 과한 크기감을 줄였다.
- 헤더 메뉴 PNG 4종을 64px 작업 격자 기준으로 다시 후처리하고 가시 색 수를 64색 이하로 줄여 64px 표시에서 더 선명하게 보이도록 했다.
- 이후 소형 픽셀 오브젝트 품질 기준은 최종 상단 메뉴 4종을 기준으로 하는 `DeeBi Lo-Fi Pixel Object Standard v1`로 부른다. 색상은 고정하지 않고, 42px에서도 읽히는 게임 아이템 질감과 한 개씩 생성/검수하는 workflow를 `docs/PIXEL_ASSET_PIPELINE.md`에 기록했다.
- 헤더 메뉴 중심은 헤더 전체 기준 absolute center로 고정했다. 별도 우상단 HUD를 두지 않아 메뉴 중심감이 흐트러지지 않게 했다.
- v1의 64색/저해상도 후처리 기준은 신규 에셋 기준에서 제외하고, `DeeBi Pixel Asset Standard v2`를 새 기준으로 추가했다. v2는 안정적인 외곽선, 큰 색면, 중간 고급 픽셀 게임 오브젝트 품질을 우선한다.
- `내 방` 메뉴는 기존 모니터 에셋 대신 작은 집 에셋 `object-my-room.png`를 적용했다. 내부 id는 `status` 그대로 유지한다.
- `game-frame`, `inventory`, `progress` UI 에셋을 직접 픽셀 제작 방식으로 다시 그려 임시 사각 테두리 느낌을 줄이고 HUD/패널/슬롯/게이지의 게임 UI 감성을 보강했다.
- `내 방` 집 에셋을 기준으로 남은 상단 메뉴 에셋 품질을 맞추는 첫 후보로 `같이 하기` 문 후보 `public/assets/rooms/my-room/menu-objects/candidates/object-visit-candidate-1.png`를 만들었다. 승인 전이므로 런타임 최종 `object-visit.png`는 아직 덮어쓰지 않았다.
- 비교 검사용 시트 `public/assets/rooms/my-room/menu-objects/candidates/object-visit-candidate-1-preview.png`에는 기준 `내 방`, 현재 `같이 하기`, 신규 후보를 128px/64px로 나란히 배치했다.
- 승인된 `source-scene.png`, `base-room.png`, `foreground-scene.png`의 SHA-256 hash는 변경 전과 동일하며, 각각 `source/`와 `layers/` 하위 폴더로 정리했다.
- `public/assets/**` 루트에는 런타임 최종 에셋만 두고, 승인 전 후보는 `menu-objects/candidates/`처럼 별도 하위 폴더에 둔다.
- `docs/tasks/phase-02/T05-management-inventory.md`, `docs/PIXEL_ASSET_PIPELINE.md`, `docs/DECISIONS.md`를 새 헤더 에셋 메뉴 방향에 맞게 갱신했다.

이어받기 메모:

- 현재 UI 컨셉은 "픽셀 게임 클라이언트"다. 웹 대시보드 카드 묶음이 아니라 `상단 에셋 메뉴`, `중앙 stage`, `우측 RPG command panel`, `하단 sync/chat dock`으로 이해하면 된다.
- `내 방`과 `함께하는 방`은 같은 외곽 프레임을 공유한다. 하단 Dock은 내 방에서는 sync/status 로그, 함께하는 방에서는 이후 채팅 영역이 된다.
- 상단 헤더에는 브랜드/현재 위치/HP/커밋 숫자/코인 HUD/큰 프레임을 두지 않는다. 중앙 대형 픽셀 에셋 메뉴만 가볍게 둔다. 커밋 정보는 하단 `SYNC LOG` 카드에 둔다.
- stage 위에 메뉴성 UI를 올리지 않는다. 승인된 방 장면 위에 상단 옵션 버튼이 끼어들면 안 된다.
- `public/assets/rooms/my-room/source/source-scene.png`는 개발자가 승인한 원본 장면이다. `layers/base-room.png`와 `layers/foreground-scene.png`는 이 장면을 분리한 렌더용 레이어다.
- 승인된 방/캐릭터/책상 장면을 수정해야 하는 경우에는 먼저 별도 preview로 만들고 개발자 승인 후 저장한다. 현재 방향은 방 원본을 재생성하지 않고 UI/메뉴/오브젝트 에셋만 별도 레이어 또는 헤더 메뉴로 추가하는 것이다.
- `public/assets/characters/deebi/deebi.png`는 개발자 제공 기준 캐릭터 원본으로 취급한다. 원본을 덮어쓰지 말고, 필요하면 파생 파일만 만든다.
- UI 에셋은 용도별로 `public/assets/ui/game-frame/`, `public/assets/ui/inventory/`, `public/assets/ui/progress/`에 있다. 텍스트/숫자는 에셋에 굽지 않고 HTML로 유지한다.
- 헤더 메뉴 에셋은 `public/assets/rooms/my-room/menu-objects/object-visit.png`, `object-my-room.png`, `object-customize.png`, `object-gacha.png` 파일을 사용한다. 현재 실제 버튼은 헤더에 있고 stage 내부에는 없다.
- `같이 하기` 문 품질 리워크는 후보 `menu-objects/candidates/object-visit-candidate-1.png`를 개발자가 먼저 보고 승인하면 최종 `object-visit.png`로 승격한다. 승인 전에는 다음 가방/뽑기 후보를 만들지 않는다.
- 다음 작업자가 이어서 손볼 가능성이 높은 파일은 `src/components/dashboard/dashboard-shell.tsx`, `src/components/dashboard/game-room-frame.tsx`, `src/components/dashboard/my-room-stage.tsx`, `src/lib/mock/room-assets.ts`, `src/app/globals.css`다.
- P02-T06 방치 모드를 시작하기 전에는 P02-T05 리뷰가 통과되어야 한다. 방치 모드에서는 이 공통 프레임에서 우측 command panel과 하단 Dock을 어떻게 접거나 축소할지 결정하면 된다.

검증:

- `npm run lint` 통과
- `npm run typecheck` 통과
- `npm run build` 통과, `/dashboard` static route 생성 확인
- 이미지 검사: 상단 오브젝트 PNG 4개가 `128x128` RGBA, 투명 모서리, 크로마키 잔여 0픽셀임을 확인
- 이미지 검사: `object-visit-candidate-1.png`가 `128x128` RGBA, alpha bbox `83x106`, 투명 모서리, 크로마키 잔여 0픽셀임을 확인
- 이미지 검사: 헤더 메뉴 PNG 4종의 가시 색 수가 64색 이하임을 확인
- 브라우저 데스크톱 확인: 브랜드 텍스트, 상단 헤더 프레임, 우상단 코인 HUD 없이 헤더 중앙에 `같이 하기`/`내 방`/`꾸미기`/`뽑기` 메뉴가 64px 아이콘으로 선명하게 보이고, 하단 Dock의 오늘 커밋 표시를 확인했다.
- 브라우저 데스크톱 확인: `1280px` 폭에서 `scrollWidth=1280`, 헤더 메뉴 그룹 중심과 헤더 중심의 차이 `0px`, 헤더 배경 투명/테두리 0/box-shadow none임을 확인했다.
- 이미지 확인: `object-my-room.png`가 `128x128` RGBA, 투명 모서리, 마젠타 계열 배경 제거 상태임을 확인했다.
- UI 에셋 확인: `game-frame`, `inventory`, `progress` PNG가 기존 경로/크기로 갱신되고 브라우저에서 패널, 슬롯, 게이지에 정상 적용됨을 확인했다.
- 브라우저 상호작용 확인: 헤더 에셋 메뉴의 `같이 하기`, `내 방`, `꾸미기` 클릭 동작 통과
- 브라우저 키보드 확인: 헤더 `뽑기` Enter/Space 활성화로 command panel 전환 통과
- 브라우저 모바일 360px 확인: `innerWidth=360`, `scrollWidth=360`, 헤더 메뉴 중심 차이 `0px`으로 가로 overflow가 없고, 브랜드/코인 HUD/상단 프레임 없이 64px 상단 메뉴가 중앙에 보인다.

## Blockers

none

## Developer Test

1. `/dashboard`의 `내 방` 탭을 데스크톱 폭에서 연다.
2. 방 stage가 중심이고 오른쪽 카드 더미 느낌이 사라졌는지 확인한다.
3. 상단 헤더에 HP, 커밋 지표, 오른쪽 코인 HUD, 큰 헤더 프레임이 없고, 하단 sync/status 로그 카드의 커밋 정보와 `뽑기` 메뉴창의 포인트 정보가 보이는지 확인한다.
4. stage 안에 메뉴 옵션이 끼어들어가 있지 않은지 확인한다.
5. `내 방`, `꾸미기`, `뽑기` 헤더 에셋 메뉴를 클릭/키보드 포커스로 선택했을 때 우측 선택 메뉴창 내용이 바뀌는지 확인한다.
6. `같이 하기` 헤더 에셋 메뉴가 `함께하는 방` 탭 전환으로만 동작하는지 확인한다.
7. 하단 Dock이 내 방에서는 sync/status 로그로 보이고, 함께하는 방에서는 채팅 Dock placeholder로 보이는지 확인한다.
8. 모바일 360px 폭에서 stage, command panel, log dock이 겹치지 않고 가로 overflow가 없는지 확인한다.
9. 버튼/탭/인벤토리 슬롯의 텍스트가 이미지가 아니라 실제 HTML로 선택/읽기 가능한지 확인한다.
10. `npm run lint`, `npm run typecheck`, `npm run build`가 통과하는지 확인한다.

---

## task 진행 방법 (개발자용)

1. 에이전트에게 "현재 task 진행해"라고 말한다.
2. 에이전트는 `Current Phase`와 `Current Task`를 읽고 해당 task 하나만 수행한다.
3. 에이전트가 `Current Task Status: AWAITING REVIEW`로 바꾸고 멈추면, 위 `Developer Test`를 직접 해본다.
4. **task 통과** → `Current Task`를 같은 phase의 다음 T 번호로 바꾸고 "다음 task 진행해"라고 말한다.
5. **phase의 모든 task 통과** → `Current Phase`를 다음 phase로 바꾸고 `Current Task`를 다음 phase의 T01로 바꾼 뒤 "다음 task 진행해"라고 말한다.
6. **실패** → 무엇이 어떻게 틀렸는지 에이전트에게 알려준다. `Current Task Status`는 `IN PROGRESS`로 둔다.

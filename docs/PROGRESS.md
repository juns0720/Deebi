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

- **Task:** P02-T03 — 대시보드 앱 셸과 탭 구조
- **File:** `docs/tasks/phase-02/T03-dashboard-shell.md`
- **Status:** AWAITING REVIEW
  - 가능한 값: `NOT STARTED` / `IN PROGRESS` / `AWAITING REVIEW` / `DONE`
- **Next Ready Task:** P02-T04 — 내 방 스테이지 (`docs/tasks/phase-02/T04-my-room-stage.md`)

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
- [x] P02-T03 — 대시보드 앱 셸과 탭 구조 — AWAITING REVIEW
- [ ] P02-T04 — 내 방 스테이지 — NOT STARTED
- [ ] P02-T05 — 관리 패널과 인벤토리 dock — NOT STARTED
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

P02-T03에서 `/dashboard` mock 앱 셸과 `내 방` / `함께하는 방` 탭 구조를 추가했다.

주요 변경:

- 개발자 피드백에 따라 온보딩의 임시 초기 방 테스트 화면(`#room-test`)을 제거했다. 내 방 에셋 비율/좌표계 검증은 P02-T04에서 정식으로 다룬다.
- 랜딩 첫 화면의 `시작하기` 버튼은 `/dashboard` 목업 셸로 이동하고, `구경하기` 버튼은 기존 기능 미리보기(`#demo`)로 유지했다.
- `src/app/dashboard/page.tsx`를 추가해 `/dashboard` route를 만들었다.
- `src/components/dashboard/dashboard-shell.tsx`를 추가해 클라이언트 상태 기반 `내 방` / `함께하는 방` 탭 전환을 구현했다.
- 기존 `src/lib/mock/deebi.ts`의 `mockDashboardData`를 사용해 사용자, 건강도, 오늘 커밋, streak, 포인트, 인벤토리 수, 참여 중인 룸 목록을 표시했다.
- 상단에는 `DeeBi`, 목업 UI 배지, 목업 사용자, 건강도 요약을 배치해 실제 인증이 연결된 화면으로 오해하지 않게 했다.
- `내 방` 탭에는 세부 스테이지 완성 대신 간단한 픽셀 방 셸과 상태/지표 요약만 두었다. 본격적인 방 비율/레이어 계약은 다음 task인 P02-T04 범위로 남겼다.
- `함께하는 방` 탭에는 참여 중인 룸 카드와 비활성 `새 룸 만들기` / `코드로 참여` 버튼을 두어 실제 룸 API가 아직 없음을 작게 표시했다.
- 모바일에서 탭과 패널이 화면 밖으로 밀리지 않도록 `.pixel-tab` 최소 폭, 패널 최대 폭, dashboard root의 가로 overflow를 보정했다.
- `public/assets/onboarding/room-test/*` PNG는 삭제하지 않았다. 현재 온보딩에서는 참조하지 않으며, P02-T04에서 에셋/좌표계 검증용으로 다시 판단할 수 있다.

검증:

- `npm run lint` 통과
- `npm run typecheck` 통과
- `npm run build` 통과
- 텍스트 검색 확인: `src` 안에 `room-test`, `초기 방`, `앞 테이블`, `러그`, `빈 방 위에` 참조가 남아 있지 않다.
- 브라우저 확인: `/dashboard` 데스크톱에서 `내 방` / `함께하는 방` 탭이 보이고, `함께하는 방` 탭 클릭 시 룸 카드와 룸 액션 영역으로 전환된다.
- Chrome CDP 모바일 확인: 360px viewport에서 `/dashboard`의 `innerWidth: 360`, `scrollWidth: 360`, `bodyScrollWidth: 360`으로 가로 오버플로가 없다.
- `npm run build` 결과 `/dashboard`가 static route로 생성된다.

주의:

- 최종 픽셀 배경/캐릭터/아이템 이미지는 개발자가 제공한다.
- 현재 `/dashboard`의 방 셸은 최종 내 방 스테이지가 아니라 P02-T03용 구조 placeholder다.
- 현재 로컬 Node는 v21.7.3이라 설치/실행 시 engine 경고 가능성이 있다. 권장 버전은 Node 20 LTS 또는 22 LTS 계열이다.

## Blockers

none

## Developer Test

1. `/`를 데스크톱 폭에서 확인한다.
2. `/`를 모바일 360px 폭에서 확인한다.
3. 온보딩에서 초기 방 테스트 화면이 더 이상 나오지 않는지 확인한다.
4. `/` 첫 화면의 `시작하기`가 `/dashboard`로, `구경하기`가 기능 미리보기 화면(`#demo`)으로 이동하는지 확인한다.
5. `/dashboard`를 데스크톱 폭에서 열고 `내 방` / `함께하는 방` 탭이 보이는지 확인한다.
6. 두 탭을 전환했을 때 내 방 목업 셸과 함께하는 방 목업 카드가 안정적으로 바뀌는지 확인한다.
7. `/dashboard`를 모바일 360px 폭에서 확인하고 탭과 패널이 화면 밖으로 넘치지 않는지 확인한다.
8. `npm run lint`, `npm run typecheck`, `npm run build`가 통과하는지 확인한다.

---

## task 진행 방법 (개발자용)

1. 에이전트에게 "현재 task 진행해"라고 말한다.
2. 에이전트는 `Current Phase`와 `Current Task`를 읽고 해당 task 하나만 수행한다.
3. 에이전트가 `Current Task Status: AWAITING REVIEW`로 바꾸고 멈추면, 위 `Developer Test`를 직접 해본다.
4. **task 통과** → `Current Task`를 같은 phase의 다음 T 번호로 바꾸고 "다음 task 진행해"라고 말한다.
5. **phase의 모든 task 통과** → `Current Phase`를 다음 phase로 바꾸고 `Current Task`를 다음 phase의 T01로 바꾼 뒤 "다음 task 진행해"라고 말한다.
6. **실패** → 무엇이 어떻게 틀렸는지 에이전트에게 알려준다. `Current Task Status`는 `IN PROGRESS`로 둔다.

# PROGRESS.md — 진행 상태 (단일 상태원)

> 이 파일은 개발자와 에이전트의 **유일한 접점**이다.
> 에이전트는 작업 전 이 파일을 읽고, 작업 후 이 파일을 갱신한다.
> 개발자는 이 파일만 보고 현재 phase/task, 테스트 항목, 다음 진행 대상을 판단한다.
> 형식 규칙은 `docs/AGENT_GUIDE.md` 3장 참조.

---

## Current Phase

- **Phase:** 01 — 프로젝트 셋업과 문서 기반
- **File:** `docs/phases/01-project-setup.md`
- **Status:** AWAITING REVIEW
  - 가능한 값: `NOT STARTED` / `IN PROGRESS` / `AWAITING REVIEW` / `DONE`

## Current Task

- **Task:** P01-T08 — 최종 계약/정합성 보강
- **File:** `docs/tasks/phase-01/T08-final-contract-hardening.md`
- **Status:** AWAITING REVIEW
  - 가능한 값: `NOT STARTED` / `IN PROGRESS` / `AWAITING REVIEW` / `DONE`
- **Next Ready Task:** P02-T01 — 픽셀 디자인 토큰과 폰트 기반 (`docs/tasks/phase-02/T01-design-tokens.md`)

## Phase Status

- [x] Phase 01 — 프로젝트 셋업과 문서 기반 (AWAITING REVIEW)
- [ ] Phase 02 — UI/UX 정적 프로토타입
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
- [x] P01-T08 — 최종 계약/정합성 보강 — AWAITING REVIEW

### Phase 02 — UI/UX 정적 프로토타입

- [ ] P02-T01 — 픽셀 디자인 토큰과 폰트 기반 — NOT STARTED
- [ ] P02-T02 — 랜딩 정적 프로토타입 — NOT STARTED
- [ ] P02-T03 — 대시보드 앱 셸과 탭 구조 — NOT STARTED
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

Phase 01에서 Deebi 프로젝트의 실행 기반과 자동 개발 문서 기반을 정리했다.

주요 변경:

- 서비스명을 `Deebi`로 통일했다.
- Next.js App Router + TypeScript + Tailwind 기본 앱을 구성했다.
- `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `.env.example`, `.gitignore`를 구성했다.
- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`로 첫 화면을 만들었다.
- `deebi.md`를 원본 기획 브리프로 정리했다.
- `README.md`, `FIRST_PROMPT.md`, `SETUP_GUIDE.md`를 Deebi 전용으로 갱신했다.
- `docs/SPEC.md`, `docs/ARCHITECTURE.md`, `docs/DATA_MODEL.md`, `docs/API_CONTRACTS.md`, `docs/UI_UX.md`, `docs/UI_UX_QUESTIONS.md`, `docs/AUTOMATION.md`, `docs/QA_CHECKLIST.md`를 작성했다.
- `docs/phases/00-overview.md`와 Phase 01~12 문서를 작성해 이후 자동 개발 단계를 고정했다.
- `docs/tasks/_TASK_TEMPLATE.md`와 `docs/tasks/phase-01`부터 `docs/tasks/phase-12`까지의 task 문서를 추가했다.
- 모든 phase 문서에 `Task 목록`을 추가해 실제 개발 단위를 `PNN-TNN`으로 고정했다.
- `docs/tasks/phase-01/T08-final-contract-hardening.md`를 추가해 최종 계약/정합성 보강을 정식 task로 분리했다.
- `docs/AGENT_GUIDE.md`, `docs/AUTOMATION.md`, `docs/CONVENTIONS.md`, `README.md`, `FIRST_PROMPT.md`를 task 단위 운영에 맞게 갱신했다.
- `docs/API_CONTRACTS.md`에 `DashboardViewData`와 `GET /api/rooms` joined rooms 계약을 추가했다.
- `docs/DATA_MODEL.md`에서 GitHub access token 저장 위치를 `user_oauth_tokens` private table로 분리했다.
- `docs/ARCHITECTURE.md`에 직접 서명 httpOnly session, public PushEvent 기반 GitHub activity source, sync/gacha RPC transaction 전략을 명시했다.
- `docs/SPEC.md`와 `SETUP_GUIDE.md`에서 MVP OAuth scope를 `read:user`로 확정하고 비공개 커밋 집계는 후속 확장으로 분리했다.
- `docs/UI_UX.md`의 잘못된 Phase 05 렌더러 참조를 Phase 06으로 수정하고 PF스타더스트 파일 포함 상태를 반영했다.
- UI/UX 질의응답 결과를 반영해 개인 방/공동 룸 모델, 32x32 캐릭터, 방치 모드, 밝은 픽셀 방 톤, 랜딩 카피, 공동 룸 채팅 MVP 포함 결정을 문서에 반영했다.
- 전체 UI/UX를 픽셀 그래픽 감성으로 구현하고 기본 폰트를 PF스타더스트로 쓰는 방향을 확정했다.
- `public/fonts/PFStardust.woff`를 추가하고 `src/app/globals.css`에서 기본 폰트로 연결했다.
- 전체 개발 흐름을 UI/UX 우선으로 재정렬했다. Phase 02에서 mock 기반 정적 프로토타입을 먼저 만들고, Phase 03부터 DB/API/기능을 연결한다.

검증:

- `npm run lint` 통과
- `npm run typecheck` 통과
- `npm run build` 통과
- 브라우저에서 `http://127.0.0.1:3000/` 확인: title `Deebi`, 이전 가칭 미노출, 첫 화면 렌더링 정상
- task 문서 구조 검증: phase 문서의 task 링크가 모두 실제 파일을 가리킨다.
- `git diff --check` 통과
- P01-T08 문서 구조 검증 통과: phase task row 69개, 실제 task 파일 69개, 누락 링크 0개, task/phase 필수 섹션 누락 0개
- P01-T08 보강 후 `git diff --check` 통과
- P01-T08 보강 후 `npm run lint` 통과
- P01-T08 보강 후 `npm run typecheck` 통과
- P01-T08 보강 후 `npm run build` 통과

주의:

- 현재 로컬 Node는 v21.7.3이라 설치 시 engine 경고가 난다. `SETUP_GUIDE.md`와 `package.json`에는 Node 20 LTS 또는 22 LTS 계열 권장을 명시했다.
- `npm audit` 기준 moderate 취약점 2건이 보고된다. `npm audit fix --force`는 breaking change 가능성이 있어 Phase 01에서는 자동 적용하지 않았다.
- MVP OAuth scope는 `read:user`, GitHub 활동 조회는 public PushEvent 기준으로 확정했다. 비공개 커밋, health decay 조정, 중복 환급량 조정은 후속 확장 또는 플레이 테스트 항목으로 남긴다.
- PF스타더스트는 Noonnu CDN에서 받은 `public/fonts/PFStardust.woff`를 사용한다. 배포 전 웹폰트 사용 조건과 표기 필요 여부를 다시 확인한다.

## Blockers

none

## Developer Test

1. `docs/PROGRESS.md`에서 `Current Task`가 P01-T08인지 확인한다.
2. `Phase Task Status`에서 Phase 01 안에 P01-T01~P01-T08이 표시되는지 확인한다.
3. `docs/API_CONTRACTS.md`에서 `DashboardViewData`와 `GET /api/rooms` 계약을 확인한다.
4. `docs/ARCHITECTURE.md`에서 OAuth scope, GitHub activity source, session, transaction 전략을 확인한다.
5. `docs/DATA_MODEL.md`에서 `user_oauth_tokens` private table을 확인한다.
6. `npm run build`가 통과하는지 확인한다.

---

## task 진행 방법 (개발자용)

1. 에이전트에게 "현재 task 진행해"라고 말한다.
2. 에이전트는 `Current Phase`와 `Current Task`를 읽고 해당 task 하나만 수행한다.
3. 에이전트가 `Current Task Status: AWAITING REVIEW`로 바꾸고 멈추면, 위 `Developer Test`를 직접 해본다.
4. **task 통과** → `Current Task`를 같은 phase의 다음 T 번호로 바꾸고 "다음 task 진행해"라고 말한다.
5. **phase의 모든 task 통과** → `Current Phase`를 다음 phase로 바꾸고 `Current Task`를 다음 phase의 T01로 바꾼 뒤 "다음 task 진행해"라고 말한다.
6. **실패** → 무엇이 어떻게 틀렸는지 에이전트에게 알려준다. `Current Task Status`는 `IN PROGRESS`로 둔다.

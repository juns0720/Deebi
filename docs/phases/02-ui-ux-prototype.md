# Phase 02 — UI/UX 정적 프로토타입

## 목표

Deebi의 핵심 감성인 "내 방에 켜두는 픽셀 캐릭터"와 "친구들과 같은 방에서 개발하는 공동 룸"을 실제 화면으로 먼저 검증한다. 이 단계가 끝나면 DB, OAuth, GitHub API 없이도 랜딩, 내 방, 함께하는 방, 공동 룸, 채팅, 방치 모드를 mock 데이터로 확인할 수 있다.

## Task 목록

Phase 02는 아래 task를 **T 번호 순서대로 하나씩** 진행한다. 에이전트는 한 번에 task 하나만 수행한다.

| Task | 이름 | 파일 | 상태 |
|---|---|---|---|
| T01 | 픽셀 디자인 토큰과 폰트 기반 | `docs/tasks/phase-02/T01-design-tokens.md` | NOT STARTED |
| T02 | 랜딩 정적 프로토타입 | `docs/tasks/phase-02/T02-landing.md` | NOT STARTED |
| T03 | 대시보드 앱 셸과 탭 구조 | `docs/tasks/phase-02/T03-dashboard-shell.md` | NOT STARTED |
| T04 | 내 방 스테이지 | `docs/tasks/phase-02/T04-my-room-stage.md` | NOT STARTED |
| T05 | 관리 패널과 인벤토리 dock | `docs/tasks/phase-02/T05-management-inventory.md` | NOT STARTED |
| T06 | 방치 모드 | `docs/tasks/phase-02/T06-idle-mode.md` | NOT STARTED |
| T07 | 함께하는 방 탭 | `docs/tasks/phase-02/T07-rooms-tab.md` | NOT STARTED |
| T08 | 공동 룸 스테이지 | `docs/tasks/phase-02/T08-shared-room-stage.md` | NOT STARTED |
| T09 | 공동 룸 채팅 | `docs/tasks/phase-02/T09-room-chat.md` | NOT STARTED |
| T10 | 반응형/접근성/QA 정리 | `docs/tasks/phase-02/T10-responsive-qa.md` | NOT STARTED |

## 변경 범위

- **해도 됨:** `src/app/**`, `src/components/**`, `src/lib/mock/**`, `src/types/**`, CSS/Tailwind 스타일, UI copy, 접근성/반응형 개선, `docs/DECISIONS.md`, `docs/PROGRESS.md`
- **하면 안 됨:** Supabase migration, GitHub OAuth, 실제 세션, 실제 커밋 동기화, 실제 뽑기 API, 실제 룸 API, 실제 채팅 저장, 최종 캐릭터 디자인 확정

## 작업

- `docs/UI_UX.md` 기준으로 mock 기반 화면을 구현한다.
- 전체 UI를 픽셀 그래픽 감성으로 구현한다. 캐릭터뿐 아니라 버튼, 패널, 탭, 배지, 채팅, 방 오브젝트까지 같은 픽셀 톤을 유지한다.
- PF스타더스트를 앱 기본 폰트로 적용한다. 폰트 파일이 프로젝트에 없으면 `font-family` 토큰과 fallback을 준비하고, 파일 필요 여부를 Working Notes에 기록한다.
- `/` 랜딩을 `각자 코딩해도, 같은 방에 있는 것처럼.` 메시지와 공동 룸 미리보기 중심으로 구성한다.
- `/dashboard`에 `내 방` / `함께하는 방` 탭 구조를 구현한다.
- `내 방`은 데스크톱에서 큰 방 스테이지 + 오른쪽 관리 패널 + 하단 인벤토리 구조로 만든다.
- `내 방`에는 32x32 placeholder 픽셀 캐릭터, health 상태, 오늘 커밋, streak, 포인트, 장착 슬롯, 인벤토리 mock을 보여준다.
- 방치 모드 mock을 만든다. 관리 UI를 줄이고 내 방/캐릭터를 크게 보여주며, 문/전광판 같은 친구 상태 미니 신호를 둔다.
- `함께하는 방` 탭에 참여 중인 룸 목록, 새 룸 만들기, 코드로 참여 UI mock을 둔다.
- `/room/[code]` 또는 `/room/demo`에서 공동 룸 mock 화면을 만든다.
- 공동 룸은 큰 작업 테이블 중심으로 1~8명 mock 멤버가 자연스럽게 배치되도록 한다.
- 공동 룸 채팅은 데스크톱 오른쪽 320~360px 패널, 모바일 하단 시트 형태로 만든다.
- 채팅 mock은 최근 메시지, 빈 상태, 긴 GitHub login, 긴 메시지, 입력 오류 상태를 확인할 수 있게 한다.
- 디비 말풍선은 내 방에서만 보이고, 공동 룸 채팅에는 나타나지 않게 한다.
- 모바일 360px, 태블릿, 데스크톱 폭에서 텍스트 겹침과 레이아웃 밀도를 확인한다.
- 실제 API가 없음을 사용자에게 노출하는 개발용 mock 표시는 작게 유지하고, 제품 경험을 방해하지 않게 한다.
- 픽셀 그래픽 감성을 해치는 과한 gradient, glassmorphism, 둥근 SaaS 카드 스타일을 피한다.

## 완료 조건

- [ ] `/` 랜딩이 Deebi의 핵심 문장과 공동 룸 미리보기를 보여준다.
- [ ] 전체 UI가 픽셀 그래픽 감성을 유지한다.
- [ ] PF스타더스트가 기본 폰트로 적용되어 있거나, 폰트 파일 부재 시 적용 준비 상태가 명확히 기록되어 있다.
- [ ] 버튼, 패널, 탭, 배지, 채팅 UI가 픽셀 스타일 토큰을 공유한다.
- [ ] `/dashboard`가 `내 방` / `함께하는 방` 탭 구조로 동작한다.
- [ ] `내 방` 데스크톱 레이아웃이 큰 방 스테이지 + 오른쪽 관리 패널 + 하단 인벤토리 구조다.
- [ ] `내 방` 모바일 레이아웃이 방/캐릭터, 핵심 상태, 뽑기, 장착, 인벤토리 순서로 자연스럽게 쌓인다.
- [ ] 방치 모드 mock에서 종료 버튼이 항상 보이고, 친구 상태 미니 신호가 방 안 오브젝트처럼 보인다.
- [ ] 공동 룸 화면이 큰 작업 테이블 중심의 공간감으로 보인다.
- [ ] 공동 룸 멤버 mock이 1~8명까지 식별 가능하고 텍스트가 넘치지 않는다.
- [ ] 공동 룸 채팅이 데스크톱 오른쪽 패널, 모바일 하단 시트로 보인다.
- [ ] 공동 룸 채팅의 빈 상태, 긴 메시지, 긴 GitHub login, 입력 오류 상태가 깨지지 않는다.
- [ ] 디비 말풍선은 내 방에만 있고 공동 룸에는 없다.
- [ ] UI는 실제 DB/API가 없어도 mock 데이터로 확인 가능하다.
- [ ] MVP 제외 기능인 실제 결제, 실제 광고 SDK, 실제 AI 이미지 생성, DM, 신고/차단 UI가 없다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.
- [ ] 브라우저에서 모바일/데스크톱 주요 화면을 확인하고 결과를 `docs/PROGRESS.md` Working Notes에 기록한다.

## 개발자 테스트

1. `npm run dev`를 실행한다.
2. 데스크톱 폭에서 `/`, `/dashboard`, `/room/demo` 또는 구현된 demo room URL을 확인한다.
3. 모바일 360px 폭에서 같은 화면을 확인한다.
4. 내 방, 함께하는 방, 방치 모드, 공동 룸 채팅 UI가 의도와 맞는지 확인한다.
5. PF스타더스트 또는 준비된 pixel font token이 화면 전체에 적용되는지 확인한다.
6. 디비 말풍선이 개인 방에만 있고 공동 룸에는 없는지 확인한다.
7. `npm run build`가 통과하는지 확인한다.

## 참조

- `docs/UI_UX.md`
- `docs/UI_UX_QUESTIONS.md`
- `docs/SPEC.md` 8장, 11장
- `docs/QA_CHECKLIST.md` UI QA

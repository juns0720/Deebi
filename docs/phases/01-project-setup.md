# Phase 01 — 프로젝트 셋업과 문서 기반

## 목표

Deebi의 Next.js App Router 프로젝트를 레포 루트에 구성하고, AI가 이후 모든 단계를 자동으로 이해하고 실행할 수 있도록 문서 체계를 완성한다. 이 단계가 끝나면 개발자는 `PROGRESS.md`의 Current Phase와 Current Task만 보고 다음 명령을 내릴 수 있다.

## Task 목록

Phase 01은 이미 완료된 초기 기반 작업을 아래 task 단위로 나누어 기록한다. 이후 개발은 항상 `PNN-TNN` 단위로 진행한다.

| Task | 이름 | 파일 | 상태 |
|---|---|---|---|
| T01 | 프로젝트 기본 앱과 패키지 설정 | `docs/tasks/phase-01/T01-project-bootstrap.md` | DONE |
| T02 | 제품 브리프와 시작 문서 정리 | `docs/tasks/phase-01/T02-product-brief.md` | DONE |
| T03 | 핵심 제품/기술 문서 체계 | `docs/tasks/phase-01/T03-core-documents.md` | DONE |
| T04 | UI/UX 결정과 픽셀 감성 기준 | `docs/tasks/phase-01/T04-ui-ux-decisions.md` | DONE |
| T05 | Phase/Task 자동 개발 운영 구조 | `docs/tasks/phase-01/T05-phase-task-structure.md` | DONE |
| T06 | 초기 검증과 브라우저 확인 | `docs/tasks/phase-01/T06-verification.md` | DONE |
| T07 | Phase 01 리뷰 패키지 | `docs/tasks/phase-01/T07-phase-01-review.md` | DONE |
| T08 | 최종 계약/정합성 보강 | `docs/tasks/phase-01/T08-final-contract-hardening.md` | AWAITING REVIEW |

## 변경 범위

- **해도 됨:** `package.json`, lockfile, Next.js/TypeScript/Tailwind 설정, `src/app/**` 기본 화면, `.env.example`, `.gitignore`, `README.md`, `SETUP_GUIDE.md`, `FIRST_PROMPT.md`, `deebi.md`, `docs/**` 문서 전체
- **하면 안 됨:** 실제 GitHub OAuth 구현, Supabase 테이블 생성 실행, 커밋 동기화 구현, 건강도 계산 코드 구현, 뽑기 API 구현, 룸 API 구현, 최종 UI 디자인 확정

## 작업

- 서비스명을 Deebi로 통일한다.
- Next.js App Router + TypeScript + Tailwind CSS 기반 앱을 구성한다.
- 기본 랜딩 화면을 만들어 제품 컨셉과 GitHub 로그인 진입점을 보여준다.
- `.env.example`에 필요한 환경 변수 이름을 추가한다.
- 개발자가 외부 서비스에서 준비해야 할 항목을 `SETUP_GUIDE.md`에 정리한다.
- `deebi.md`의 원본 기획 정보가 손실되지 않도록 `docs/SPEC.md`와 세부 문서로 재구성한다.
- `docs/ARCHITECTURE.md`, `docs/DATA_MODEL.md`, `docs/API_CONTRACTS.md`, `docs/UI_UX.md`, `docs/UI_UX_QUESTIONS.md`, `docs/AUTOMATION.md`, `docs/QA_CHECKLIST.md`를 작성한다.
- Phase 02 이후의 phase 문서를 모두 만들어 다음 자동 개발 흐름을 고정한다.
- `docs/tasks/phase-01/**`, `docs/tasks/phase-02/**`를 만들어 실제 개발 단위를 task로 고정한다.
- API, DB, UI/UX, 보안, transaction, 열린 기술 결정의 충돌을 줄이기 위한 최종 계약 보강을 수행한다.
- Phase 02는 DB보다 먼저 UI/UX 정적 프로토타입을 만드는 단계로 둔다.
- `npm run lint`, `npm run typecheck`, `npm run build` 검증이 통과하는 상태로 만든다.

## 완료 조건

- [ ] 문서와 코드에서 서비스명이 Deebi로 통일되어 있다.
- [ ] `package.json`에 `dev`, `build`, `start`, `lint`, `typecheck` 스크립트가 있다.
- [ ] `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`가 있고 첫 화면이 렌더링된다.
- [ ] Tailwind CSS가 연결되어 기본 화면 스타일에 사용된다.
- [ ] `.env.example`에 필요한 환경 변수 이름이 모두 있다.
- [ ] `.gitignore`가 `.env.local`, `.next`, `node_modules`를 제외한다.
- [ ] `SETUP_GUIDE.md`가 GitHub OAuth 앱, Supabase 프로젝트, `.env.local` 준비 절차를 설명한다.
- [ ] `docs/SPEC.md`가 제품 요구사항과 MVP 제외 항목을 명확히 정의한다.
- [ ] `docs/ARCHITECTURE.md`가 서버/클라이언트 경계와 목표 폴더 구조를 정의한다.
- [ ] `docs/DATA_MODEL.md`와 `docs/API_CONTRACTS.md`가 Phase 03~09 구현 기준으로 충분하다.
- [ ] `docs/UI_UX.md`와 `docs/UI_UX_QUESTIONS.md`가 UI/UX 질의응답 기반 결정을 지원한다.
- [ ] `docs/phases/02-*.md` 이후 문서가 모두 존재한다.
- [ ] `docs/tasks/phase-01/**`와 `docs/tasks/phase-02/**`가 존재하고, `PROGRESS.md`에서 task 단위 상태를 추적한다.
- [ ] dashboard, joined rooms, token 저장, sync/gacha transaction, OAuth scope, GitHub 활동 조회 방식이 문서에서 명확하다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `npm install`을 실행한다.
2. `.env.example`을 참고해 `.env.local`을 만든다. 아직 실제 OAuth 구현 전이라 값은 비워 두어도 첫 화면 확인은 가능하다.
3. `npm run dev`를 실행한다.
4. 브라우저에서 `http://localhost:3000`을 열어 Deebi 첫 화면이 보이는지 확인한다.
5. `docs/phases/00-overview.md`에서 Phase 02가 UI/UX 정적 프로토타입인지 확인한다.
6. `npm run build`가 통과하는지 확인한다.

## 참조

- `deebi.md`
- `docs/SPEC.md`
- `docs/ARCHITECTURE.md`
- `docs/AUTOMATION.md`
- `docs/UI_UX_QUESTIONS.md`

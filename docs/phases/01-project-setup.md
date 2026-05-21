# Phase 01 — 프로젝트 셋업과 문서 기반

## 목표

Deebi의 Next.js App Router 프로젝트를 레포 루트에 구성하고, AI가 이후 모든 단계를 자동으로 이해하고 실행할 수 있도록 문서 체계를 완성한다. 이 단계가 끝나면 개발자는 `PROGRESS.md`의 Current Phase만 보고 다음 명령을 내릴 수 있다.

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

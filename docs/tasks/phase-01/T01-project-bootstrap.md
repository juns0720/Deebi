# P01-T01 — 프로젝트 기본 앱과 패키지 설정

## 목표

Deebi를 실행 가능한 Next.js App Router 프로젝트로 초기화한다. 이 task가 끝나면 로컬에서 앱을 실행하고 첫 화면을 렌더링할 수 있다.

## 변경 범위

- **해도 됨:** `package.json`, `package-lock.json`, Next.js/TypeScript/Tailwind 설정, `src/app/**`, `.gitignore`, `.env.example`
- **하면 안 됨:** 실제 OAuth, Supabase 연결, DB migration 실행, 도메인 기능 구현

## 작업

- Next.js App Router, TypeScript, Tailwind 기반 프로젝트 설정을 만든다.
- `dev`, `build`, `start`, `lint`, `typecheck` 스크립트를 준비한다.
- 기본 layout/page/global style을 만든다.
- 환경 변수 이름과 gitignore 기준을 준비한다.

## 완료 조건

- [ ] `package.json`에 필요한 npm script가 있다.
- [ ] `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`가 존재한다.
- [ ] Tailwind 스타일이 첫 화면에 적용된다.
- [ ] `.env.example`과 `.gitignore`가 존재한다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `npm install`을 실행한다.
2. `npm run dev`를 실행한다.
3. 브라우저에서 `http://localhost:3000`을 열어 첫 화면이 보이는지 확인한다.
4. `npm run build`가 통과하는지 확인한다.

## 참조

- `docs/phases/01-project-setup.md`
- `SETUP_GUIDE.md`


# P02-T01 — 픽셀 디자인 토큰과 폰트 기반

## 목표

Deebi의 모든 화면이 같은 픽셀 그래픽 세계처럼 보이도록 전역 디자인 토큰, PF스타더스트 폰트, 기본 픽셀 UI 유틸리티를 준비한다.

## 변경 범위

- **해도 됨:** `src/app/globals.css`, `src/app/layout.tsx`, `src/components/ui/**`, `src/lib/mock/**`, `src/types/**`, `public/fonts/**`, 관련 문서
- **하면 안 됨:** 랜딩 전체 구현, 대시보드 전체 구현, DB/API 연결, 최종 캐릭터 디자인 확정

## 작업

- PF스타더스트가 전역 기본 폰트로 적용되어 있는지 확인하고 누락 시 연결한다.
- pixel color token, spacing token, border/shadow token, panel/button/badge class를 만든다.
- 픽셀 UI 기본 컴포넌트 후보를 만든다. 예: `PixelButton`, `PixelPanel`, `PixelBadge`, `PixelTab`.
- 과한 gradient/glassmorphism/둥근 SaaS 카드 스타일을 피하는 CSS 기준을 잡는다.
- mock 데이터 파일의 위치와 기본 shape를 준비한다.

## 완료 조건

- [ ] body 또는 app root에 PF스타더스트 기반 font token이 적용된다.
- [ ] 픽셀 UI용 색상, border, shadow, panel, button 토큰이 있다.
- [ ] 최소 3개 이상의 공용 픽셀 UI 컴포넌트 또는 재사용 class가 있다.
- [ ] 기존 첫 화면이 빌드되고 폰트 적용으로 깨지지 않는다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `npm run dev`를 실행한다.
2. `/`를 열어 PF스타더스트가 적용되는지 확인한다.
3. 버튼/패널/텍스트가 일반 SaaS UI보다 픽셀 게임 UI에 가깝게 보이는지 확인한다.

## 참조

- `docs/UI_UX.md` 2.3장
- `docs/QA_CHECKLIST.md` UI QA

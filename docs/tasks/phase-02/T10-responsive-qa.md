# P02-T10 — 반응형/접근성/QA 정리

## 목표

Phase 02에서 만든 모든 mock 화면을 모바일/데스크톱에서 확인하고, 텍스트 겹침과 접근성 기본 문제를 정리한다.

## 변경 범위

- **해도 됨:** Phase 02에서 만든 UI 전체의 반응형/접근성/카피 수정, QA 문서/PROGRESS 갱신
- **하면 안 됨:** 새로운 제품 기능 추가, DB/API 연결, 대규모 화면 재설계

## 작업

- `/`, `/dashboard`, `/room/demo`를 모바일 360px, 태블릿, 데스크톱 폭에서 확인한다.
- 버튼/탭/채팅/카드 텍스트 overflow를 고친다.
- 키보드 포커스와 버튼/link 역할을 점검한다.
- reduced motion 기본 처리를 확인한다.
- Phase 02 완료 결과와 남은 이슈를 `docs/PROGRESS.md` Working Notes에 기록한다.

## 완료 조건

- [ ] 모바일 360px에서 주요 텍스트가 겹치지 않는다.
- [ ] 데스크톱 1440px에서 화면이 지나치게 비어 보이지 않는다.
- [ ] `/`, `/dashboard`, `/room/demo`의 주요 CTA가 키보드로 접근 가능하다.
- [ ] 채팅 하단 시트와 방치 모드 종료 버튼이 접근 가능하다.
- [ ] Phase 02의 모든 task가 `DONE` 또는 `AWAITING REVIEW` 상태로 정리되어 있다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. 모바일 360px에서 `/`, `/dashboard`, `/room/demo`를 확인한다.
2. 데스크톱 1440px에서 같은 화면을 확인한다.
3. 키보드로 주요 버튼과 탭에 접근한다.
4. 전체 픽셀 그래픽 감성이 유지되는지 최종 판단한다.

## 참조

- `docs/QA_CHECKLIST.md` UI QA
- `docs/UI_UX.md`

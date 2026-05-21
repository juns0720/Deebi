# Phase 10 — UI/UX 폴리시

## 목표

개발자와 확정한 UI/UX 답변을 바탕으로 Deebi의 화면 완성도를 높인다. 이 단계가 끝나면 랜딩, 대시보드, 룸이 모바일과 데스크톱에서 일관된 제품처럼 보인다.

## Task 목록

Phase 10은 실제 데이터 연결 후의 화면 품질을 영역별로 점검하고 다듬는다.

| Task | 이름 | 파일 | 상태 |
|---|---|---|---|
| T01 | 디자인 토큰과 픽셀 UI 감사 | `docs/tasks/phase-10/T01-design-audit.md` | NOT STARTED |
| T02 | 랜딩과 dashboard polish | `docs/tasks/phase-10/T02-landing-dashboard-polish.md` | NOT STARTED |
| T03 | 룸과 채팅 반응형 polish | `docs/tasks/phase-10/T03-room-chat-responsive-polish.md` | NOT STARTED |
| T04 | 상태 카피와 접근성 보강 | `docs/tasks/phase-10/T04-states-copy-accessibility.md` | NOT STARTED |
| T05 | 브라우저 QA와 문서 정리 | `docs/tasks/phase-10/T05-browser-qa-docs.md` | NOT STARTED |

## 변경 범위

- **해도 됨:** 레이아웃, 색상, 타이포그래피, 카피, 상태 화면, 접근성, 반응형 개선, UI 컴포넌트 정리
- **하면 안 됨:** 새로운 제품 기능 추가, 결제/광고 연동, 기존 API 계약 변경

## 작업

- `docs/UI_UX_QUESTIONS.md` 답변을 반영한다.
- `docs/UI_UX.md`를 확정 내용으로 업데이트한다.
- 랜딩 화면을 최종 MVP 톤에 맞게 다듬는다.
- dashboard 정보 위계를 정리한다.
- room 멤버 그리드, 공동 룸 채팅, 공유 경험을 다듬는다.
- loading/empty/error/success 상태 카피를 정리한다.
- 모바일 360px, 태블릿, 데스크톱 폭을 확인한다.
- 버튼, 카드, 텍스트 overflow를 점검한다.

## 완료 조건

- [ ] UI/UX 관련 열린 결정이 `docs/DECISIONS.md`에 기록되어 있다.
- [ ] 랜딩, 대시보드, 룸이 같은 디자인 언어를 쓴다.
- [ ] 모바일 360px 폭에서 주요 UI가 겹치지 않는다.
- [ ] 데스크톱에서 콘텐츠 폭과 밀도가 적절하다.
- [ ] 모든 주요 상태에 카피가 있다.
- [ ] 공동 룸 채팅의 빈 상태, 입력 오류, 긴 메시지 상태가 자연스럽다.
- [ ] 공동 룸 채팅은 데스크톱에서 오른쪽 패널, 모바일에서 하단 시트로 일관되게 보인다.
- [ ] 접근성 기본 체크를 통과한다.
- [ ] 브라우저 스크린샷 또는 수동 확인 결과가 Working Notes에 기록된다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. 모바일 폭에서 `/`, `/dashboard`, `/room/[code]`를 확인한다.
2. 데스크톱 폭에서 같은 화면을 확인한다.
3. 긴 GitHub login, 긴 채팅 메시지, 빈 인벤토리, 포인트 부족, 동기화 오류 상태를 확인한다.
4. 화면 톤이 의도와 맞는지 승인 또는 수정 요청을 남긴다.

## 참조

- `docs/UI_UX.md`
- `docs/UI_UX_QUESTIONS.md`
- `docs/QA_CHECKLIST.md` UI QA

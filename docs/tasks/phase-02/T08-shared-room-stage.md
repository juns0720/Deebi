# P02-T08 — 공동 룸 스테이지

## 목표

친구들이 같은 방에서 개발하는 느낌을 주는 공동 룸 mock 화면을 큰 작업 테이블 중심으로 만든다.

## 변경 범위

- **해도 됨:** `/room/demo` 또는 `/room/[code]` mock route, shared room stage components, mock members
- **하면 안 됨:** 실제 room fetch, join/leave API, 채팅 API 연결

## 작업

- 공동 룸 mock route를 만든다.
- 큰 작업 테이블, 노트북, 머그컵, 조명 같은 픽셀 오브젝트를 배치한다.
- 1~8명 mock 멤버 배치를 준비한다.
- 멤버별 GitHub login, health, today commit, streak 라벨을 작게 표시한다.
- 멤버 상태는 라벨과 테이블 오브젝트/이펙트 조합으로 표현한다.
- 룸 이름, 공유 코드, 멤버 수, 나가기 mock CTA를 배치한다.

## 완료 조건

- [ ] 공동 룸 화면이 큰 작업 테이블 중심으로 보인다.
- [ ] 1~8명 mock 멤버가 식별 가능하다.
- [ ] 긴 GitHub login이 레이아웃을 깨지 않는다.
- [ ] 경쟁/랭킹 UI가 과하게 보이지 않는다.
- [ ] 모바일에서 멤버 카드가 1~2열로 자연스럽게 조정된다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/room/demo` 또는 구현된 demo URL을 연다.
2. 공동 작업 테이블과 멤버 배치가 보이는지 확인한다.
3. 모바일 폭에서 멤버 정보가 겹치지 않는지 확인한다.

## 참조

- `docs/UI_UX.md` 3.3장, 4.3장

# P02-T03 — 대시보드 앱 셸과 탭 구조

## 목표

mock 데이터 기반 `/dashboard` 앱 셸을 만들고 `내 방` / `함께하는 방` 탭 전환 구조를 구현한다.

## 변경 범위

- **해도 됨:** `src/app/dashboard/**`, dashboard shell components, tab components, mock data
- **하면 안 됨:** 실제 세션 보호, 실제 API fetch, 내 방 세부 스테이지 완성, 룸 생성 API

## 작업

- `/dashboard` route를 만든다.
- `내 방` / `함께하는 방` 탭 UI를 만든다.
- 탭 전환은 mock 상태로 동작하게 한다.
- 상단에 서비스명, 현재 사용자 mock, 기본 상태 요약을 배치한다.
- 빈 상태와 mock 모드 표시를 작게 둔다.

## 완료 조건

- [ ] `/dashboard`가 빌드되고 접근 가능하다.
- [ ] `내 방` / `함께하는 방` 탭이 보이고 전환된다.
- [ ] 탭 UI가 픽셀 그래픽 감성을 유지한다.
- [ ] 모바일에서 탭이 화면 밖으로 넘치지 않는다.
- [ ] 실제 인증이 된 것처럼 보이는 오해를 주지 않는다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/dashboard`를 연다.
2. 두 탭을 전환한다.
3. 데스크톱/모바일에서 탭이 안정적으로 보이는지 확인한다.

## 참조

- `docs/UI_UX.md` 3.2장, 4.2장

# P04-T04 — logout과 dashboard 보호

## 목표

로그아웃과 `/dashboard` 보호 라우트를 완성해 로그인 사용자만 대시보드에 접근하도록 한다.

## 변경 범위

- **해도 됨:** `POST /api/auth/logout`, route guard, dashboard shell auth 연결, logout UI
- **하면 안 됨:** dashboard 실제 지표/인벤토리 구현

## 작업

- logout API를 만든다.
- session cookie를 삭제한다.
- `/dashboard` 접근 시 세션이 없으면 `/`로 보낸다.
- dashboard에 로그인 사용자 기본 정보를 표시한다.

## 완료 조건

- [ ] 로그아웃하면 session cookie가 삭제된다.
- [ ] 세션 없는 사용자는 `/dashboard`에 접근할 수 없다.
- [ ] 로그인 사용자는 dashboard shell을 볼 수 있다.
- [ ] `npm run build`가 통과한다.

## 개발자 테스트

1. 로그인 후 `/dashboard`가 보이는지 확인한다.
2. 로그아웃한다.
3. 다시 `/dashboard`에 직접 접근했을 때 `/`로 이동하는지 확인한다.

## 참조

- `docs/API_CONTRACTS.md`
- `docs/UI_UX.md` dashboard


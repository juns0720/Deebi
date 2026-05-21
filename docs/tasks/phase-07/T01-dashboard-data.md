# P07-T01 — dashboard 서버 데이터 조회

## 목표

세션 사용자 기준으로 dashboard에 필요한 실제 데이터를 한 번에 조회하는 서버 함수를 만든다.

## 변경 범위

- **해도 됨:** dashboard loader/server function, 타입, loading/error 처리 기반
- **하면 안 됨:** gacha write, room write, 대규모 UI polish

## 작업

- 사용자, commit stats, inventory, equipped, joined rooms 데이터를 조회한다.
- 반환 shape은 `docs/API_CONTRACTS.md`의 `DashboardViewData`를 따른다.
- 세션 없는 경우 접근을 막는다.
- 빈 데이터와 오류를 구분한다.
- UI가 사용할 view model을 만든다.

## 완료 조건

- [ ] dashboard 데이터 조회 함수가 있다.
- [ ] dashboard 데이터 조회 함수가 `DashboardViewData` shape을 반환한다.
- [ ] 세션 없는 사용자는 접근할 수 없다.
- [ ] inventory와 joined rooms empty state를 판단할 수 있다.
- [ ] access token은 응답에 포함되지 않는다.

## 개발자 테스트

1. 로그인 후 dashboard 데이터가 조회되는지 확인한다.
2. 로그아웃 상태에서 접근이 막히는지 확인한다.
3. 응답에 access token이 없는지 확인한다.

## 참조

- `docs/API_CONTRACTS.md` dashboard
- `docs/DATA_MODEL.md`

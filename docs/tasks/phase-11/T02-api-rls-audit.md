# P11-T02 — API 권한과 RLS 감사

## 목표

API가 body의 user id를 신뢰하지 않고, RLS와 서버 권한 경계가 문서와 맞는지 확인한다.

## 변경 범위

- **해도 됨:** API 권한 수정, RLS policy 보강, 테스트
- **하면 안 됨:** DB 구조 대폭 변경, API 기능 확장

## 작업

- write API가 세션 사용자 기준으로 동작하는지 확인한다.
- 다른 user id를 body에 넣어도 권한 상승이 안 되는지 점검한다.
- room message RLS/서버 검증을 확인한다.
- 필요한 RLS policy를 보강한다.

## 완료 조건

- [ ] write API는 세션 사용자 기준이다.
- [ ] 다른 사용자 자원 조작이 거부된다.
- [ ] room message는 같은 룸 멤버만 조회/작성 가능하다.
- [ ] RLS 정책이 문서와 충돌하지 않는다.

## 개발자 테스트

1. 다른 user id를 넣어 write API를 호출한다.
2. 룸 비멤버로 message API를 호출한다.
3. 거부 응답이 안전한지 확인한다.

## 참조

- `docs/DATA_MODEL.md` RLS
- `docs/API_CONTRACTS.md`


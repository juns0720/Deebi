# P08-T02 — gacha API와 포인트 transaction

## 목표

`POST /api/gacha`가 포인트 차감, 아이템 지급, 중복 환급을 하나의 안전한 흐름으로 처리하게 한다.

## 변경 범위

- **해도 됨:** gacha API, DB transaction/RPC, 포인트/인벤토리 write
- **하면 안 됨:** 장착 API, 결제/상점/광고 연동

## 작업

- 세션 사용자 기준으로 gacha API를 만든다.
- 100포인트 미만이면 실패시킨다.
- 새 아이템이면 inventory에 추가한다.
- 중복이면 30포인트를 환급한다.
- race condition과 중복 지급을 방지한다.

## 완료 조건

- [ ] 포인트 부족 시 뽑기가 실행되지 않는다.
- [ ] 성공 시 100포인트가 차감된다.
- [ ] 새 아이템은 inventory에 추가된다.
- [ ] 중복 아이템은 30포인트 환급된다.
- [ ] transaction 경계가 명확하다.

## 개발자 테스트

1. points 100 이상 사용자로 뽑기를 실행한다.
2. inventory와 points 변화를 확인한다.
3. 중복 상황에서 30포인트 환급을 확인한다.

## 참조

- `docs/API_CONTRACTS.md` 4장
- `docs/DATA_MODEL.md` inventory


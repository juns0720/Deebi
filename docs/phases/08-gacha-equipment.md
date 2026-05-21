# Phase 08 — 뽑기와 장착

## 목표

포인트를 사용한 뽑기, 중복 환급, 인벤토리 추가, 아이템 장착/해제 기능을 구현한다. 이 단계가 끝나면 사용자는 포인트로 아이템을 얻고 캐릭터에 반영할 수 있다.

## Task 목록

Phase 08은 뽑기 확률, API transaction, 장착 API, UI 연결을 순서대로 진행한다.

| Task | 이름 | 파일 | 상태 |
|---|---|---|---|
| T01 | 뽑기 확률 순수 로직 | `docs/tasks/phase-08/T01-gacha-probability.md` | NOT STARTED |
| T02 | gacha API와 포인트 transaction | `docs/tasks/phase-08/T02-gacha-api-transaction.md` | NOT STARTED |
| T03 | 장착/해제 API | `docs/tasks/phase-08/T03-equipment-api.md` | NOT STARTED |
| T04 | 뽑기와 장착 UI 연결 | `docs/tasks/phase-08/T04-gacha-equipment-ui.md` | NOT STARTED |
| T05 | 뽑기/장착 edge case QA | `docs/tasks/phase-08/T05-gacha-equipment-qa.md` | NOT STARTED |

## 변경 범위

- **해도 됨:** `/api/gacha`, `/api/inventory/equip`, gacha UI, gacha reveal, equipment slots, inventory interaction
- **하면 안 됨:** room 기능, 광고 실제 연동, 결제/상점/아이템 거래

## 작업

- gacha 확률 로직을 순수 함수로 구현한다.
- `POST /api/gacha`를 구현한다.
- 포인트 부족, 성공, 중복 환급 분기를 구현한다.
- `POST /api/inventory/equip`을 구현한다.
- 장착/해제 UI를 dashboard에 연결한다.
- 뽑기 결과 연출을 추가한다.
- 중복 환급 30포인트 정책을 코드와 UI에 명시한다.

## 완료 조건

- [ ] 100포인트 미만이면 뽑기가 실행되지 않는다.
- [ ] 뽑기 성공 시 포인트가 100 차감된다.
- [ ] 새 아이템이면 inventory에 추가된다.
- [ ] 중복 아이템이면 30포인트가 환급된다.
- [ ] 등급 확률이 common 70%, rare 25%, unique 5%다.
- [ ] 장착은 보유 아이템만 가능하다.
- [ ] 슬롯당 1개만 장착된다.
- [ ] 장착 결과가 캐릭터에 반영된다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. 테스트 사용자 points를 100 이상으로 만든다.
2. 뽑기를 실행한다.
3. 결과 아이템이 inventory에 생기는지 확인한다.
4. 같은 아이템 중복 상황에서 30포인트 환급이 되는지 확인한다.
5. 아이템 장착/해제 후 캐릭터 표시가 바뀌는지 확인한다.

## 참조

- `docs/SPEC.md` 8.7~8.8장
- `docs/API_CONTRACTS.md` 4~5장
- `docs/DATA_MODEL.md` 3.4~3.5장

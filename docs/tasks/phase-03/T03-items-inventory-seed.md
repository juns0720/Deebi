# P03-T03 — items, inventory, equipped, seed

## 목표

뽑기와 장착 기능이 사용할 아이템, 보유 상태, 장착 상태 DB 구조와 기본 seed를 만든다.

## 변경 범위

- **해도 됨:** `items`, `inventory`, `equipped` SQL, item seed, rarity/slot 제약
- **하면 안 됨:** gacha API, 장착 API, 캐릭터 렌더러 구현

## 작업

- `items` 테이블과 rarity/slot 제약을 만든다.
- `inventory` 보유 상태와 중복 방지 제약을 만든다.
- `equipped` 슬롯별 장착 상태를 만든다.
- MVP seed item 15개를 작성한다.

## 완료 조건

- [ ] `items` seed가 15개를 정확히 포함한다.
- [ ] rarity가 common/rare/unique 범위로 제한된다.
- [ ] slot이 문서의 장착 슬롯과 맞다.
- [ ] 같은 사용자가 같은 item을 중복 보유하지 못한다.
- [ ] 슬롯당 1개 장착 기준이 DB에서 표현된다.

## 개발자 테스트

1. seed SQL 적용 후 `items` row가 15개인지 확인한다.
2. rarity와 slot 값이 문서와 맞는지 확인한다.
3. 같은 user/item 중복 보유가 막히는지 확인한다.

## 참조

- `docs/DATA_MODEL.md` 3.3~3.5
- `docs/SPEC.md` 8.7~8.8


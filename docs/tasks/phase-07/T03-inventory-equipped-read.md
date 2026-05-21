# P07-T03 — 인벤토리와 장착 상태 표시

## 목표

사용자가 보유한 아이템과 현재 장착 상태를 읽기 전용으로 확인할 수 있게 한다.

## 변경 범위

- **해도 됨:** inventory list, equipped slots, empty/loading/error state
- **하면 안 됨:** 장착/해제 write API, 뽑기 API

## 작업

- 인벤토리 보유/미보유 상태를 표시한다.
- 장착 슬롯 상태를 표시한다.
- 아이템 rarity와 slot을 읽기 쉽게 보여준다.
- 빈 인벤토리 상태를 만든다.

## 완료 조건

- [ ] 보유 아이템 목록이 보인다.
- [ ] 장착 슬롯별 상태가 보인다.
- [ ] 빈 인벤토리도 화면이 깨지지 않는다.
- [ ] 긴 아이템명 또는 login이 UI를 깨지 않는다.

## 개발자 테스트

1. inventory가 비어 있는 사용자로 확인한다.
2. 아이템이 있는 사용자로 장착 상태를 확인한다.

## 참조

- `docs/DATA_MODEL.md` inventory/equipped
- `docs/UI_UX.md`


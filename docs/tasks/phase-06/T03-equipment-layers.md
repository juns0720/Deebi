# P06-T03 — 장착 아이템 레이어와 슬롯 합성

## 목표

캐릭터에 붙는 아이템과 방 좌표계에 고정되는 아이템을 분리해 장착 상태를 시각적으로 합성한다.

## 변경 범위

- **해도 됨:** equipment layer 타입, 슬롯별 z-index, sample items, 렌더러 합성
- **하면 안 됨:** gacha API, inventory write API

## 작업

- hat, face, accessory, background 슬롯을 정의한다.
- 캐릭터 좌표계 레이어와 방 좌표계 레이어를 분리한다.
- 장착 없음/없는 아이템 상태를 안전하게 처리한다.
- sample item 15개에 최소 layer 표현을 연결한다.

## 완료 조건

- [ ] 슬롯별 합성 순서가 명확하다.
- [ ] 장착 없음 상태가 깨지지 않는다.
- [ ] 캐릭터 부착 레이어와 방 고정 레이어의 기준이 분리되어 있다.
- [ ] 15개 아이템의 최소 표현 또는 placeholder가 있다.

## 개발자 테스트

1. 각 슬롯 아이템을 하나씩 켜본다.
2. 여러 슬롯을 동시에 켰을 때 겹침이 의도 범위인지 확인한다.

## 참조

- `docs/SPEC.md` 아이템
- `docs/DATA_MODEL.md` items/equipped


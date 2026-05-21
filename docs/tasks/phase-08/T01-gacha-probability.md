# P08-T01 — 뽑기 확률 순수 로직

## 목표

뽑기 rarity와 아이템 선택 로직을 API와 분리된 순수 함수로 만든다.

## 변경 범위

- **해도 됨:** gacha probability 함수, random 주입 구조, 테스트
- **하면 안 됨:** DB write, UI reveal 구현

## 작업

- common 70%, rare 25%, unique 5% 확률을 구현한다.
- 테스트 가능한 random 주입 방식을 쓴다.
- seed items에서 rarity별 후보를 고른다.
- 후보가 없는 경우를 안전하게 처리한다.

## 완료 조건

- [ ] rarity 확률이 문서와 일치한다.
- [ ] random을 mock할 수 있다.
- [ ] rarity별 후보 선택 테스트가 있다.
- [ ] 후보 없음 오류가 안전하다.

## 개발자 테스트

1. 테스트에서 fixed random 값으로 rarity 결과를 확인한다.
2. rarity 후보가 없는 입력의 오류를 확인한다.

## 참조

- `docs/SPEC.md` 뽑기
- `docs/API_CONTRACTS.md` gacha


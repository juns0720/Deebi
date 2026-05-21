# P06-T01 — 캐릭터 에셋 계약과 placeholder 기반

## 목표

개발자가 제공할 32x32 캐릭터 에셋을 받을 수 있는 계약을 만들고, 최종 디자인처럼 보이지 않는 placeholder로 렌더러 기반을 검증한다.

## 변경 범위

- **해도 됨:** `src/components/character/**`, 캐릭터 타입, manifest 예시, placeholder asset
- **하면 안 됨:** 최종 캐릭터 디자인 임의 제작, gacha/room 구현

## 작업

- 32x32 기준 좌표계와 scale 방식을 정의한다.
- state별 sprite/manifest 입력 형식을 만든다.
- placeholder 캐릭터를 만든다.
- 에셋 미제공 상태에서도 UI가 깨지지 않게 fallback을 둔다.

## 완료 조건

- [ ] 캐릭터 에셋 manifest 타입이 있다.
- [ ] 32x32 기준 좌표계가 코드에 반영되어 있다.
- [ ] placeholder는 최종 캐릭터처럼 오해되지 않는다.
- [ ] 에셋이 없어도 렌더러가 안전하게 표시된다.

## 개발자 테스트

1. 캐릭터 미리보기에서 placeholder가 보이는지 확인한다.
2. manifest 값이 빠진 경우에도 화면이 깨지지 않는지 확인한다.

## 참조

- `docs/phases/06-character-renderer.md`
- `docs/UI_UX.md` 캐릭터


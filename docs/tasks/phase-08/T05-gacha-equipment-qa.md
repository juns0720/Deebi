# P08-T05 — 뽑기/장착 edge case QA

## 목표

뽑기와 장착의 오류, 중복, 권한, 빌드 검증을 마무리한다.

## 변경 범위

- **해도 됨:** edge case 수정, 테스트 보강, QA notes
- **하면 안 됨:** 신규 보상 시스템, 결제/상점 추가

## 작업

- 포인트 부족, 중복, race condition, 미보유 장착을 확인한다.
- 긴 아이템명과 empty inventory UI를 확인한다.
- API 오류 응답이 안전한지 확인한다.
- Phase 08 결과를 `docs/PROGRESS.md`에 기록한다.

## 완료 조건

- [ ] 포인트 부족 뽑기가 실패한다.
- [ ] 중복 환급이 중복 지급되지 않는다.
- [ ] 미보유 아이템 장착이 실패한다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.
- [ ] QA 결과가 기록된다.

## 개발자 테스트

1. 포인트 부족/충분/중복 케이스를 각각 확인한다.
2. 다른 사용자 아이템 장착 요청이 거부되는지 확인한다.
3. build가 통과하는지 확인한다.

## 참조

- `docs/QA_CHECKLIST.md`
- `docs/phases/08-gacha-equipment.md`


# P05-T03 — health, points, streak 계산 로직

## 목표

커밋 집계를 바탕으로 건강도, 포인트, streak를 계산하는 순수 로직을 만든다.

## 변경 범위

- **해도 됨:** health/points/streak 함수, 테스트, 열린 수치 결정 기록
- **하면 안 됨:** DB transaction 구현, UI 리디자인

## 작업

- health decay와 회복 기준을 확정하거나 열린 항목으로 기록한다.
- 신규 커밋에 대한 포인트 지급량을 계산한다.
- streak를 계산한다.
- 항상 health 0~100 범위를 지키게 한다.

## 완료 조건

- [ ] health는 항상 0~100이다.
- [ ] 신규 커밋만 포인트 지급 대상이다.
- [ ] streak 계산 테스트가 있다.
- [ ] 수치 결정이 필요한 경우 `docs/DECISIONS.md`에 기록되어 있다.

## 개발자 테스트

1. 커밋 0개, 1개, 여러 개 mock으로 계산 결과를 확인한다.
2. 오래 방치한 케이스에서 health가 음수가 되지 않는지 확인한다.

## 참조

- `docs/SPEC.md` 8.4~9
- `docs/DATA_MODEL.md` commit_stats


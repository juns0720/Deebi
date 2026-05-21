# P05-T02 — commit 날짜 정규화와 stats 집계

## 목표

GitHub 활동 데이터를 Deebi의 날짜별 commit stats로 변환하는 순수 로직을 만든다.

## 변경 범위

- **해도 됨:** commit normalization 함수, 날짜 유틸, 테스트
- **하면 안 됨:** DB write, 포인트 지급, health 계산

## 작업

- GitHub event 또는 commit 데이터를 날짜별로 묶는다.
- timezone 기준을 문서화한다.
- 오늘 커밋 수와 기간별 commit count를 계산한다.
- 빈 활동과 중복 event를 안전하게 처리한다.

## 완료 조건

- [ ] 날짜별 commit count를 반환하는 순수 함수가 있다.
- [ ] 커밋이 없는 사용자도 정상 처리된다.
- [ ] timezone 기준이 코드나 문서에 명시되어 있다.
- [ ] 중복 입력에 대한 테스트가 있다.

## 개발자 테스트

1. mock GitHub 활동 데이터로 날짜별 결과를 확인한다.
2. 커밋이 없는 입력에서 빈 결과가 안전하게 나오는지 확인한다.

## 참조

- `docs/SPEC.md` 커밋 집계
- `docs/QA_CHECKLIST.md` 도메인 로직 QA


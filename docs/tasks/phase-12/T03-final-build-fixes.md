# P12-T03 — 최종 build와 배포 전 수정

## 목표

배포 전 clean 상태에서 lint/typecheck/build를 통과시키고 필요한 최소 수정만 적용한다.

## 변경 범위

- **해도 됨:** build 오류 수정, 타입 오류 수정, 배포 환경 호환 수정
- **하면 안 됨:** UI 대규모 리디자인, 신규 기능 추가

## 작업

- clean install 기준 build를 확인한다.
- lint/typecheck 오류를 수정한다.
- production env에서만 드러나는 URL/cookie 설정 문제를 확인한다.
- 수정 내역을 기록한다.

## 완료 조건

- [ ] `npm run lint`가 통과한다.
- [ ] `npm run typecheck`가 통과한다.
- [ ] `npm run build`가 통과한다.
- [ ] 배포 전 수정 범위가 기록되어 있다.

## 개발자 테스트

1. clean 상태에서 install/build를 실행한다.
2. production env 변수로 build가 실패하지 않는지 확인한다.

## 참조

- `docs/QA_CHECKLIST.md` 배포 전 QA
- `SETUP_GUIDE.md`


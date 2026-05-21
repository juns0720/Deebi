# P11-T04 — npm audit와 오류 응답 정리

## 목표

의존성 취약점과 API 오류 응답을 검토해 출시 전 위험을 줄인다.

## 변경 범위

- **해도 됨:** 안전한 dependency update, error shape 정리, 보안 문서 notes
- **하면 안 됨:** breaking update 강제 적용, 기능 추가

## 작업

- `npm audit` 결과를 검토한다.
- 안전한 범위의 업데이트만 적용한다.
- API 오류 응답에서 내부 정보가 빠졌는지 확인한다.
- breaking change가 필요한 항목은 Blockers 또는 notes에 남긴다.

## 완료 조건

- [ ] audit 결과가 검토되어 있다.
- [ ] 안전한 dependency update만 적용했다.
- [ ] 오류 응답에 stack trace/token/SQL이 없다.
- [ ] 미해결 취약점은 이유와 함께 기록되어 있다.

## 개발자 테스트

1. `npm audit`을 실행한다.
2. `npm run build`가 통과하는지 확인한다.
3. 대표 API 오류 응답을 확인한다.

## 참조

- `docs/QA_CHECKLIST.md`
- `SETUP_GUIDE.md`


# P04-T05 — 인증 보안/오류/QA

## 목표

인증 흐름의 secret 노출, state 검증, cookie 옵션, 오류 응답을 점검한다.

## 변경 범위

- **해도 됨:** 인증 관련 보안 보강, 오류 처리, QA notes
- **하면 안 됨:** 새 제품 기능 추가, GitHub commit scope 확장

## 작업

- OAuth state 실패 케이스를 확인한다.
- cookie 보안 옵션을 확인한다.
- API 오류 응답에서 secret/stack trace가 빠졌는지 확인한다.
- build/lint/typecheck를 실행한다.

## 완료 조건

- [ ] OAuth state 검증 실패가 거부된다.
- [ ] session cookie가 httpOnly다.
- [ ] client bundle에 GitHub secret이 없다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.
- [ ] 인증 QA 결과가 `docs/PROGRESS.md`에 기록된다.

## 개발자 테스트

1. state를 임의로 바꾼 callback URL을 호출해 거부되는지 확인한다.
2. 브라우저 devtools에서 session cookie 속성을 확인한다.
3. 로그아웃 후 보호 route 접근이 막히는지 확인한다.

## 참조

- `docs/QA_CHECKLIST.md` 보안 QA
- `docs/phases/04-auth-session.md`


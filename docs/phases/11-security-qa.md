# Phase 11 — 보안과 QA

## 목표

MVP 출시 전 보안 경계, RLS, API 권한, 오류 처리, 핵심 테스트를 점검한다. 이 단계가 끝나면 secret 노출과 중복 보상 같은 치명 리스크가 방어된다.

## Task 목록

Phase 11은 출시 전 위험을 보안 경계, 권한, 도메인 로직, 오류 처리 순서로 점검한다.

| Task | 이름 | 파일 | 상태 |
|---|---|---|---|
| T01 | secret과 token 노출 감사 | `docs/tasks/phase-11/T01-secret-token-audit.md` | NOT STARTED |
| T02 | API 권한과 RLS 감사 | `docs/tasks/phase-11/T02-api-rls-audit.md` | NOT STARTED |
| T03 | 핵심 도메인 로직 테스트 보강 | `docs/tasks/phase-11/T03-domain-logic-tests.md` | NOT STARTED |
| T04 | npm audit와 오류 응답 정리 | `docs/tasks/phase-11/T04-audit-errors.md` | NOT STARTED |
| T05 | 보안 QA 리포트와 승인 준비 | `docs/tasks/phase-11/T05-security-qa-report.md` | NOT STARTED |

## 변경 범위

- **해도 됨:** 보안 수정, 테스트 추가, 오류 처리 개선, RLS 정책 보강, 문서 보강
- **하면 안 됨:** 신규 기능 추가, UI 대규모 리디자인, DB 구조 대폭 변경

## 작업

- `docs/QA_CHECKLIST.md`를 기준으로 보안 QA를 수행한다.
- `user_oauth_tokens.access_token` 노출 경로를 검색한다.
- API 권한 검증을 점검한다.
- RLS 정책을 점검한다.
- health/points/gacha/room 핵심 로직 테스트를 보강한다.
- room message 권한과 입력 검증을 점검한다.
- 오류 응답이 안전한지 확인한다.
- `npm audit` 결과를 검토하고, 안전한 범위의 업데이트만 적용한다.

## 완료 조건

- [ ] secret이 클라이언트 번들에 들어가지 않는다.
- [ ] access token이 API 응답에 포함되지 않는다.
- [ ] OAuth state 검증이 있다.
- [ ] write API는 세션 사용자를 기준으로 동작한다.
- [ ] 중복 포인트 지급을 방지한다.
- [ ] 포인트 부족 뽑기가 실패한다.
- [ ] RLS 정책이 문서와 맞다.
- [ ] 룸 메시지는 같은 룸 멤버에게만 조회/작성 가능하다.
- [ ] 룸 메시지 입력은 trim 후 1~300자 제약을 지킨다.
- [ ] 핵심 도메인 로직 테스트가 있다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. 로그아웃 상태에서 보호 API와 `/dashboard` 접근을 시도한다.
2. 다른 사용자의 user id를 body에 넣어 write API를 호출해도 권한 상승이 안 되는지 확인한다.
3. 뽑기와 동기화를 빠르게 여러 번 호출해 중복 보상이 없는지 확인한다.
4. 룸 멤버가 아닌 사용자로 room message 조회/작성 API를 호출해 거부되는지 확인한다.
5. 브라우저 devtools에서 secret이 보이지 않는지 확인한다.

## 참조

- `docs/QA_CHECKLIST.md`
- `docs/ARCHITECTURE.md` 10장
- `docs/API_CONTRACTS.md`

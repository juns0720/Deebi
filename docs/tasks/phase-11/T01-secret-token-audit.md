# P11-T01 — secret과 token 노출 감사

## 목표

클라이언트 번들, API 응답, 로그에 secret과 GitHub access token이 노출되지 않는지 점검한다.

## 변경 범위

- **해도 됨:** secret import 수정, response filtering, logging cleanup, 테스트
- **하면 안 됨:** 신규 기능 추가

## 작업

- `GITHUB_CLIENT_SECRET`, `SUPABASE_SERVICE_ROLE_KEY`, access token 사용처를 검색한다.
- 클라이언트 import 경계를 확인한다.
- API 응답에서 민감값을 제거한다.
- 오류 로그와 사용자 응답을 구분한다.

## 완료 조건

- [ ] secret이 client bundle에 들어가지 않는다.
- [ ] access token이 API 응답에 포함되지 않는다.
- [ ] 오류 응답에 token/SQL/stack trace가 없다.
- [ ] 수정 결과가 기록된다.

## 개발자 테스트

1. 전체 코드에서 secret 이름을 검색한다.
2. 브라우저 devtools/network 응답에 token이 없는지 확인한다.

## 참조

- `docs/QA_CHECKLIST.md` 보안 QA
- `docs/ARCHITECTURE.md`


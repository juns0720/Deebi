# P03-T05 — RLS, 인덱스, SQL 검증

## 목표

Phase 03 DB 구조에 최소 RLS, 인덱스, 검증 절차를 더해 이후 API 구현이 안전하게 시작되도록 한다.

## 변경 범위

- **해도 됨:** RLS enable/policy, index 보강, SQL 문서 주석, `docs/PROGRESS.md`
- **하면 안 됨:** API 권한 로직 구현, production DB 직접 변경

## 작업

- 핵심 테이블 RLS를 활성화한다.
- `user_oauth_tokens.access_token` 노출을 막는 정책 방향을 반영한다.
- inventory/equipped/rooms/messages 접근 정책 초안을 작성한다.
- 필요한 index를 보강한다.
- SQL 적용 테스트 결과를 기록한다.

## 완료 조건

- [ ] 핵심 테이블에 RLS가 활성화되어 있다.
- [ ] 일반 조회로 `user_oauth_tokens.access_token`이 노출되지 않는 구조다.
- [ ] 룸 메시지는 같은 룸 멤버만 조회/작성 가능한 정책을 적용할 수 있다.
- [ ] DB QA 항목을 점검했다.
- [ ] Phase 03 완료 notes가 `docs/PROGRESS.md`에 기록되어 있다.

## 개발자 테스트

1. migration과 seed를 Supabase에 적용한다.
2. 9개 핵심 테이블이 생성됐는지 확인한다.
3. RLS 활성화 여부와 `user_oauth_tokens.access_token` 노출 경로를 확인한다.

## 참조

- `docs/QA_CHECKLIST.md` DB QA
- `docs/DATA_MODEL.md`

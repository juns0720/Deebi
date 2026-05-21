# P12-T02 — production OAuth와 Supabase 절차

## 목표

production GitHub OAuth callback과 Supabase migration/seed 적용 절차를 확정한다.

## 변경 범위

- **해도 됨:** setup/deployment docs, callback URL 안내, Supabase 적용 체크리스트
- **하면 안 됨:** production secret 커밋, DB 구조 변경

## 작업

- production callback URL 형식을 문서화한다.
- GitHub OAuth app 설정 절차를 정리한다.
- Supabase production migration 적용 순서를 정리한다.
- seed 적용과 RLS 확인 절차를 정리한다.

## 완료 조건

- [ ] GitHub OAuth production callback 안내가 있다.
- [ ] Supabase migration 적용 절차가 있다.
- [ ] seed 적용 절차가 있다.
- [ ] RLS 확인 절차가 있다.

## 개발자 테스트

1. 문서의 callback URL을 GitHub OAuth app에 등록한다.
2. Supabase production에 migration/seed 적용 순서를 확인한다.

## 참조

- `SETUP_GUIDE.md`
- `docs/DATA_MODEL.md`


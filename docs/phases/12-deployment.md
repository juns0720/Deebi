# Phase 12 — 배포 준비

## 목표

Deebi MVP를 Vercel에 배포할 수 있게 환경 변수, OAuth callback, Supabase production 적용 절차, 최종 검증을 정리한다.

## Task 목록

Phase 12는 배포 문서, production 설정, 최종 검증, 인수인계를 나누어 진행한다.

| Task | 이름 | 파일 | 상태 |
|---|---|---|---|
| T01 | 배포 문서와 환경 변수 매트릭스 | `docs/tasks/phase-12/T01-deployment-docs-env.md` | NOT STARTED |
| T02 | production OAuth와 Supabase 절차 | `docs/tasks/phase-12/T02-production-oauth-supabase.md` | NOT STARTED |
| T03 | 최종 build와 배포 전 수정 | `docs/tasks/phase-12/T03-final-build-fixes.md` | NOT STARTED |
| T04 | MVP 범위와 보안 최종 QA | `docs/tasks/phase-12/T04-release-scope-security-qa.md` | NOT STARTED |
| T05 | 릴리즈 인수인계와 PROGRESS 종료 | `docs/tasks/phase-12/T05-release-handoff.md` | NOT STARTED |

## 변경 범위

- **해도 됨:** 배포 문서, env 체크, Vercel 설정 문서, production callback 안내, 최종 build 수정
- **하면 안 됨:** 새로운 기능 추가, 광고 실제 연동, 결제/상점 추가

## 작업

- Vercel 배포 절차를 문서화한다.
- production env 변수 목록을 점검한다.
- GitHub OAuth production callback URL 안내를 추가한다.
- Supabase migration 적용 절차를 정리한다.
- 최종 `npm run build`를 실행한다.
- MVP 제외 기능이 들어가지 않았는지 확인한다.

## 완료 조건

- [ ] 배포 절차가 `SETUP_GUIDE.md` 또는 별도 문서에 있다.
- [ ] production 환경 변수 이름이 `.env.example`과 일치한다.
- [ ] GitHub OAuth callback URL 안내가 있다.
- [ ] Supabase migration 적용 절차가 있다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.
- [ ] `docs/PROGRESS.md`에 최종 개발자 테스트가 적혀 있다.

## 개발자 테스트

1. Vercel 프로젝트를 만든다.
2. 환경 변수를 등록한다.
3. Supabase production 프로젝트에 migration과 seed를 적용한다.
4. GitHub OAuth app에 production callback URL을 추가한다.
5. 배포 후 GitHub 로그인, 대시보드, 뽑기, 룸 흐름을 확인한다.

## 참조

- `SETUP_GUIDE.md`
- `docs/ARCHITECTURE.md`
- `docs/QA_CHECKLIST.md`

# P03-T02 — users, token, commit_stats 테이블

## 목표

사용자 계정, OAuth token private table, 커밋 집계, 건강도/포인트 계산의 저장 기반을 만든다.

## 변경 범위

- **해도 됨:** `users`, `user_oauth_tokens`, `commit_stats` SQL, 관련 index/constraint, DB 타입 초안
- **하면 안 됨:** GitHub API 호출, 실제 동기화 로직

## 작업

- `users` 테이블을 정의한다.
- `user_oauth_tokens` private table을 정의한다.
- `commit_stats` 테이블을 정의한다.
- github id/login unique 기준을 둔다.
- health 0~100, points >= 0 제약을 둔다.
- 날짜별 중복 지급 방지를 위한 unique/index를 둔다.

## 완료 조건

- [ ] `users`에 GitHub 식별자, login, avatar, health, points, last_synced_at이 있다.
- [ ] `user_oauth_tokens`에 GitHub access token과 scope가 서버 전용으로 저장된다.
- [ ] `commit_stats`에 날짜별 commit_count와 rewarded_commit_count가 있다.
- [ ] 중복 날짜 row를 막는 unique 제약이 있다.
- [ ] health와 points 제약이 있다.
- [ ] token 보호 원칙이 `user_oauth_tokens` table, 주석, RLS 계획으로 드러난다.

## 개발자 테스트

1. migration에서 `users`, `user_oauth_tokens`, `commit_stats` 정의를 확인한다.
2. 같은 user/date 조합 중복 insert가 막히는 구조인지 확인한다.
3. health, points check constraint를 확인한다.

## 참조

- `docs/DATA_MODEL.md` 3.1~3.2
- `docs/SPEC.md` 8.4

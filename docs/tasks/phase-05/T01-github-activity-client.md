# P05-T01 — GitHub activity client와 조회 방식 결정

## 목표

MVP에서 확정된 GitHub public PushEvent 조회 방식을 기준으로 서버 전용 activity client를 만든다.

## 변경 범위

- **해도 됨:** GitHub API client, activity 타입, 결정 로그
- **하면 안 됨:** 포인트 지급 DB write, dashboard UI 완성

## 작업

- MVP 조회 방식은 REST public events + `PushEvent` 집계로 구현한다.
- OAuth scope는 `read:user`만 사용한다.
- GitHub public events API의 기간/가시성 제한과 rate limit 고려를 기록한다.
- 저장된 access token으로 서버에서 활동을 조회하는 client를 만든다.
- 실패 응답을 안전하게 정규화한다.

## 완료 조건

- [ ] 조회 방식 결정이 `docs/DECISIONS.md`에 있다.
- [ ] REST public events에서 `PushEvent`만 집계한다.
- [ ] `repo` scope를 요청하지 않는다.
- [ ] access token은 서버에서만 사용된다.
- [ ] GitHub API 오류가 앱 내부 오류 형식으로 변환된다.
- [ ] 테스트 또는 mock 가능한 client 구조다.

## 개발자 테스트

1. 로그인 사용자 token으로 GitHub 조회가 되는지 확인한다.
2. 잘못된 token에서 안전한 오류가 나오는지 확인한다.

## 참조

- `docs/phases/05-commit-sync.md`
- `docs/API_CONTRACTS.md` sync

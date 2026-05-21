# P12-T01 — 배포 문서와 환경 변수 매트릭스

## 목표

Vercel 배포에 필요한 절차와 production 환경 변수 목록을 문서화한다.

## 변경 범위

- **해도 됨:** `SETUP_GUIDE.md`, 배포 문서, env matrix, README 배포 notes
- **하면 안 됨:** 새로운 기능 추가, 실제 secret 기록

## 작업

- Vercel 프로젝트 생성 절차를 정리한다.
- production env 변수 목록을 `.env.example`과 맞춘다.
- preview/production URL 차이를 기록한다.
- secret 값을 문서에 쓰지 않도록 주의 문구를 둔다.

## 완료 조건

- [ ] 배포 절차가 문서에 있다.
- [ ] env 이름이 `.env.example`과 일치한다.
- [ ] secret 값 자체는 문서에 없다.
- [ ] production/preview 차이가 설명되어 있다.

## 개발자 테스트

1. 문서만 보고 Vercel env를 채울 수 있는지 확인한다.
2. `.env.example`과 env matrix 이름을 비교한다.

## 참조

- `SETUP_GUIDE.md`
- `.env.example`


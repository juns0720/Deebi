# P01-T02 — 제품 브리프와 시작 문서 정리

## 목표

서비스명을 Deebi로 통일하고, 원본 기획 정보가 손실되지 않도록 시작 문서를 정리한다. 이 task가 끝나면 개발자와 에이전트가 같은 제품 설명을 기준으로 움직일 수 있다.

## 변경 범위

- **해도 됨:** `deebi.md`, `README.md`, `FIRST_PROMPT.md`, `SETUP_GUIDE.md`, 제품명/소개 copy
- **하면 안 됨:** 원본 기획 삭제, MVP 범위 밖 기능 구현, UI 최종 디자인 확정

## 작업

- 서비스명을 `Deebi`로 통일한다.
- 원본 기획을 `deebi.md`에 보존한다.
- README에 제품 요약, 실행 방법, 개발 흐름을 정리한다.
- 에이전트에게 바로 전달할 수 있는 시작 프롬프트를 준비한다.
- 외부 서비스 준비 절차를 SETUP 문서에 정리한다.

## 완료 조건

- [ ] README가 Deebi 제품 목적과 실행 방법을 설명한다.
- [ ] `deebi.md`에 원본 기획 정보가 남아 있다.
- [ ] `FIRST_PROMPT.md`가 task 단위 명령 예시를 포함한다.
- [ ] `SETUP_GUIDE.md`가 GitHub OAuth, Supabase, env 준비를 안내한다.

## 개발자 테스트

1. README만 읽고 Deebi가 무엇인지 설명 가능한지 확인한다.
2. `FIRST_PROMPT.md`의 "현재 task 진행" 문구를 그대로 에이전트에게 줄 수 있는지 확인한다.
3. `SETUP_GUIDE.md`의 env 이름이 `.env.example`과 맞는지 확인한다.

## 참조

- `deebi.md`
- `README.md`
- `FIRST_PROMPT.md`
- `SETUP_GUIDE.md`


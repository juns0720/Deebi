# P01-T05 — Phase/Task 자동 개발 운영 구조

## 목표

큰 단락인 Phase와 실제 개발 단위인 Task를 분리한다. 이 task가 끝나면 개발자는 `P02-T01`처럼 작은 단위로 명령하고, 에이전트는 한 번에 task 하나만 수행한다.

## 변경 범위

- **해도 됨:** `docs/AGENT_GUIDE.md`, `docs/AUTOMATION.md`, `docs/CONVENTIONS.md`, `docs/PROGRESS.md`, `docs/phases/**`, `docs/tasks/**`, `README.md`, `FIRST_PROMPT.md`
- **하면 안 됨:** phase를 건너뛰는 운영 규칙, 한 번에 여러 task를 자동 진행하는 규칙

## 작업

- 에이전트 작업 규칙을 Current Phase + Current Task 기준으로 바꾼다.
- task 템플릿과 phase별 task 디렉터리를 만든다.
- Phase 01, Phase 02의 task 목록과 task 파일을 만든다.
- `PROGRESS.md`에 phase별 task 진행 상태가 보이게 한다.
- README와 프롬프트 예시를 task 단위로 갱신한다.

## 완료 조건

- [ ] `docs/tasks/_TASK_TEMPLATE.md`가 있다.
- [ ] `docs/tasks/phase-01/**`와 `docs/tasks/phase-02/**`가 있다.
- [ ] `docs/PROGRESS.md`에 Current Task와 Phase Task Status가 있다.
- [ ] `docs/AGENT_GUIDE.md`가 한 번에 task 하나만 수행하도록 지시한다.
- [ ] README와 FIRST_PROMPT가 task 단위 명령을 안내한다.

## 개발자 테스트

1. `docs/PROGRESS.md`에서 Current Task를 확인한다.
2. Current Task의 파일이 실제로 존재하는지 확인한다.
3. `docs/tasks/phase-02/T01-design-tokens.md`를 열어 다음 개발 단위가 명확한지 확인한다.

## 참조

- `docs/AGENT_GUIDE.md`
- `docs/AUTOMATION.md`
- `docs/PROGRESS.md`
- `docs/tasks/_TASK_TEMPLATE.md`


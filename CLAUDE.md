# CLAUDE.md

이 파일은 Claude Code의 진입점이다. 실제 작업 규칙과 내용은 공용 문서에 있다.

**시작하기 전에 반드시 아래를 순서대로 읽어라:**

1. `docs/AGENT_GUIDE.md` — 모든 에이전트가 따르는 작업 규칙 (가장 중요)
2. `docs/PROGRESS.md` — 현재 진행 상태. 지금 어떤 phase/task인지 여기서 확인한다
3. `docs/SPEC.md` — 무엇을 만드는지
4. `docs/ARCHITECTURE.md` — 어떻게 구성하는지

> Codex와 Claude Code가 동일한 공용 문서를 참조한다. 이 파일과 `AGENTS.md`는
> 진입점일 뿐이며, 내용을 여기에 복제하지 말 것. 규칙이 바뀌면 `docs/` 안의
> 문서만 수정한다.

## 절대 규칙 (요약 — 전문은 AGENT_GUIDE.md)

- 작업 전 `docs/PROGRESS.md`를 읽고 현재 phase와 task를 확인한다.
- 현재 phase에 해당하는 `docs/phases/NN-*.md` 한 개와 현재 task에 해당하는 `docs/tasks/phase-NN/TNN-*.md` 한 개만 수행한다.
- task를 건너뛰거나 미리 진행하지 않는다.
- task 완료 후 `docs/PROGRESS.md`를 갱신하고 **멈춘다**. 개발자의 테스트·승인을 기다린다.
- 설계상의 결정을 내렸으면 `docs/DECISIONS.md`에 기록한다.
- `docs/SPEC.md`의 "제외 항목"에 있는 기능은 구현하지 않는다.

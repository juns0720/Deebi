# AGENT_GUIDE.md — 에이전트 작업 규칙

> 이 문서는 Claude Code, Codex 등 **모든 코딩 에이전트**가 따르는 단일 규칙서다.
> 에이전트는 어떤 작업이든 시작하기 전에 이 문서를 읽는다.

## 0. 이 프로젝트의 운영 방식

이 레포는 **에이전트 주도 개발(agent-driven development)** 구조다.
- 개발자는 phase와 task를 진행시키고(`PROGRESS.md`), 결과를 테스트하고, 승인한다.
- 에이전트는 현재 task의 설계·구현·문서 갱신을 담당한다.
- 두 역할의 접점은 오직 `docs/PROGRESS.md` 하나다.

운영 단위:

- **Phase**는 큰 단락이다. 예: UI/UX 정적 프로토타입, DB 스키마, 인증과 세션.
- **Task**는 실제 개발 단위다. 예: T01 디자인 토큰, T02 랜딩, T03 내 방 스테이지.
- 에이전트는 기본적으로 **Current Task 하나만** 수행한다.
- phase는 그 안의 모든 task가 `DONE`이 되었을 때만 완료된다.

## 1. 황금 루프 (모든 작업은 이 순서를 따른다)

1. **READ** — `docs/PROGRESS.md`를 읽고 `Current Phase`와 `Current Task`를 확인한다.
2. **LOAD** — 해당하는 `docs/phases/NN-*.md` 한 개와 `docs/tasks/phase-NN/TNN-*.md` 한 개를 읽는다. 필요 시
   `SPEC.md`, `ARCHITECTURE.md`, `CONVENTIONS.md`를 참조한다.
3. **PLAN** — 그 task의 "완료 조건"을 만족시킬 작업 계획을 세운다.
   `PROGRESS.md`의 `Working Notes`에 한두 줄로 계획을 적는다.
4. **BUILD** — 계획을 구현한다. 현재 task의 "변경 범위"를 벗어나지 않는다.
5. **SELF-CHECK** — task 문서의 "완료 조건"을 항목별로 스스로 점검한다.
6. **UPDATE** — `docs/PROGRESS.md`를 갱신한다 (3장 형식).
7. **STOP** — 멈추고 개발자에게 보고한다. 다음 task나 다음 phase로 **자동 진행하지 않는다.**

## 2. 절대 규칙

- **task를 건너뛰지 않는다.** `PROGRESS.md`의 `Current Task`만 수행한다.
- **한 번에 한 task.** 여러 task나 여러 phase를 묶어서 처리하지 않는다.
- **STOP은 강제다.** task가 끝나면 반드시 멈춘다. 개발자의 "다음 진행" 지시
  없이 다음 task를 시작하면 안 된다.
- **스코프 보호.** `SPEC.md`의 "의도적으로 제외한 것"은 구현하지 않는다.
  필요해 보여도 코드를 쓰지 말고 제안만 한다.
- **결정 기록.** 단계 문서에 명시되지 않은 설계 결정을 내렸다면
  `docs/DECISIONS.md`에 한 줄로 남긴다.
- **문서 우선.** 코드와 문서가 충돌하면 멈추고 개발자에게 알린다.
  임의로 한쪽을 따르지 않는다.
- **막히면 멈춘다.** 완료 조건을 만족시킬 수 없으면 `PROGRESS.md`의
  `Blockers`에 적고 멈춘다. 추측으로 우회하지 않는다.

## 3. PROGRESS.md 갱신 형식

task 완료 후 `docs/PROGRESS.md`를 아래 상태로 만든다:

- `Current Phase` — 현재 phase를 유지한다. phase의 모든 task가 끝나기 전까지 phase를 넘기지 않는다.
- `Current Task` — 방금 끝낸 task는 그대로 두되 `Status`를 `AWAITING REVIEW`로.
  (개발자가 승인하면 다음 task로 바꾸는 것은 개발자 또는 다음 세션의 몫)
- `Phase Task Status` — 해당 task를 체크 표시하거나 상태를 갱신한다.
- `Phase Status` — phase 전체가 끝났을 때만 phase 체크 표시를 바꾼다.
- `Working Notes` — 이번 task에서 한 일, 만든 파일, 주의사항을 간단히.
- `Blockers` — 막힌 것이 있으면 기록, 없으면 `none`.
- `Developer Test` — 개발자가 직접 해볼 테스트를 task 문서에서 복사해 둔다.

## 4. 멀티 에이전트 협업 (Codex ↔ Claude Code)

- 두 에이전트는 **같은 공용 문서**(`docs/`)를 참조한다. 에이전트 전용 지식을
  진입점 파일(`CLAUDE.md`/`AGENTS.md`)에 쌓지 않는다.
- 한 task는 한 에이전트가 끝까지 수행한다. task 중간에 에이전트를 바꾸지 않는다.
- 세션을 시작하는 에이전트는 `PROGRESS.md`를 신뢰한다. 그것이 유일한 상태원이다.
- 에이전트 간 인수인계가 필요하면 `Working Notes`에 충분히 적어 둔다.

## 5. 커밋 규칙

- 한 task = 의미 있는 커밋 단위. task 도중 작은 커밋은 허용.
- 커밋 메시지: `feat(P02-T03): build my room stage` 처럼 phase와 task 번호를 포함.
- 자세한 컨벤션은 `docs/CONVENTIONS.md`.

## 6. 개발자를 위한 사용법 (참고)

개발자는 보통 이렇게만 한다:
1. `docs/PROGRESS.md`를 열어 `Current Phase`, `Current Task`, `Developer Test`를 본다.
2. 에이전트에게 "현재 task 진행해"라고 말한다.
3. 에이전트가 멈추면 `Developer Test` 항목을 직접 테스트한다.
4. 통과하면 `PROGRESS.md`의 `Current Task`를 다음 task로 바꾸고
   "다음 task 진행해"라고 말한다. phase의 모든 task가 끝났을 때만 다음 phase로 넘긴다.

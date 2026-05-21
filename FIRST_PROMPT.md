# FIRST_PROMPT.md — 에이전트에게 줄 지시문

> Codex / Claude Code에 그대로 복사해 붙여넣을 수 있는 지시문 모음.

## 매 단계 시작 시 (가장 많이 쓰는 것)

```
docs/AGENT_GUIDE.md를 읽고, docs/PROGRESS.md의 Current Phase를 진행해.
규칙대로 한 단계만 수행하고, 끝나면 PROGRESS.md를 갱신한 뒤 멈춰.
다음 단계로 자동 진행하지 마.
```

## 아주 처음 (Phase 01) 시작 시

```
이 레포는 에이전트 주도 개발 구조야. 먼저 docs/AGENT_GUIDE.md를 읽고
작업 규칙을 파악해. 그 다음 docs/PROGRESS.md에서 Current Phase를 확인하고,
해당 docs/phases/NN-*.md 한 개만 수행해.

- 단계의 "변경 범위"를 벗어나지 마.
- "완료 조건"을 항목별로 스스로 점검해.
- 끝나면 PROGRESS.md를 갱신하고 멈춰. 내가 테스트하고 다음 단계를 지시할 거야.
```

## 단계 통과 후 다음으로 넘길 때

```
방금 단계 테스트 통과했어. PROGRESS.md의 Current Phase를 다음 단계로 바꾸고,
그 단계를 진행해. 똑같이 한 단계만 하고 멈춰.
```

## 에이전트가 멈추지 않고 폭주할 때

```
멈춰. AGENT_GUIDE.md의 STOP 규칙을 어겼어. 현재 단계 범위 밖의 작업은
되돌리고, PROGRESS.md의 Current Phase에 해당하는 단계까지만 남겨.
```

## 에이전트를 바꿔 이어받을 때 (Codex ↔ Claude Code)

```
다른 에이전트가 작업하던 프로젝트야. docs/AGENT_GUIDE.md와 docs/PROGRESS.md를
읽어. PROGRESS.md의 Working Notes에 이전 진행 상황이 있어. 거기 이어서,
Current Phase가 끝나지 않았으면 마저 끝내고, 끝났으면 멈춘 상태를 유지해.
```

## 막혔을 때 상황 파악용

```
docs/PROGRESS.md의 Blockers와 Working Notes를 보고, 지금 무엇이 막혀 있는지,
완료 조건 중 무엇이 미충족인지 정리해서 알려줘. 코드는 아직 고치지 마.
```

# FIRST_PROMPT.md — Deebi 에이전트 지시문

Codex 또는 Claude Code에 그대로 전달할 수 있는 지시문 모음이다.

---

## 현재 단계 진행

```text
docs/AGENT_GUIDE.md를 읽고, docs/PROGRESS.md의 Current Phase를 진행해.
규칙대로 Current Phase에 해당하는 docs/phases/NN-*.md 한 개만 수행하고,
끝나면 PROGRESS.md를 갱신한 뒤 멈춰.
다음 단계로 자동 진행하지 마.
```

## 테스트 통과 후 다음 단계 진행

```text
방금 단계 테스트 통과했어. docs/PROGRESS.md의 Current Phase를 다음 단계로 바꾸고,
그 단계를 진행해. 똑같이 한 단계만 하고, 끝나면 AWAITING REVIEW로 멈춰.
```

## 테스트 실패 수정

```text
Phase NN 테스트 중 아래 문제가 있었어.

여기에 실패 증상과 기대 결과를 구체적으로 적는다.

docs/AGENT_GUIDE.md를 지키면서 Current Phase 범위 안에서만 수정해.
수정 후 완료 조건과 Developer Test를 다시 맞추고 PROGRESS.md를 갱신해.
```

## 상태 확인만

```text
docs/PROGRESS.md를 읽고 현재 상태를 요약해줘.
무엇이 완료됐고, 개발자가 어떤 테스트를 해야 하는지 알려줘.
코드와 문서는 아직 고치지 마.
```

## UI/UX 질의응답 시작

```text
docs/UI_UX.md와 docs/UI_UX_QUESTIONS.md를 읽고,
아직 확정되지 않은 UI/UX 질문을 나에게 하나씩 물어봐.
내 답변이 확정되면 docs/DECISIONS.md와 docs/UI_UX.md에 반영해.
구현은 아직 하지 마.
```

## 다른 에이전트가 이어받을 때

```text
다른 에이전트가 작업하던 Deebi 프로젝트야.
docs/AGENT_GUIDE.md와 docs/PROGRESS.md를 먼저 읽어.
Working Notes와 Current Phase를 기준으로 이어받고,
Current Phase가 끝나지 않았으면 마저 끝내고, 끝났으면 멈춘 상태를 유지해.
```

## 막혔을 때 원인 파악

```text
docs/PROGRESS.md의 Blockers와 Working Notes를 보고,
지금 무엇이 막혀 있는지, 완료 조건 중 무엇이 미충족인지 정리해줘.
코드는 아직 고치지 마.
```

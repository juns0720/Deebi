# PROGRESS.md — 진행 상태 (단일 상태원)

> 이 파일은 개발자와 에이전트의 **유일한 접점**이다.
> 에이전트는 작업 전 이 파일을 읽고, 작업 후 이 파일을 갱신한다.
> 개발자는 이 파일만 보고 단계를 진행·테스트·승인한다.
> 형식 규칙은 `docs/AGENT_GUIDE.md` 3장 참조.

---

## Current Phase

- **Phase:** 01 — <첫 단계 이름>
- **File:** `docs/phases/01-<이름>.md`
- **Status:** NOT STARTED
  - 가능한 값: `NOT STARTED` / `IN PROGRESS` / `AWAITING REVIEW` / `DONE`

## Completed

<phase 목록을 채운다. 예:>
- [ ] Phase 01 — <...>
- [ ] Phase 02 — <...>

## Working Notes

_(에이전트가 이번 단계에서 한 일, 만든 파일, 다음 세션이 알아야 할 것을 적는다)_

아직 시작 전.

## Blockers

none

## Developer Test

_(에이전트가 현재 단계 phase 문서의 "개발자 테스트"를 여기로 복사한다)_

Phase 01 시작 전 — 아직 없음.

---

## 단계 진행 방법 (개발자용)

1. 에이전트에게 "현재 단계 진행해"라고 말한다.
2. 에이전트가 `Status: AWAITING REVIEW`로 바꾸고 멈추면, 위 `Developer Test`를 직접 해본다.
3. **통과** → `Current Phase`를 다음 번호/파일로 바꾸고 `Status`를 `NOT STARTED`로,
   `Completed`에서 해당 단계 체크 → "다음 단계 진행해".
4. **실패** → 무엇이 어떻게 틀렸는지 에이전트에게 알려준다. `Status`는 `IN PROGRESS`로.

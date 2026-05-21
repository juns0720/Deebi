# AUTOMATION.md — AI 자동 개발 운영 문서

이 문서는 개발자가 명령만 해도 에이전트가 다음 작업을 이어갈 수 있게 하는 운영 규칙이다. 실제 phase/task 상태는 항상 `docs/PROGRESS.md`가 단일 상태원이다.

---

## 1. 개발자 명령 패턴

### 1.1 현재 task 진행

```text
docs/AGENT_GUIDE.md를 읽고, docs/PROGRESS.md의 Current Task를 진행해.
규칙대로 task 하나만 수행하고, 끝나면 PROGRESS.md를 갱신한 뒤 멈춰.
다음 task로 자동 진행하지 마.
```

### 1.2 테스트 통과 후 다음 task 진행

```text
방금 task 테스트 통과했어. PROGRESS.md의 Current Task를 다음 task로 바꾸고,
그 task를 진행해. 똑같이 task 하나만 하고 멈춰.
```

### 1.3 phase 완료 후 다음 phase 진행

```text
Phase NN의 모든 task 테스트 통과했어. PROGRESS.md의 Current Phase를 다음 phase로 바꾸고,
Current Task를 다음 phase의 T01로 설정한 뒤 그 task 하나만 진행해.
```

### 1.4 실패 수정

```text
Phase NN / TNN 테스트 중 아래 문제가 있었어.
여기에 실패 증상과 기대 결과를 구체적으로 적는다.
Current Task 범위 안에서 고치고, 완료 조건을 다시 검증해.
```

### 1.5 상태만 확인

```text
PROGRESS.md를 읽고 지금 어느 phase/task가 완료됐고 무엇을 테스트해야 하는지 알려줘.
코드는 고치지 마.
```

## 2. 에이전트 실행 순서

1. `docs/AGENT_GUIDE.md`를 읽는다.
2. `docs/PROGRESS.md`에서 Current Phase와 Current Task를 확인한다.
3. Current Phase의 `docs/phases/NN-*.md` 하나와 Current Task의 `docs/tasks/phase-NN/TNN-*.md` 하나를 읽는다.
4. 참조 문서 목록을 확인한다.
5. 필요한 문서만 추가로 읽는다.
6. `PROGRESS.md` Working Notes에 계획을 짧게 적는다.
7. 구현한다.
8. task 완료 조건을 항목별로 검증한다.
9. `PROGRESS.md`를 업데이트한다.
10. 멈춘다.

## 3. 문서 참조 우선순위

| 상황 | 우선 문서 |
|---|---|
| 제품 기능 판단 | `docs/SPEC.md` |
| 기술 구조 판단 | `docs/ARCHITECTURE.md` |
| DB 구현 | `docs/DATA_MODEL.md` |
| API 구현 | `docs/API_CONTRACTS.md` |
| 화면/UX 구현 | `docs/UI_UX.md` |
| UI 미확정 질문 | `docs/UI_UX_QUESTIONS.md` |
| 코딩 스타일 | `docs/CONVENTIONS.md` |
| 검증 | `docs/QA_CHECKLIST.md` + task 완료 조건 |
| 외부 서비스 준비 | `SETUP_GUIDE.md` |

## 4. 결정 기록 규칙

아래에 해당하면 `docs/DECISIONS.md`에 기록한다.

- phase 문서에 없는 기술 선택을 했다.
- SPEC의 열린 항목을 확정했다.
- UI/UX 질문에 개발자가 답했다.
- 보안/비용/성능 tradeoff를 결정했다.
- 기존 문서와 다른 구현 방향을 택했다.

형식:

```md
- [YYYY-MM-DD][phase-NN] 결정 내용 — 이유 (결정 주체: codex / developer)
```

## 5. 멈춰야 하는 경우

에이전트는 아래 상황에서 추측으로 진행하지 않는다.

- `PROGRESS.md`의 Current Phase 또는 Current Task 파일이 없다.
- task 완료 조건이 모호해서 검증할 수 없다.
- SPEC과 ARCHITECTURE가 충돌한다.
- secret 또는 외부 계정 값이 필요하다.
- UI/UX 질문에 대한 답 없이는 되돌리기 어려운 디자인 결정을 해야 한다.
- MVP 제외 기능을 구현해야만 진행 가능한 것처럼 보인다.

## 6. 자동 검증 기본 세트

가능하면 각 task에서 아래를 실행한다.

```bash
npm run lint
npm run typecheck
npm run build
```

추가 검증은 task 문서의 완료 조건을 따른다.

## 7. 브라우저 확인 원칙

프론트엔드 화면이 바뀌는 task에서는 로컬 dev 서버를 띄우고 브라우저에서 확인한다.

확인 항목:

- 페이지가 흰 화면이 아닌지
- 핵심 텍스트가 보이는지
- 모바일 폭에서 겹침이 없는지
- 버튼이 의도한 상태인지
- console error가 없는지

## 8. task 종료 형식

종료 시 `PROGRESS.md`는 아래를 포함해야 한다.

- Current Task `Status: AWAITING REVIEW`
- Phase Task Status에서 해당 task 체크 또는 상태 갱신
- Working Notes에 변경 파일/검증/주의사항
- Blockers가 없으면 `none`
- Developer Test에 사람이 직접 할 테스트 절차

에이전트는 종료 후 다음 task를 자동으로 시작하지 않는다.

# 에이전트 주도 개발 — 스캐폴드 템플릿

새 프로젝트를 **에이전트 주도 개발**(코딩 에이전트가 단계별로 구현, 개발자는
진행 지시와 테스트만) 구조로 시작하기 위한 재사용 템플릿이다.

## 사용법 — 새 프로젝트 시작하기

1. 이 폴더 전체를 새 레포 루트에 복사한다.
2. **프로젝트 고유 내용을 채운다** (아래 "채워야 할 파일" 참조).
   `<...>` 플레이스홀더가 있는 파일들이다.
3. 채우고 나면 각 파일 상단의 "안내 줄"(> 로 시작하는 설명)을 지운다.
4. 첫 커밋 후, 에이전트에게 `FIRST_PROMPT.md`의 첫 지시문을 준다.

## 파일 구분

### 그대로 두는 파일 (구조 — 프로젝트 무관)

- `CLAUDE.md`, `AGENTS.md` — 에이전트 진입점
- `docs/AGENT_GUIDE.md` — 에이전트 작업 규칙 (황금 루프)
- `docs/CONVENTIONS.md` — 코딩·커밋 규칙
- `FIRST_PROMPT.md` — 에이전트에게 줄 지시문 모음
- `docs/phases/00-overview.md`의 "공통 형식" 부분

### 채워야 할 파일 (내용 — 프로젝트마다 새로)

- `docs/SPEC.md` — 무엇을 만드는가
- `docs/ARCHITECTURE.md` — 어떻게 구성하는가
- `docs/phases/00-overview.md` — 단계 목록·의존 관계
- `docs/phases/NN-*.md` — `_PHASE_TEMPLATE.md`를 복사해 단계마다 하나씩
- `docs/PROGRESS.md` — 첫 단계 이름·phase 목록만 초기화
- `SETUP_GUIDE.md` — 외부 서비스 준비 (없으면 삭제 가능)
- `docs/DECISIONS.md` — 비워서 시작 (작업하며 누적)

> 팁: SPEC과 phase 쪼개기가 막막하면, Claude에게 "이 아이디어로 SPEC.md와
> phase 분할을 잡아줘"라고 요청해 초안을 받은 뒤 다듬어도 된다.

## 개발자 워크플로우 (채운 뒤)

1. `docs/PROGRESS.md`에서 `Current Phase`를 확인한다.
2. 에이전트에게 "현재 단계 진행해"라고 말한다.
3. 에이전트가 멈추면 `PROGRESS.md`의 `Developer Test`를 직접 테스트한다.
4. 통과하면 `Current Phase`를 다음 단계로 바꾸고 "다음 단계 진행해".

자세한 규칙은 `docs/AGENT_GUIDE.md`.

## 관련 Claude 스킬 (선택)

Claude 앱에서는 아래 두 스킬이 같은 워크플로우를 자동화한다. 설치하면
"진행해" 같은 말에 맞춰 발동한다.

- `agentic-session-review` — 세션 시작 시 현재 상태를 리뷰
- `agentic-phase-runner` — 한 단계를 실행하고 멈춤

Claude Code / Codex에서는 스킬 대신 이 레포의 `AGENT_GUIDE.md`와
`FIRST_PROMPT.md`가 같은 역할을 한다.

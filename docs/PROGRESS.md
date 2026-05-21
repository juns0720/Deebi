# PROGRESS.md — 진행 상태 (단일 상태원)

> 이 파일은 개발자와 에이전트의 **유일한 접점**이다.
> 에이전트는 작업 전 이 파일을 읽고, 작업 후 이 파일을 갱신한다.
> 개발자는 이 파일만 보고 단계를 진행·테스트·승인한다.
> 형식 규칙은 `docs/AGENT_GUIDE.md` 3장 참조.

---

## Current Phase

- **Phase:** 01 — 프로젝트 셋업과 문서 기반
- **File:** `docs/phases/01-project-setup.md`
- **Status:** AWAITING REVIEW
  - 가능한 값: `NOT STARTED` / `IN PROGRESS` / `AWAITING REVIEW` / `DONE`

## Completed

- [x] Phase 01 — 프로젝트 셋업과 문서 기반
- [ ] Phase 02 — UI/UX 정적 프로토타입
- [ ] Phase 03 — DB 스키마
- [ ] Phase 04 — 인증과 세션
- [ ] Phase 05 — 커밋 동기화
- [ ] Phase 06 — 도트 캐릭터 렌더러
- [ ] Phase 07 — 대시보드와 인벤토리
- [ ] Phase 08 — 뽑기와 장착
- [ ] Phase 09 — 룸
- [ ] Phase 10 — UI/UX 폴리시
- [ ] Phase 11 — 보안과 QA
- [ ] Phase 12 — 배포 준비

## Working Notes

Phase 01에서 Deebi 프로젝트의 실행 기반과 자동 개발 문서 기반을 정리했다.

주요 변경:

- 서비스명을 `Deebi`로 통일했다.
- Next.js App Router + TypeScript + Tailwind 기본 앱을 구성했다.
- `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `.env.example`, `.gitignore`를 구성했다.
- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`로 첫 화면을 만들었다.
- `deebi.md`를 원본 기획 브리프로 정리했다.
- `README.md`, `FIRST_PROMPT.md`, `SETUP_GUIDE.md`를 Deebi 전용으로 갱신했다.
- `docs/SPEC.md`, `docs/ARCHITECTURE.md`, `docs/DATA_MODEL.md`, `docs/API_CONTRACTS.md`, `docs/UI_UX.md`, `docs/UI_UX_QUESTIONS.md`, `docs/AUTOMATION.md`, `docs/QA_CHECKLIST.md`를 작성했다.
- `docs/phases/00-overview.md`와 Phase 01~12 문서를 작성해 이후 자동 개발 단계를 고정했다.
- `docs/CONVENTIONS.md`, `docs/DECISIONS.md`를 보강했다.
- UI/UX 질의응답 결과를 반영해 개인 방/공동 룸 모델, 32x32 캐릭터, 방치 모드, 밝은 픽셀 방 톤, 랜딩 카피, 공동 룸 채팅 MVP 포함 결정을 문서에 반영했다.
- 전체 UI/UX를 픽셀 그래픽 감성으로 구현하고 기본 폰트를 PF스타더스트로 쓰는 방향을 확정했다.
- 전체 개발 흐름을 UI/UX 우선으로 재정렬했다. Phase 02에서 mock 기반 정적 프로토타입을 먼저 만들고, Phase 03부터 DB/API/기능을 연결한다.

검증:

- `npm run lint` 통과
- `npm run typecheck` 통과
- `npm run build` 통과
- 브라우저에서 `http://127.0.0.1:3000/` 확인: title `Deebi`, 이전 가칭 미노출, 첫 화면 렌더링 정상

주의:

- 현재 로컬 Node는 v21.7.3이라 설치 시 engine 경고가 난다. `SETUP_GUIDE.md`와 `package.json`에는 Node 20 LTS 또는 22 LTS 계열 권장을 명시했다.
- `npm audit` 기준 moderate 취약점 2건이 보고된다. `npm audit fix --force`는 breaking change 가능성이 있어 Phase 01에서는 자동 적용하지 않았다.
- GitHub OAuth scope, health decay 수치, 중복 아이템 환급량은 아직 열린 항목이다. 확정되면 `docs/SPEC.md`, `docs/DECISIONS.md`, 관련 phase 문서를 함께 업데이트해야 한다.
- PF스타더스트 폰트 파일과 웹 임베딩 라이선스는 구현 전 확인이 필요하다. 파일이 없으면 Phase 02에서 font token과 fallback을 먼저 준비한다.

## Blockers

none

## Developer Test

1. `npm install`을 실행한다.
2. `.env.example`을 참고해 `.env.local`을 만든다. 아직 실제 OAuth 구현 전이라 값은 비워 두어도 첫 화면 확인은 가능하다.
3. `npm run dev`를 실행한다.
4. 브라우저에서 `http://localhost:3000`을 열어 Deebi 첫 화면이 보이는지 확인한다.
5. 다음 단계가 UI/UX 정적 프로토타입(Phase 02)으로 재정렬되어 있는지 `docs/phases/00-overview.md`에서 확인한다.
6. `npm run build`가 통과하는지 확인한다.

---

## 단계 진행 방법 (개발자용)

1. 에이전트에게 "현재 단계 진행해"라고 말한다.
2. 에이전트가 `Status: AWAITING REVIEW`로 바꾸고 멈추면, 위 `Developer Test`를 직접 해본다.
3. **통과** → `Current Phase`를 다음 번호/파일로 바꾸고 `Status`를 `NOT STARTED`로,
   `Completed`에서 해당 단계 체크 → "다음 단계 진행해".
4. **실패** → 무엇이 어떻게 틀렸는지 에이전트에게 알려준다. `Status`는 `IN PROGRESS`로.

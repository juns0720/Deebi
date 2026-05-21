# CONVENTIONS.md — 코딩·커밋 컨벤션

> 에이전트와 개발자가 공유하는 규칙. 모호하면 이 문서를 따른다.

## 코드

- 언어: TypeScript. `any` 회피, 불가피하면 주석으로 이유 표기.
- 컴포넌트: 함수형 React. 파일명 `PascalCase.tsx`.
- 유틸/라이브러리: `camelCase.ts`.
- 서버 전용 코드(시크릿 사용)는 `src/app/api/**` 또는 `src/lib/**`의
  서버 모듈에만 둔다. 클라이언트 컴포넌트에서 import 금지.
- 환경 변수는 `process.env`로만 접근. 클라이언트 노출이 필요한 값만
  `NEXT_PUBLIC_` 접두사.
- API 응답은 `docs/API_CONTRACTS.md`의 `{ ok, data, error }` 형태를 따른다.
- DB 테이블과 타입은 `docs/DATA_MODEL.md`를 기준으로 한다.
- 도메인 순수 로직은 가능하면 `src/lib/domain/**`에 둔다.

## 폴더

- 구조는 `ARCHITECTURE.md` 2장을 따른다.
- 새 폴더가 필요하면 `DECISIONS.md`에 한 줄 기록.

## 커밋

- 형식: `type(PNN-TNN): 요약`
  - 예: `feat(P04-T02): GitHub OAuth 콜백 라우트 추가`
  - type: `feat` / `fix` / `chore` / `docs` / `refactor`
- 한 task = 최소 한 개의 의미 있는 커밋. task 도중 작은 커밋 허용.
- `docs/PROGRESS.md` 갱신은 해당 task 커밋에 포함하거나 별도 `docs:` 커밋.

## 문서

- 한국어로 작성.
- 규칙·스펙 변경은 `docs/` 안의 해당 문서에서. 진입점(`CLAUDE.md`/`AGENTS.md`)에
  내용을 복제하지 않는다.
- 설계 결정은 `DECISIONS.md`에 누적(덮어쓰지 않고 추가).
- phase를 추가하거나 쪼개면 `docs/phases/00-overview.md`와 `docs/PROGRESS.md`를 함께 맞춘다.
- task를 추가하거나 쪼개면 `docs/tasks/phase-NN/`와 `docs/PROGRESS.md`의 Phase Task Status를 함께 맞춘다.
- UI/UX 미확정 항목은 `docs/UI_UX_QUESTIONS.md`에 남기고, 확정 후 `docs/UI_UX.md`와 `docs/DECISIONS.md`를 갱신한다.

## 비밀정보

- `.env.local`은 커밋 금지. `.env.example`만 커밋(값은 비움).
- 시크릿·토큰을 코드·로그·문서에 하드코딩 금지.

## 테스트

- 각 task 문서의 "완료 조건"이 실제 작업 단위의 테스트 명세다.
- phase 문서의 "완료 조건"은 해당 phase 전체가 끝났을 때의 상위 체크리스트다.
- 자동화 테스트는 MVP 필수는 아니나, 건강도·포인트 계산(`src/lib/health.ts`)
  같은 순수 로직은 단위 테스트를 권장.
- 단위 테스트 도구를 도입할 때는 `vitest`를 기본 후보로 사용한다.
- 테스트 도구를 추가하는 task는 `package.json` script와 이 문서를 함께 갱신한다.
- 기본 검증은 `npm run lint`, `npm run typecheck`, `npm run build`다.
- 화면이 바뀌는 task는 브라우저에서 모바일/데스크톱 주요 화면을 확인한다.

## UI

- UI 구현은 `docs/UI_UX.md`를 따른다.
- Deebi의 주요 UI는 전체적으로 픽셀 그래픽 감성을 유지한다.
- 기본 폰트는 PF스타더스트를 사용한다. 폰트 파일이 없으면 토큰과 fallback을 준비하고 Working Notes에 기록한다.
- 카드 안에 카드를 중첩하지 않는다.
- 버튼, 카드, 배지는 텍스트가 넘치지 않게 고정된 여백과 반응형 줄바꿈을 고려한다.
- 건강도처럼 중요한 상태는 색상만으로 표현하지 않고 숫자와 라벨을 함께 제공한다.
- MVP에서 실제 광고 SDK를 넣지 않고 placeholder만 둔다.

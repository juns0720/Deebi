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

## 폴더

- 구조는 `ARCHITECTURE.md` 2장을 따른다.
- 새 폴더가 필요하면 `DECISIONS.md`에 한 줄 기록.

## 커밋

- 형식: `type(phase-NN): 요약`
  - 예: `feat(phase-03): GitHub OAuth 콜백 라우트 추가`
  - type: `feat` / `fix` / `chore` / `docs` / `refactor`
- 한 단계 = 최소 한 개의 의미 있는 커밋. 단계 도중 작은 커밋 허용.
- `docs/PROGRESS.md` 갱신은 해당 단계 커밋에 포함하거나 별도 `docs:` 커밋.

## 문서

- 한국어로 작성.
- 규칙·스펙 변경은 `docs/` 안의 해당 문서에서. 진입점(`CLAUDE.md`/`AGENTS.md`)에
  내용을 복제하지 않는다.
- 설계 결정은 `DECISIONS.md`에 누적(덮어쓰지 않고 추가).

## 비밀정보

- `.env.local`은 커밋 금지. `.env.example`만 커밋(값은 비움).
- 시크릿·토큰을 코드·로그·문서에 하드코딩 금지.

## 테스트

- 각 phase 문서의 "완료 조건"이 사실상의 테스트 명세다.
- 자동화 테스트는 MVP 필수는 아니나, 건강도·포인트 계산(`src/lib/health.ts`)
  같은 순수 로직은 단위 테스트를 권장.

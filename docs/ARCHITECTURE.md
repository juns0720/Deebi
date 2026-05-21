# ARCHITECTURE.md — Deebi 기술 구조

이 문서는 Deebi를 **어떻게 구성하고 구현할지** 정의한다. 기능 요구사항은 `docs/SPEC.md`, 데이터베이스 상세는 `docs/DATA_MODEL.md`, API 계약은 `docs/API_CONTRACTS.md`, UI/UX 설계는 `docs/UI_UX.md`를 따른다.

---

## 1. 기술 스택

| 레이어 | 선택 | 이유 |
|---|---|---|
| 프레임워크 | Next.js App Router | 프론트, 서버 Route Handler, OAuth callback을 한 레포에서 관리 |
| 언어 | TypeScript | API, DB row, 도메인 로직 계약을 타입으로 고정 |
| UI | React Server Components + 필요한 곳만 Client Components | 기본은 서버 렌더링, 상호작용만 클라이언트로 제한 |
| 스타일 | Tailwind CSS | 빠른 UI 구현, 반응형 레이아웃, 일관된 디자인 토큰 |
| DB | Supabase Postgres | 무료 티어, SQL 마이그레이션, RLS 가능 |
| 인증 | GitHub OAuth + 자체 httpOnly session cookie | GitHub activity 접근과 서버 전용 token 보호 |
| 도트 렌더링 | SVG `<rect>` 그리드 또는 CSS 픽셀 레이어 | 외부 이미지 의존 없이 코드로 합성 가능 |
| 배포 | Vercel | Next.js 호스팅과 환경 변수 관리에 적합 |

## 2. 런타임 경계

### 2.1 서버 전용

아래 코드는 서버에서만 실행한다.

- GitHub OAuth client secret 사용
- GitHub access token 교환
- Supabase service role key 사용
- 사용자 access token 조회
- 커밋 동기화
- 건강도와 포인트 계산
- 뽑기 결과 확정
- DB write 작업

서버 전용 파일 위치:

- `src/app/api/**`
- `src/lib/server/**`
- `src/lib/github/**`
- `src/lib/supabase/server.ts`

### 2.2 클라이언트 허용

아래 코드는 클라이언트 컴포넌트에서 실행할 수 있다.

- 버튼, 모달, 탭, 카드 뒤집기 같은 UI 상호작용
- 장착 슬롯 선택 UI
- 뽑기 연출
- 복사 버튼
- 클라이언트에서 secret 없이 가능한 상태 표시

클라이언트 컴포넌트는 서버 전용 모듈을 import하지 않는다.

### 2.3 공용 순수 로직

아래는 서버와 테스트에서 재사용 가능한 순수 함수로 둔다.

- 건강도 계산
- streak 계산
- gacha 확률 선택
- item slot/rarity type guard
- room code format validation
- room message validation

권장 위치:

- `src/lib/domain/**`

## 3. 목표 폴더 구조

```text
.
├─ docs/
│  ├─ phases/
│  │  ├─ 00-overview.md
│  │  ├─ 01-project-setup.md
│  │  ├─ 02-ui-ux-prototype.md
│  │  ├─ 03-db-schema.md
│  │  ├─ 04-auth-session.md
│  │  ├─ 05-commit-sync.md
│  │  ├─ 06-character-renderer.md
│  │  ├─ 07-dashboard-inventory.md
│  │  ├─ 08-gacha-equipment.md
│  │  ├─ 09-rooms.md
│  │  ├─ 10-ui-ux-polish.md
│  │  ├─ 11-security-qa.md
│  │  └─ 12-deployment.md
│  ├─ AGENT_GUIDE.md
│  ├─ API_CONTRACTS.md
│  ├─ ARCHITECTURE.md
│  ├─ AUTOMATION.md
│  ├─ CONVENTIONS.md
│  ├─ DATA_MODEL.md
│  ├─ DECISIONS.md
│  ├─ PROGRESS.md
│  ├─ QA_CHECKLIST.md
│  ├─ SPEC.md
│  ├─ UI_UX.md
│  └─ UI_UX_QUESTIONS.md
├─ public/
│  └─ fonts/
├─ supabase/
│  ├─ migrations/
│  └─ seed.sql
├─ src/
│  ├─ app/
│  │  ├─ api/
│  │  │  ├─ auth/
│  │  │  │  ├─ login/route.ts
│  │  │  │  ├─ callback/route.ts
│  │  │  │  └─ logout/route.ts
│  │  │  ├─ sync/route.ts
│  │  │  ├─ gacha/route.ts
│  │  │  ├─ inventory/equip/route.ts
│  │  │  └─ rooms/
│  │  │     ├─ route.ts
│  │  │     ├─ join/route.ts
│  │  │     └─ [code]/
│  │  │        ├─ route.ts
│  │  │        ├─ leave/route.ts
│  │  │        └─ messages/route.ts
│  │  ├─ dashboard/
│  │  │  └─ page.tsx
│  │  ├─ room/[code]/
│  │  │  └─ page.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ character/
│  │  ├─ dashboard/
│  │  ├─ gacha/
│  │  ├─ inventory/
│  │  ├─ room/
│  │  └─ ui/
│  ├─ lib/
│  │  ├─ domain/
│  │  ├─ github/
│  │  ├─ mock/
│  │  ├─ server/
│  │  ├─ supabase/
│  │  └─ utils/
│  └─ types/
├─ .env.example
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
└─ tsconfig.json
```

## 4. 환경 변수

`.env.local`은 커밋하지 않는다. `.env.example`만 커밋한다.

| 변수 | 공개 여부 | 용도 |
|---|---|---|
| `GITHUB_CLIENT_ID` | 서버/리다이렉트 URL 구성 | GitHub OAuth app client id |
| `GITHUB_CLIENT_SECRET` | 서버 전용 | GitHub OAuth token exchange |
| `SUPABASE_URL` | 서버 전용으로 시작 | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | 서버 전용 | DB write, RLS 우회가 필요한 서버 작업 |
| `SESSION_SECRET` | 서버 전용 | 세션 쿠키 서명 또는 암호화 |
| `NEXT_PUBLIC_APP_URL` | 클라이언트 노출 가능 | 공유 링크와 OAuth callback 기준 URL |

## 5. 인증과 세션

### 5.1 OAuth 흐름

1. `/api/auth/login`이 GitHub authorize URL로 리다이렉트한다.
2. state 값을 생성하고 httpOnly 쿠키 또는 서명된 임시 값으로 검증한다.
3. `/api/auth/callback`이 `code`와 `state`를 검증한다.
4. 서버가 GitHub access token을 교환한다.
5. 서버가 GitHub user profile을 조회한다.
6. `users` 테이블에 사용자와 token을 upsert한다.
7. 자체 session cookie를 발급한다.
8. `/dashboard`로 이동한다.

### 5.2 세션 원칙

- 세션 쿠키는 httpOnly다.
- production에서는 secure와 sameSite 설정을 적용한다.
- 세션 payload에는 내부 user id만 넣는다.
- GitHub access token은 세션 쿠키에 넣지 않는다.
- 로그아웃은 세션 쿠키를 삭제한다.

## 6. 데이터 접근 원칙

- 서버 Route Handler는 service role key를 사용할 수 있다.
- 클라이언트에서 Supabase anon key를 쓰는 구조는 MVP에서는 기본값이 아니다.
- 사용자 개인 데이터는 서버가 검증한 session user id로만 조회한다.
- 룸 공개 데이터는 같은 룸 멤버에게 필요한 필드만 반환한다.
- `users.access_token`은 API response, page props, console log에 절대 포함하지 않는다.

## 7. API 설계 원칙

- API response는 `{ ok: boolean, data?: T, error?: { code, message } }` 형태로 통일한다.
- 사용자가 다시 시도할 수 있는 오류와 개발자 설정 오류를 구분한다.
- 포인트 지급, 뽑기, 장착 같은 write API는 서버에서 사용자 세션을 검증한다.
- 중복 요청이 위험한 API는 DB constraint 또는 트랜잭션으로 방어한다.

상세 계약은 `docs/API_CONTRACTS.md`를 따른다.

## 8. 커밋 동기화 아키텍처

- 동기화 트리거: `/dashboard` 진입 또는 명시적 새로고침 버튼
- throttle: 마지막 동기화 10분 이내면 기존 캐시 사용
- GitHub API 호출: 저장된 access token 사용
- 저장: 날짜별 `commit_stats` upsert
- 계산: health, streak, points delta 산출
- 결과: `users.health`, `users.points`, `users.last_synced_at` 갱신

재시도 안전성:

- 이미 집계된 날짜는 기존 값과 새 값의 차이만 보상한다.
- 같은 요청이 두 번 실행되어도 포인트가 중복 지급되지 않아야 한다.
- GitHub API 실패 시 DB write를 부분적으로 남기지 않는다.

## 9. 무료 운영 원칙

| 서비스 | 무료 범위 활용 | 주의 |
|---|---|---|
| Vercel Hobby | Next.js 앱과 Route Handler 배포 | 실제 광고 수익 발생 시 요금제 조건 확인 필요 |
| Supabase Free | Postgres, RLS, 프로젝트 무료 범위 | DB 용량, 활성 사용자, 프로젝트 비활성 제한 확인 |
| GitHub OAuth/API | 인증 API rate limit 활용 | 인증 토큰 기준 rate limit을 고려하고 매 요청 동기화 금지 |

비용을 늘리는 선택은 MVP 기본값이 아니다. 필요하면 `docs/DECISIONS.md`에 이유를 기록한다.

## 10. 보안 경계

- secret은 `.env.local`과 배포 환경 변수에만 둔다.
- service role key는 클라이언트 번들에 들어가면 안 된다.
- access token은 DB에 저장하되 RLS와 서버 API 경계로 보호한다.
- OAuth callback은 state 검증을 반드시 한다.
- room code는 비밀 정보가 아니지만, 참가 전에 로그인은 필요하다.
- API는 session user id를 신뢰하되, 클라이언트가 보내는 user id는 신뢰하지 않는다.
- 룸 채팅 API는 현재 사용자가 해당 룸 멤버인지 서버에서 확인한 뒤 메시지 조회/작성을 허용한다.
- 룸 메시지 body는 서버에서 trim하고 1~300자 제약을 적용한다.

상세 보안 체크리스트는 `docs/QA_CHECKLIST.md`를 따른다.

## 11. 테스트 전략

최소 자동 검증:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

권장 단위 테스트 대상:

- health 계산
- streak 계산
- point delta 계산
- gacha 확률 선택
- duplicate item refund
- room code validation

권장 통합 테스트 대상:

- OAuth callback 에러 분기
- dashboard 보호 라우트
- gacha API 포인트 부족/성공/중복
- room create/join/leave
- room messages list/send authorization and validation

## 12. 열린 기술 결정

- 도트 렌더러 구현 방식: SVG grid vs CSS pixel layers
- GitHub commit source: events API, GraphQL contributionsCollection, repo commits search 중 어떤 조합을 쓸지
- Supabase local CLI를 필수로 둘지, SQL 파일만 제공할지
- 세션 구현 방식: 직접 서명 쿠키 vs 라이브러리 사용
- API 테스트 도구를 언제 도입할지

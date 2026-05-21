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
| 인증 | GitHub OAuth + 직접 서명한 httpOnly session cookie | GitHub activity 접근과 서버 전용 token 보호 |
| 도트 렌더링 | 32x32 sprite/manifest + CSS pixel rendering, 필요 시 SVG placeholder | 개발자가 제공할 픽셀 에셋을 우선하고, 에셋 전에는 구조 검증 가능 |
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
- `src/lib/server/session.ts`
- `src/lib/server/dashboard.ts`
- `src/lib/server/transactions.ts`

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
│  ├─ tasks/
│  │  ├─ _TASK_TEMPLATE.md
│  │  ├─ phase-01/
│  │  └─ phase-12/
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
6. `users` 테이블에 사용자 profile을 upsert한다.
7. GitHub access token은 `user_oauth_tokens` private table에 upsert한다.
8. 자체 session cookie를 발급한다.
9. `/dashboard`로 이동한다.

### 5.2 세션 원칙

- 세션 쿠키는 httpOnly다.
- production에서는 secure와 sameSite 설정을 적용한다.
- 세션 payload에는 내부 user id만 넣는다.
- GitHub access token은 세션 쿠키에 넣지 않는다.
- 로그아웃은 세션 쿠키를 삭제한다.

### 5.3 MVP 세션 구현 방식

MVP에서는 외부 session library 없이 직접 서명한 cookie를 사용한다.

권장 구조:

```ts
type SessionPayload = {
  userId: string;
  exp: number;
};
```

구현 원칙:

- payload JSON을 base64url로 인코딩한다.
- `SESSION_SECRET`으로 HMAC-SHA256 signature를 만든다.
- cookie 값은 `payload.signature` 형태로 둔다.
- 검증 시 signature와 `exp`를 모두 확인한다.
- 만료 기본값은 7일로 시작한다.
- production cookie 옵션은 `httpOnly: true`, `secure: true`, `sameSite: "lax"`, `path: "/"`를 사용한다.
- localhost 개발에서는 `secure: false`를 허용한다.
- `userId` 외의 GitHub token, login, points, role은 session payload에 넣지 않는다.

## 6. 데이터 접근 원칙

- 서버 Route Handler는 service role key를 사용할 수 있다.
- 클라이언트에서 Supabase anon key를 쓰는 구조는 MVP에서는 기본값이 아니다.
- 사용자 개인 데이터는 서버가 검증한 session user id로만 조회한다.
- 룸 공개 데이터는 같은 룸 멤버에게 필요한 필드만 반환한다.
- GitHub access token은 `user_oauth_tokens` private table에만 저장한다.
- token table은 service role 서버 코드에서만 조회한다.
- token은 API response, page props, console log에 절대 포함하지 않는다.

## 7. API 설계 원칙

- API response는 `{ ok: boolean, data?: T, error?: { code, message } }` 형태로 통일한다.
- 사용자가 다시 시도할 수 있는 오류와 개발자 설정 오류를 구분한다.
- 포인트 지급, 뽑기, 장착 같은 write API는 서버에서 사용자 세션을 검증한다.
- 중복 요청이 위험한 API는 DB constraint 또는 트랜잭션으로 방어한다.

상세 계약은 `docs/API_CONTRACTS.md`를 따른다.

### 7.1 dashboard 데이터 경계

`/dashboard`는 외부 HTTP API 여러 개를 클라이언트에서 조합하지 않고, 서버 전용 함수 `getDashboardViewData(sessionUserId)`로 view model을 만든다.

원칙:

- 반환 shape은 `docs/API_CONTRACTS.md`의 `DashboardViewData`를 따른다.
- token table은 조회해도 반환하지 않는다.
- inventory, equipped, joined rooms, today stats를 서버에서 조합한다.
- Phase 02 mock UI는 Phase 07에서 이 view model로 치환한다.

### 7.2 transaction 전략

Supabase JS 클라이언트만으로 여러 SQL statement를 안전하게 묶기 어려운 작업은 Postgres RPC 또는 SQL function으로 transaction 경계를 만든다.

sync:

- 서버에서 GitHub 활동을 조회하고 계산은 TypeScript 순수 함수로 수행한다.
- DB 반영은 `apply_commit_sync_result(...)` 같은 RPC로 처리한다.
- RPC 안에서 `users` row를 `for update`로 잠근다.
- `commit_stats`는 `(user_id, date)` primary key 기준으로 upsert한다.
- 기존 `rewarded_commit_count`와 새 `commit_count` 차이만 포인트에 반영한다.
- GitHub API 실패 시 RPC를 호출하지 않는다.

gacha:

- item 추첨은 TypeScript 순수 함수로 수행한다.
- DB 반영은 `perform_gacha_result(...)` 같은 RPC로 처리한다.
- RPC 안에서 `users` row를 `for update`로 잠근다.
- points가 100 미만이면 DB 변경 없이 실패한다.
- inventory insert는 `(user_id, item_id)` primary key와 `on conflict do nothing`으로 중복을 판정한다.
- 새 아이템이면 100포인트 차감, 중복이면 100포인트 차감 후 30포인트 환급 결과가 한 transaction 안에서 확정된다.

equipment:

- 장착/해제는 한 요청에서 한 슬롯만 변경한다.
- 보유 여부와 item slot 검증을 서버에서 수행한다.
- 필요하면 `equip_item(...)` RPC로 보유 검증과 equipped upsert/delete를 묶는다.

## 8. 커밋 동기화 아키텍처

- 동기화 트리거: `/dashboard` 진입 또는 명시적 새로고침 버튼
- throttle: 마지막 동기화 10분 이내면 기존 캐시 사용
- GitHub API 호출: `user_oauth_tokens`에 저장된 access token 사용
- MVP OAuth scope: `read:user`
- MVP 커밋 source: GitHub REST public events에서 `PushEvent`를 집계한다.
- 저장: 날짜별 `commit_stats` upsert
- 계산: health, streak, points delta 산출
- 결과: `users.health`, `users.points`, `users.last_synced_at` 갱신

재시도 안전성:

- 이미 집계된 날짜는 기존 값과 새 값의 차이만 보상한다.
- 같은 요청이 두 번 실행되어도 포인트가 중복 지급되지 않아야 한다.
- GitHub API 실패 시 DB write를 부분적으로 남기지 않는다.

GitHub activity source 세부 기준:

- MVP는 신뢰 장벽을 낮추기 위해 `repo` scope를 요청하지 않는다.
- 로그인 사용자의 public activity 기준으로 시작한다.
- 기본 조회 후보는 `GET /users/{githubLogin}/events/public` 또는 인증된 REST equivalent다.
- `PushEvent`의 commit payload를 날짜별로 집계한다.
- GitHub public events API의 기간/가시성 제한은 UI와 문서에 솔직하게 안내한다.
- 비공개 커밋 집계는 후속 확장으로 분리하고, 그때 `repo` 또는 GitHub App 기반 권한을 별도 검토한다.

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
- access token은 `users` 공개 row와 분리된 `user_oauth_tokens` private table에 저장한다.
- token table은 RLS와 서버 API 경계로 보호하고 service role 서버 코드에서만 접근한다.
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

테스트 도구 기본값:

- 순수 함수와 서버 helper 테스트는 Phase 05 또는 Phase 08에서 `vitest` 도입을 기본 후보로 한다.
- UI 시각 확인은 Phase 02/10에서 브라우저 수동 확인을 기본으로 하고, 필요 시 Playwright 도입을 별도 결정한다.
- 테스트 도구를 추가하면 `package.json` script와 `docs/CONVENTIONS.md`를 함께 갱신한다.

권장 통합 테스트 대상:

- OAuth callback 에러 분기
- dashboard 보호 라우트
- gacha API 포인트 부족/성공/중복
- room create/join/leave
- room messages list/send authorization and validation

## 12. 기술 결정 상태

확정:

- OAuth scope는 MVP에서 `read:user`만 사용한다.
- MVP 커밋 source는 public `PushEvent` 집계로 시작한다.
- 세션은 직접 서명한 httpOnly cookie로 시작한다.
- access token은 `user_oauth_tokens` private table에 분리 저장한다.
- sync/gacha의 중복 보상 방지는 Postgres RPC transaction으로 방어한다.
- 캐릭터 렌더러는 개발자 제공 sprite/manifest 에셋을 우선하고, 에셋 전에는 placeholder로 구조를 검증한다.

후속 확장으로 남김:

- 비공개 커밋 집계용 `repo` scope 또는 GitHub App 전환
- Supabase local CLI를 필수 도구로 둘지 여부
- Playwright 기반 자동 UI regression test 도입 시점

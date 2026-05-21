# SETUP_GUIDE.md — Deebi 개발자 사전 준비

이 문서는 에이전트가 대신 만들 수 없는 외부 서비스와 secret 준비 절차를 정리한다. 실제 secret 값은 `.env.local` 또는 배포 환경 변수에만 넣고 커밋하지 않는다.

---

## 1. 로컬 Node.js 준비

권장 버전:

- Node.js 20.19.0 이상 20.x LTS
- Node.js 22.13.0 이상 22.x LTS

주의:

- Node.js 21.x처럼 홀수 버전은 일부 패키지에서 engine 경고가 날 수 있다.
- 현재 레포는 `package.json`의 `engines.node`로 권장 범위를 명시한다.

확인:

```bash
node --version
npm --version
```

## 2. GitHub OAuth 앱 준비

1. GitHub에서 Developer settings -> OAuth Apps -> New OAuth App으로 이동한다.
2. Application name은 `Deebi`로 둔다.
3. Homepage URL은 로컬 개발 기준 `http://localhost:3000`으로 둔다.
4. Authorization callback URL은 로컬 개발 기준 `http://localhost:3000/api/auth/callback`으로 둔다.
5. 생성 후 아래 값을 `.env.local`에 넣는다.
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`

### 2.1 OAuth scope 결정

아직 개발자와 확정할 항목:

- 공개 활동만 집계: `read:user`
- 비공개 커밋까지 집계: `read:user repo`
- 사용자가 권한 범위를 선택: 구현 복잡도 증가

이 결정은 `docs/UI_UX_QUESTIONS.md`의 권한/신뢰 질문과 함께 확정한다.

## 3. Supabase 프로젝트 준비

1. Supabase에서 새 프로젝트를 만든다.
2. Project Settings -> API에서 아래 값을 확인한다.
   - Project URL -> `SUPABASE_URL`
   - service_role key -> `SUPABASE_SERVICE_ROLE_KEY`
3. service role key는 서버 전용이므로 브라우저에 노출하지 않는다.

Phase 03에서 아래가 추가된다.

- SQL migration
- `items` seed
- RLS policy

## 4. `.env.local` 채우기

`.env.example`을 `.env.local`로 복사한다.

```bash
cp .env.example .env.local
```

필요 변수:

| 변수 | 예시 | 설명 |
|---|---|---|
| `GITHUB_CLIENT_ID` | 빈 값으로 시작 | GitHub OAuth app client id |
| `GITHUB_CLIENT_SECRET` | 빈 값으로 시작 | GitHub OAuth app secret |
| `SUPABASE_URL` | 빈 값으로 시작 | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | 빈 값으로 시작 | Supabase service role key |
| `SESSION_SECRET` | 긴 랜덤 문자열 | session cookie 서명/암호화 |
| `NEXT_PUBLIC_APP_URL` | `http://localhost:3000` | 앱 기준 URL |

`SESSION_SECRET`은 충분히 긴 랜덤 문자열을 사용한다.

## 5. 로컬 실행

```bash
npm install
npm run dev
```

확인 URL:

- `http://localhost:3000`

기본 검증:

```bash
npm run lint
npm run typecheck
npm run build
```

## 6. 폰트 에셋 준비

Deebi의 기본 폰트는 **PF스타더스트**다.

준비할 것:

1. PF스타더스트 폰트 파일을 확보한다. 웹에서는 `woff2` 형식을 권장한다.
2. 해당 폰트의 라이선스가 웹 임베딩과 서비스 사용을 허용하는지 확인한다.
3. 폰트 파일은 예를 들어 `public/fonts/` 아래에 둔다.
4. 구현 단계에서는 `next/font/local` 또는 동등한 방식으로 로드한다.

주의:

- 폰트 파일 자체는 라이선스 조건을 확인한 뒤에만 커밋한다.
- 폰트 파일이 아직 없으면 Phase 02에서는 PF스타더스트용 CSS token과 fallback만 먼저 준비한다.

## 7. Vercel 배포 준비

Phase 12에서 최종 처리한다. 미리 준비할 내용:

1. Vercel 프로젝트를 만든다.
2. production 환경 변수에 `.env.example`과 같은 이름을 등록한다.
3. GitHub OAuth app에 production callback URL을 추가한다.
   - 예: `https://<your-domain>/api/auth/callback`
4. `NEXT_PUBLIC_APP_URL`은 production URL로 설정한다.

## 8. 준비 완료 체크

- [ ] Node.js 20 LTS 또는 22 LTS 계열을 사용한다.
- [ ] GitHub OAuth 앱을 만들었다.
- [ ] 로컬 callback URL을 `http://localhost:3000/api/auth/callback`으로 등록했다.
- [ ] Supabase 프로젝트를 만들었다.
- [ ] PF스타더스트 폰트 파일과 웹 임베딩 라이선스를 확인했다.
- [ ] `.env.local`을 만들고 필요한 값을 채웠다.
- [ ] `.env.local`을 커밋하지 않는다.
- [ ] UI/UX 질문 중 OAuth scope 방향을 답할 준비가 되어 있다.

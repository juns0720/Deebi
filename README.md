# Deebi

Deebi는 GitHub 커밋 활동을 도트 캐릭터의 건강도와 꾸미기 보상으로 바꾸는 웹 대시보드다. 꾸준히 커밋하면 캐릭터가 건강해지고, 방치하면 상태가 나빠진다. 포인트를 모아 뽑기로 아이템을 얻고, 룸에서 다른 사용자와 캐릭터 상태를 함께 보며 간단히 대화할 수 있다.

---

## 현재 개발 방식

이 레포는 에이전트 주도 개발 구조다. 개발자는 단계 진행과 테스트 승인을 담당하고, 에이전트는 문서 기준으로 설계·구현·검증·문서 갱신을 수행한다.

단일 상태원:

- `docs/PROGRESS.md`

작업 규칙:

- `docs/AGENT_GUIDE.md`

자동 개발 운영 문서:

- `docs/AUTOMATION.md`

## 빠른 시작

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 연다.

빌드 검증:

```bash
npm run lint
npm run typecheck
npm run build
```

권장 Node.js:

- Node.js 20.19.0 이상 20.x LTS
- Node.js 22.13.0 이상 22.x LTS

## 환경 변수

`.env.example`을 `.env.local`로 복사한 뒤 값을 채운다.

```bash
cp .env.example .env.local
```

필요 변수:

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SESSION_SECRET`
- `NEXT_PUBLIC_APP_URL`

자세한 외부 서비스 준비는 `SETUP_GUIDE.md`를 따른다.

## 주요 문서

| 문서 | 역할 |
|---|---|
| `docs/SPEC.md` | 제품 요구사항, MVP 범위, 제외 항목 |
| `docs/ARCHITECTURE.md` | 기술 구조, 런타임 경계, 폴더 구조 |
| `docs/DATA_MODEL.md` | DB 테이블, 제약, RLS 방향 |
| `docs/API_CONTRACTS.md` | API endpoint 계약 |
| `docs/UI_UX.md` | 화면 구조와 UX 원칙 |
| `docs/UI_UX_QUESTIONS.md` | 개발자와 함께 확정할 UI/UX 질문 |
| `docs/QA_CHECKLIST.md` | 보안, UI, DB, 배포 QA |
| `docs/phases/00-overview.md` | 전체 phase 목록 |
| `docs/PROGRESS.md` | 현재 phase와 테스트 지시 |

## 개발 흐름

Deebi는 UI/UX 감성이 핵심인 서비스라서, 실제 DB/API보다 **mock 기반 UI/UX 프로토타입을 먼저 만든다**.

1. Phase 01 — 프로젝트 셋업과 문서 기반
2. Phase 02 — UI/UX 정적 프로토타입
3. Phase 03 이후 — DB, 인증, 커밋 동기화, 캐릭터 렌더러, 대시보드, 뽑기, 룸, QA, 배포

Phase 02에서는 실제 OAuth/Supabase 없이 랜딩, 내 방, 함께하는 방, 공동 룸, 공동 룸 채팅, 방치 모드를 mock 데이터로 확인한다.

## 개발자 워크플로우

1. `docs/PROGRESS.md`에서 Current Phase를 확인한다.
2. 에이전트에게 "현재 단계 진행해"라고 말한다.
3. 에이전트가 `Status: AWAITING REVIEW`로 멈추면 `Developer Test`를 직접 확인한다.
4. 통과하면 `PROGRESS.md`를 다음 phase로 넘기고 "다음 단계 진행해"라고 말한다.
5. 실패하면 실패 내용을 알려주고 같은 phase를 수정하게 한다.

## MVP 제외 항목

아래는 의도적으로 구현하지 않는다.

- 친구 요청·수락·알림 시스템
- 전역 채팅, DM, 신고/차단/멘션/파일 첨부/읽음 표시 같은 고급 채팅 기능
- 아이템 상점, 직접 구매, 거래
- 아이템 강화·합성, 캐릭터 레벨/스탯
- 결제, 인앱 구매
- 푸시/이메일 알림
- 다국어
- 런타임 AI 이미지 생성
- 실제 광고 SDK 연동

## 현재 상태

현재 상태는 `docs/PROGRESS.md`만 신뢰한다.

# Deebi — 원본 프로젝트 기획

이 파일은 Deebi의 최초 기획 내용을 보존하는 원본 브리프다. 구현 기준 문서는 `docs/` 아래에 분리되어 있으며, 에이전트는 실제 작업 시 아래 문서를 우선한다.

- 제품 스펙: `docs/SPEC.md`
- 기술 구조: `docs/ARCHITECTURE.md`
- 데이터 모델: `docs/DATA_MODEL.md`
- API 계약: `docs/API_CONTRACTS.md`
- UI/UX: `docs/UI_UX.md`
- 단계 진행: `docs/PROGRESS.md`, `docs/phases/`

---

## 1. 한 줄 요약

개발자가 GitHub에 커밋을 꾸준히 하면 도트 캐릭터가 건강해지고, 방치하면 상태가 나빠지는 웹 서비스. 커밋 활동으로 포인트를 모아 뽑기로 도트 아이템을 얻어 캐릭터를 꾸민다. 친구들과 룸에 모여 서로의 캐릭터를 한 화면에서 보고 간단히 대화한다.

## 2. 핵심 컨셉

- 방치 = 악화, 활동 = 회복.
- 캐릭터 상태는 GitHub 커밋 활동에서 파생되는 건강도(0~100) 수치로 결정된다.
- 꾸미기는 키우기의 보상이고, 룸은 비교와 자랑, 느슨한 대화의 동기다.

## 3. 확정된 결정사항

| 항목 | 결정 |
|---|---|
| 서비스명 | Deebi |
| 형태 | 웹 대시보드, 모바일 웹 대응 |
| 인증 | GitHub OAuth, 서버에서 client secret 처리 |
| 커밋 데이터 | 로그인 사용자의 GitHub 활동, 공개 + 가능 시 비공개 포함 |
| 꾸미기 재화 | 포인트 |
| 획득 방식 | 뽑기 1종만 |
| 상점/직접구매 | MVP 제외 |
| 아이템 수 | 출시 시 15개 |
| 친구 기능 | 룸 방식 |
| 소셜 그래프 | 친구 요청/수락 없음 |
| 공동 룸 채팅 | MVP 포함. 룸 멤버 전용 간단한 텍스트 채팅 |
| 아이템 에셋 | 사전 제작된 정적 도트 에셋 또는 코드 기반 도트 |
| 런타임 AI 이미지 생성 | MVP 제외 |
| 수익화 | 광고 슬롯 자리만 마련, 실제 광고 연동 제외 |

## 4. 의도적으로 제외한 것

- 친구 요청·수락·알림 시스템
- 전역 채팅, DM, 신고/차단/멘션/파일 첨부/읽음 표시 같은 고급 채팅 기능
- 아이템 상점 / 직접 구매 / 아이템 거래
- 아이템 강화·합성, 캐릭터 레벨/스탯 시스템
- 결제, 인앱 구매
- 푸시 알림, 이메일 알림
- 다국어

## 5. 기술 스택

| 레이어 | 선택 |
|---|---|
| 프레임워크 | Next.js App Router |
| 언어 | TypeScript |
| DB·인증 보조 | Supabase Postgres |
| 스타일 | Tailwind CSS |
| 도트 렌더링 | CSS/SVG 기반 코드 렌더링 |
| 배포 | Vercel |

## 6. 무료 운영 원칙

- Vercel Hobby와 Supabase Free를 기준으로 MVP를 운영한다.
- GitHub API는 인증 토큰을 사용한다.
- 커밋 동기화는 매 요청마다 하지 않고 `last_synced_at` 기준으로 throttle한다.
- 별도 cron worker를 두지 않고, 대시보드 진입 시 lazy sync한다.
- 이미지와 에셋은 코드 기반 또는 정적 에셋으로 시작한다.

## 7. GitHub OAuth 흐름

1. 사용자가 GitHub로 로그인 클릭
2. `GET /api/auth/login`이 GitHub authorize URL로 redirect
3. GitHub callback `GET /api/auth/callback?code=...`
4. 서버가 `code`와 client secret으로 access token 교환
5. access token으로 GitHub 사용자 정보 조회
6. `users` 테이블에 upsert
7. httpOnly secure session cookie 발급
8. 이후 커밋 동기화는 서버가 저장된 token으로 수행

환경 변수:

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SESSION_SECRET`
- `NEXT_PUBLIC_APP_URL`

## 8. DB 스키마 요약

자세한 내용은 `docs/DATA_MODEL.md`를 따른다.

```text
users
commit_stats
items
inventory
equipped
rooms
room_members
room_messages
```

## 9. 건강도와 포인트

건강도:

- 기본값 50
- 마지막 커밋 이후 6시간마다 -10
- 오늘 커밋 1개당 +15
- 현재 streak 하루당 +5, 최대 +25
- 최종 0~100 clamp

포인트:

- 신규 커밋 1개당 +10
- streak 유지 보너스 하루 추가당 +5
- `commit_stats`로 중복 지급 방지

건강도 구간:

| 건강도 | 상태 | 비주얼 |
|---|---|---|
| 80~100 | 최상 | 밝은 표정, 깔끔한 상태, 반짝임 |
| 50~79 | 보통 | 평범한 표정 |
| 20~49 | 나쁨 | 피곤한 표정, 어두운 톤 |
| 0~19 | 방치 | 심하게 흐트러진 상태 |

## 10. 뽑기

- 뽑기 1회 = 100 포인트
- common 70% / rare 25% / unique 5%
- 해당 등급 내 균등 랜덤
- 이미 보유한 아이템이면 30포인트 환급
- 결과는 간단한 카드 공개 연출 후 인벤토리에 추가

## 11. 룸

- 로그인 사용자가 룸 생성
- 고유 code 발급
- 생성자가 첫 멤버
- 코드 입력 또는 `/room/[code]`로 참여
- 멤버 캐릭터를 건강도 순 정렬
- 각 캐릭터 아래 login, 오늘 커밋 수, streak 표시
- 룸 멤버 전용 간단한 텍스트 채팅
- 메시지 작성, 최근 메시지 조회, 작성자 login/시각 표시
- 메시지 삭제/수정, DM, 신고/차단, 파일 첨부, 읽음 표시는 MVP 제외
- 한 사용자는 여러 룸 참여 가능
- 룸 나가기 가능
- 룸 삭제는 MVP 제외

## 12. 아이템 15개

| id | 이름 | 슬롯 | 등급 |
|---|---|---|---|
| `hat_cap` | 야구모자 | `hat` | `common` |
| `hat_beanie` | 비니 | `hat` | `common` |
| `hat_band` | 머리띠 | `hat` | `common` |
| `hat_crown` | 왕관 | `hat` | `unique` |
| `face_glasses` | 안경 | `face` | `common` |
| `face_sunglasses` | 선글라스 | `face` | `rare` |
| `face_eyepatch` | 안대 | `face` | `rare` |
| `face_monocle` | 외알안경 | `face` | `unique` |
| `acc_coffee` | 커피잔 | `accessory` | `common` |
| `acc_headphone` | 헤드폰 | `accessory` | `rare` |
| `acc_cat` | 어깨 위 고양이 | `accessory` | `rare` |
| `acc_medal` | 메달 | `accessory` | `unique` |
| `bg_window` | 창문 배경 | `background` | `common` |
| `bg_city` | 야경 배경 | `background` | `rare` |
| `bg_space` | 우주 배경 | `background` | `unique` |

## 13. 화면

- `/` — 랜딩 + GitHub 로그인
- `/dashboard` — 내 캐릭터, 건강도, 포인트, 뽑기, 인벤토리, 장착
- `/room/[code]` — 룸 멤버 캐릭터 그리드, 공동 룸 채팅

## 14. 단계

최신 단계 목록은 `docs/phases/00-overview.md`를 따른다.

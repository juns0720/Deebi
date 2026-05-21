# QA_CHECKLIST.md — Deebi 검증 체크리스트

이 문서는 phase별 완료 조건 외에 반복적으로 확인해야 할 품질 기준이다.

---

## 1. 기본 명령

```bash
npm run lint
npm run typecheck
npm run build
```

프론트엔드가 바뀐 경우:

```bash
npm run dev
```

그리고 브라우저에서 관련 화면을 확인한다.

## 2. 문서 QA

- `docs/PROGRESS.md` Current Phase가 실제 phase 파일을 가리킨다.
- `docs/PROGRESS.md` Current Task가 실제 task 파일을 가리킨다.
- phase 파일 하나와 task 파일 하나만 진행 대상으로 지정되어 있다.
- `docs/SPEC.md`와 phase/task 문서가 충돌하지 않는다.
- MVP 제외 기능이 task 작업에 들어가지 않았다.
- 열린 항목을 확정했다면 `docs/DECISIONS.md`에 기록했다.
- 개발자 테스트가 사람이 따라 할 수 있는 절차로 적혀 있다.

## 3. 보안 QA

- `.env.local`이 커밋되지 않는다.
- `GITHUB_CLIENT_SECRET`이 클라이언트 코드에 없다.
- `SUPABASE_SERVICE_ROLE_KEY`가 클라이언트 코드에 없다.
- `user_oauth_tokens.access_token`이 API 응답에 없다.
- OAuth callback에서 state 검증을 한다.
- API는 클라이언트가 보낸 user id를 신뢰하지 않는다.
- 룸 메시지 조회/작성은 같은 룸 멤버에게만 허용된다.
- 채팅 메시지 응답에 access token, 내부 SQL, stack trace가 없다.
- 오류 응답에 stack trace, token, SQL 원문이 없다.

## 4. DB QA

- migration은 재실행해도 안전한 형태다.
- primary key와 unique constraint가 중복 데이터를 막는다.
- foreign key delete 정책이 의도와 맞다.
- `items` seed가 15개 모두 포함한다.
- `commit_stats`가 날짜별 중복 지급을 막을 수 있다.
- RLS 정책이 문서와 맞다.
- `room_messages`는 같은 룸 멤버만 읽고 작성할 수 있는 구조다.

## 5. 도메인 로직 QA

- health는 항상 0~100이다.
- 커밋이 없는 사용자도 정상 계산된다.
- timezone 차이로 오늘 커밋 계산이 크게 어긋나지 않는다.
- 신규 커밋만 포인트 지급 대상이다.
- 중복 뽑기는 30포인트 환급 처리된다.
- 포인트 부족 시 뽑기가 실행되지 않는다.

## 6. UI QA

- 모바일 360px 폭에서 텍스트가 겹치지 않는다.
- 데스크톱 1440px 폭에서 지나치게 비어 보이지 않는다.
- 버튼 텍스트가 컨테이너 밖으로 넘치지 않는다.
- 전체 UI가 픽셀 그래픽 감성을 유지하고, 일반 SaaS 카드처럼 보이지 않는다.
- PF스타더스트 또는 지정된 pixel font token이 주요 UI에 적용되어 있다.
- 픽셀 폰트에서도 긴 GitHub login, 숫자, 채팅 문장이 읽힌다.
- loading, empty, error 상태가 있다.
- 건강도는 색뿐 아니라 숫자와 라벨로도 이해된다.
- 뽑기 결과는 애니메이션 없이도 이해된다.
- 룸 멤버 카드가 긴 GitHub login에도 깨지지 않는다.
- 룸 채팅 메시지가 긴 GitHub login과 긴 본문에서도 레이아웃을 깨지 않는다.
- 룸 채팅 입력창은 빈 값과 300자 초과 상태를 명확히 처리한다.
- 방치 모드는 종료 버튼이 항상 보인다.
- 방치 모드에서 관리 UI가 숨겨져도 건강도와 캐릭터 상태를 이해할 수 있다.

## 7. 접근성 QA

- 주요 CTA는 키보드로 접근 가능하다.
- focus indicator가 보인다.
- 버튼과 링크 역할이 의미에 맞다.
- 이미지 또는 시각 요소에 필요한 대체 텍스트가 있다.
- 모달이 있다면 닫기 버튼이 있다.
- reduced motion 환경에서 핵심 사용이 가능하다.

## 8. 배포 전 QA

- Vercel 환경 변수 이름이 `.env.example`과 일치한다.
- GitHub OAuth callback URL이 배포 URL로 등록되어 있다.
- Supabase migration이 production 프로젝트에 적용되어 있다.
- service role key가 client bundle에 포함되지 않는다.
- `npm run build`가 clean 상태에서 통과한다.
- 광고 예약 영역은 실제 광고 SDK 없이도 레이아웃을 깨지 않는다.
- MVP에서 광고 예약 영역은 사용 경험을 방해할 정도로 드러나지 않는다.
- 광고 placeholder는 클릭 유도 카피, 보상형 카피, 사용자 요청 없는 자동 새로고침을 포함하지 않는다.

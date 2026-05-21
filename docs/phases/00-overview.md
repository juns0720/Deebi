# Phase 00 — 전체 개요

이 문서는 단계 목록과 의존 관계를 정의한다. 실제 진행 상태는 항상 `docs/PROGRESS.md`가 단일 상태원이다.

---

## 단계 목록

| # | 이름 | 핵심 산출물 | 의존 |
|---|---|---|---|
| 01 | 프로젝트 셋업과 문서 기반 | 실행 가능한 Next.js 앱, Deebi 기준 전체 문서 체계 | — |
| 02 | UI/UX 정적 프로토타입 | mock 기반 랜딩, 내 방, 함께하는 방, 공동 룸, 채팅, 방치 모드 | 01 |
| 03 | DB 스키마 | Supabase SQL migration, RLS 초안, items seed, room_messages | 02 |
| 04 | 인증과 세션 | GitHub OAuth, callback, logout, session cookie, 보호 라우트 | 03 |
| 05 | 커밋 동기화 | GitHub activity 조회, commit_stats 갱신, points/health 계산 | 04 |
| 06 | 도트 캐릭터 렌더러 | 건강도별 캐릭터 상태, 아이템 레이어 합성 기반 | 05 |
| 07 | 대시보드와 인벤토리 | `/dashboard` 실제 데이터 연결, stats, sync status, inventory/equipped 표시 | 06 |
| 08 | 뽑기와 장착 | gacha API, 결과 연출, 장착/해제 UX | 07 |
| 09 | 룸 | room 생성, 참여, 나가기, 멤버 캐릭터 그리드, 공동 룸 채팅 | 08 |
| 10 | UI/UX 폴리시 | 실제 데이터 연결 후 모바일/데스크톱 레이아웃, 상태 화면, 카피, 접근성 개선 | 09 |
| 11 | 보안과 QA | RLS/API 보안 점검, 테스트 보강, 오류 상태 정리 | 10 |
| 12 | 배포 준비 | Vercel 배포 문서, production env, 최종 빌드 검증 | 11 |

## 의존 그래프

```text
01 -> 02 -> 03 -> 04 -> 05 -> 06 -> 07 -> 08 -> 09 -> 10 -> 11 -> 12
```

## phase/task 운영 원칙

- Phase는 큰 단락이고, 실제 개발 단위는 `docs/tasks/phase-NN/TNN-*.md`의 task다.
- 한 번에 한 task만 진행한다.
- `PROGRESS.md`의 Current Phase에 적힌 phase 파일 하나와 Current Task에 적힌 task 파일 하나만 실행 대상으로 삼는다.
- phase/task 문서의 "하면 안 됨"을 절대 넘지 않는다.
- task 완료 후 `docs/PROGRESS.md`의 Current Task를 `AWAITING REVIEW`로 바꾸고 멈춘다.
- 개발자가 task 테스트 통과를 알려주기 전 다음 task로 넘어가지 않는다.
- phase 안의 모든 task가 끝났을 때만 다음 phase로 넘어간다.

## 각 phase 문서의 공통 형식

모든 `NN-*.md`는 아래 섹션을 가진다.

1. **목표** — 이 phase가 끝나면 무엇이 되는가
2. **Task 목록** — phase 안의 T 단위 작업 목록
3. **변경 범위** — 건드려도 되는 영역 / 건드리면 안 되는 영역
4. **작업** — 해야 할 일
5. **완료 조건** — phase 전체 체크리스트
6. **개발자 테스트** — 사람이 직접 확인할 절차
7. **참조** — 관련 문서

각 task 문서는 `docs/tasks/_TASK_TEMPLATE.md` 형식을 따른다.

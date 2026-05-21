# P09-T03 — 공동 룸 스테이지와 멤버 표시

## 목표

`/room/[code]`에서 큰 작업 테이블 중심의 공동 룸과 1~8명 멤버 캐릭터를 표시한다.

## 변경 범위

- **해도 됨:** `/room/[code]`, room stage components, member placement, 공유 코드 UI
- **하면 안 됨:** 채팅 구현, 친구 요청/DM/전역 채팅

## 작업

- 룸 페이지를 만든다.
- 큰 작업 테이블 중심의 픽셀 공간을 구성한다.
- 1~8명 멤버 배치를 만든다.
- 멤버 login, health, today commit, streak를 표시한다.
- 활동 상태를 라벨과 작은 오브젝트/이펙트로 표현한다.
- room code 복사 UI를 추가한다.

## 완료 조건

- [ ] 공동 룸이 큰 작업 테이블 중심으로 보인다.
- [ ] 1~8명 멤버가 식별 가능하게 배치된다.
- [ ] 긴 GitHub login이 레이아웃을 깨지 않는다.
- [ ] 각 멤버의 health/today commits/streak가 보인다.
- [ ] 공유 코드 복사 UI가 있다.

## 개발자 테스트

1. 1명, 2명, 8명 상태의 룸을 확인한다.
2. 긴 login 사용자가 있어도 텍스트가 넘치지 않는지 확인한다.
3. room code 복사가 가능한지 확인한다.

## 참조

- `docs/UI_UX.md` 공동 룸
- `docs/DECISIONS.md` 룸 8명 결정


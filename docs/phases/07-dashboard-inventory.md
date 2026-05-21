# Phase 07 — 대시보드와 인벤토리

## 목표

Phase 02에서 만든 mock 기반 `/dashboard` 화면을 실제 데이터 기반으로 연결한다. 이 단계가 끝나면 사용자는 캐릭터, 건강도, 커밋 지표, 포인트, 인벤토리, 장착 상태를 한 화면에서 볼 수 있다.

## 변경 범위

- **해도 됨:** `/dashboard`, dashboard components, inventory read API 또는 server function, sync status UI, empty/loading/error state
- **하면 안 됨:** gacha 실행 API, 장착 write API, room 생성/참여, 최종 UI polish 범위의 대규모 리디자인

## 작업

- 세션 사용자 dashboard 데이터를 조회한다.
- Phase 02의 mock dashboard 구조와 카피를 최대한 유지하면서 실제 데이터로 치환한다.
- dashboard 상단에 `내 방` / `함께하는 방` 탭 구조를 만든다.
- `내 방` 데스크톱 레이아웃은 큰 방 스테이지 + 오른쪽 관리 패널 + 하단 인벤토리를 기준으로 구현한다.
- `내 방`에 방치 모드 진입/종료 UI를 추가한다.
- 방치 모드에는 참여 중인 룸 또는 친구 상태를 방 안 오브젝트 형태의 작은 보조 신호로 표시할 수 있는 영역을 둔다.
- 내 방에는 공동 룸 진입 오브젝트로 문을 배치할 수 있는 구조를 둔다.
- 캐릭터 렌더러를 dashboard에 연결한다.
- health, today commit count, streak, points를 표시한다.
- 마지막 동기화 시각과 cache 사용 여부를 표시한다.
- 인벤토리 보유/미보유/장착 상태를 표시한다.
- `함께하는 방` 탭에 참여 중인 룸 목록 placeholder 또는 실제 read 구조를 배치한다.
- 광고 영역은 향후 확장을 위해 구조적으로만 예약한다.
- 방치 모드에는 실제 광고 SDK를 넣지 않고, 광고 placeholder도 필요 이상으로 강조하지 않는다.
- 모바일 레이아웃을 기본 확인한다.

## 완료 조건

- [ ] `/dashboard`가 실제 로그인 사용자 데이터를 보여준다.
- [ ] 세션이 없으면 접근이 막힌다.
- [ ] 캐릭터 렌더러가 dashboard에 표시된다.
- [ ] dashboard가 `내 방` / `함께하는 방` 탭으로 나뉜다.
- [ ] 데스크톱에서 `내 방`은 큰 방 스테이지와 오른쪽 관리 패널로 구성된다.
- [ ] 모바일에서 `내 방` 정보는 세로로 자연스럽게 쌓인다.
- [ ] 방치 모드에서 방 스테이지가 커지고 관리 UI가 최소화된다.
- [ ] 방치 모드에서 친구/룸 상태 보조 신호가 방 안 오브젝트처럼 보이고 화면을 방해하지 않는다.
- [ ] 문 오브젝트가 `함께하는 방` 또는 최근 룸 진입 CTA로 동작할 수 있게 설계되어 있다.
- [ ] 방치 모드 종료 버튼이 항상 보인다.
- [ ] health, today commit count, streak, points가 보인다.
- [ ] inventory empty state가 있다.
- [ ] joined rooms empty state가 있다.
- [ ] equipped state가 보인다.
- [ ] sync loading/error/cache 상태가 있다.
- [ ] 광고 영역은 실제 광고 연동 없이 구조적으로만 예약되어 있다.
- [ ] 광고/페이지 자동 새로고침이 없다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. 로그인한다.
2. `/dashboard`에서 캐릭터와 지표가 보이는지 확인한다.
3. 인벤토리가 비었을 때도 화면이 깨지지 않는지 확인한다.
4. 모바일 폭에서 핵심 정보가 먼저 보이는지 확인한다.

## 참조

- `docs/SPEC.md` 8.3장
- `docs/API_CONTRACTS.md` 4장
- `docs/UI_UX.md` 4.2장

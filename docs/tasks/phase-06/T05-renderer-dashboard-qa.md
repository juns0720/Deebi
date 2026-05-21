# P06-T05 — 대시보드 연결과 렌더러 QA

## 목표

캐릭터 렌더러를 dashboard preview에 연결하고 상태/아이템 조합을 브라우저에서 검증한다.

## 변경 범위

- **해도 됨:** dashboard 렌더러 연결, preview controls, QA notes
- **하면 안 됨:** 실제 inventory write, gacha 실행

## 작업

- dashboard 또는 demo 영역에 renderer를 연결한다.
- health 상태와 장착 조합 preview를 만든다.
- 브라우저에서 주요 조합을 확인한다.
- QA 결과와 남은 에셋 의존성을 기록한다.

## 완료 조건

- [ ] dashboard에서 캐릭터가 보인다.
- [ ] health 4구간 preview가 가능하다.
- [ ] 장착 조합이 렌더링된다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.
- [ ] 남은 에셋 의존성이 `docs/PROGRESS.md`에 기록된다.

## 개발자 테스트

1. `/dashboard` 또는 preview URL에서 캐릭터를 확인한다.
2. health와 item 조합을 바꿔본다.
3. 모바일 폭에서 깨짐이 없는지 확인한다.

## 참조

- `docs/phases/06-character-renderer.md`
- `docs/QA_CHECKLIST.md`


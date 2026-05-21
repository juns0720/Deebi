# Phase 06 — 도트 캐릭터 렌더러

## 목표

건강도 구간과 장착 아이템을 반영하는 코드 기반 도트 캐릭터 렌더러를 만든다. 이 단계가 끝나면 캐릭터가 health 상태와 equipped item에 따라 시각적으로 달라진다.

## Task 목록

Phase 06은 캐릭터 에셋 계약, 상태 애니메이션, 장착 레이어를 분리해 진행한다.

| Task | 이름 | 파일 | 상태 |
|---|---|---|---|
| T01 | 캐릭터 에셋 계약과 placeholder 기반 | `docs/tasks/phase-06/T01-asset-contract-placeholder.md` | NOT STARTED |
| T02 | health 상태와 idle 애니메이션 | `docs/tasks/phase-06/T02-health-idle-animation.md` | NOT STARTED |
| T03 | 장착 아이템 레이어와 슬롯 합성 | `docs/tasks/phase-06/T03-equipment-layers.md` | NOT STARTED |
| T04 | 반응형 크기와 reduced motion | `docs/tasks/phase-06/T04-responsive-motion.md` | NOT STARTED |
| T05 | 대시보드 연결과 렌더러 QA | `docs/tasks/phase-06/T05-renderer-dashboard-qa.md` | NOT STARTED |

## 변경 범위

- **해도 됨:** `src/components/character/**`, 캐릭터 타입, 아이템 레이어 정의, 렌더러 테스트/스토리성 샘플, UI/UX 문서 갱신
- **하면 안 됨:** 실제 gacha API 구현, inventory write API 구현, room 기능 구현

## 작업

- 도트 해상도와 렌더링 방식을 개발자 답변 또는 기본값으로 결정한다.
- 개발자가 제공한 캐릭터 디자인이 있으면 그 시안을 기준으로 렌더러를 맞춘다.
- 캐릭터 디자인이 아직 없으면 최종 디자인처럼 보이지 않는 placeholder로 구조만 검증한다.
- 건강도 4구간 시각 상태를 정의한다.
- 상태별 idle 애니메이션을 지원할 수 있는 구조를 만든다.
- 캐릭터 에셋은 상태별 스프라이트시트 PNG 또는 개별 프레임 PNG를 받을 수 있게 설계한다.
- 상태별 애니메이션의 최종 포즈/표정은 개발자 제공 에셋을 기준으로 한다.
- 아이템 레이어는 캐릭터 좌표계에 붙는 레이어와 방 좌표계에 고정되는 레이어를 구분한다.
- 기본 캐릭터 레이어를 만든다.
- 15개 아이템의 레이어 표현을 최소 구현한다.
- 슬롯별 합성 순서를 정한다.
- 모바일/데스크톱에서 크기 조절이 깨지지 않게 한다.
- reduced motion을 고려한다.

## 완료 조건

- [ ] `CharacterCanvas` 또는 동등한 렌더러 컴포넌트가 있다.
- [ ] 최종 캐릭터 디자인을 에이전트가 임의로 확정하지 않는다.
- [ ] health 4구간이 시각적으로 구분된다.
- [ ] 상태별 idle 애니메이션을 켜고 끌 수 있다.
- [ ] health 구간이 `healthy_idle`, `normal_idle`, `tired_idle`, `neglected_idle` state key로 매핑된다.
- [ ] reduced motion 환경에서 애니메이션을 줄이거나 정지할 수 있다.
- [ ] `hat`, `face`, `accessory`, `background` 슬롯이 합성된다.
- [ ] 캐릭터에 붙는 아이템과 방에 고정되는 아이템의 애니메이션 기준이 분리되어 있다.
- [ ] 없는 아이템/장착 없음 상태가 안전하게 처리된다.
- [ ] 렌더러가 layout shift를 만들지 않는다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.
- [ ] 브라우저에서 캐릭터 미리보기가 보인다.

## 개발자 테스트

1. 로컬 앱을 실행한다.
2. health 90, 60, 30, 10 상태 예시가 모두 구분되는지 확인한다.
3. 각 슬롯 아이템을 장착한 샘플이 겹치거나 깨지지 않는지 확인한다.
4. 모바일 폭에서 캐릭터가 찌그러지지 않는지 확인한다.

## 참조

- `docs/SPEC.md` 9장, 10장
- `docs/UI_UX.md`
- `docs/UI_UX_QUESTIONS.md`

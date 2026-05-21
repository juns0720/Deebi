# P10-T04 — 상태 카피와 접근성 보강

## 목표

사용자가 오류/빈 상태/진행 상태를 이해하고, 키보드와 보조 기술로 기본 흐름을 사용할 수 있게 한다.

## 변경 범위

- **해도 됨:** 상태 카피, aria/role, focus style, reduced motion, 버튼/링크 의미 보강
- **하면 안 됨:** 기능 범위 확장

## 작업

- 주요 loading/empty/error 상태를 점검한다.
- focus indicator를 확인한다.
- 버튼과 링크 역할을 맞춘다.
- 캐릭터/시각 요소에 필요한 대체 텍스트를 둔다.
- reduced motion에서도 핵심 사용이 가능하게 한다.

## 완료 조건

- [ ] 주요 CTA가 키보드로 접근 가능하다.
- [ ] focus indicator가 보인다.
- [ ] 주요 상태 카피가 친화적이고 과하게 AI스럽지 않다.
- [ ] reduced motion에서 핵심 흐름이 가능하다.

## 개발자 테스트

1. Tab 키로 주요 흐름을 이동한다.
2. reduced motion 환경에서 애니메이션을 확인한다.
3. 오류/빈 상태 카피가 이해되는지 확인한다.

## 참조

- `docs/QA_CHECKLIST.md` 접근성 QA
- `docs/UI_UX.md`


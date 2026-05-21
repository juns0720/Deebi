# P06-T02 — health 상태와 idle 애니메이션

## 목표

health 구간에 따라 캐릭터 상태 key가 바뀌고, 오래 봐도 부담 없는 idle 애니메이션을 지원한다.

## 변경 범위

- **해도 됨:** health state mapping, animation timing, reduced motion hook, 샘플 상태
- **하면 안 됨:** 개발자 제공 전 최종 포즈/표정 확정

## 작업

- health 4구간을 state key로 매핑한다.
- `healthy_idle`, `normal_idle`, `tired_idle`, `neglected_idle`을 지원한다.
- 몸 흔들림/호흡/눈 깜빡임 수준의 가벼운 애니메이션 구조를 만든다.
- reduced motion 설정을 반영한다.

## 완료 조건

- [ ] health 90/60/30/10 예시가 서로 다른 state key를 쓴다.
- [ ] idle 애니메이션을 켜고 끌 수 있다.
- [ ] reduced motion 환경에서 움직임이 줄거나 멈춘다.
- [ ] 상태별 최종 디자인은 외부 에셋에 위임되어 있다.

## 개발자 테스트

1. health 값별 preview를 확인한다.
2. reduced motion 설정에서 애니메이션이 줄어드는지 확인한다.

## 참조

- `docs/UI_UX.md`
- `docs/DECISIONS.md` 캐릭터 애니메이션 결정


# P06-T04 — 반응형 크기와 reduced motion

## 목표

캐릭터 렌더러가 모바일/데스크톱 크기 변화에도 선명하게 보이고 layout shift를 만들지 않게 한다.

## 변경 범위

- **해도 됨:** renderer sizing, aspect-ratio, CSS image-rendering, motion preference
- **하면 안 됨:** dashboard 전체 리디자인

## 작업

- 픽셀 아트가 흐려지지 않도록 렌더링 CSS를 정한다.
- stage 크기에 따라 캐릭터 scale을 안정적으로 계산한다.
- 렌더러 컨테이너의 고정 비율을 둔다.
- 애니메이션이 layout shift를 만들지 않게 한다.

## 완료 조건

- [ ] 모바일/데스크톱에서 캐릭터가 찌그러지지 않는다.
- [ ] pixelated rendering이 적용된다.
- [ ] hover/state 변경으로 layout shift가 없다.
- [ ] reduced motion 기준이 유지된다.

## 개발자 테스트

1. 360px 모바일 폭에서 캐릭터를 확인한다.
2. 1440px 데스크톱 폭에서 캐릭터가 과도하게 흐려지지 않는지 확인한다.

## 참조

- `docs/QA_CHECKLIST.md` UI QA
- `docs/UI_UX.md`


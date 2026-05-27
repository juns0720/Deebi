# P02-T10 — 반응형/접근성/QA 정리

## 목표

Phase 02에서 만든 모든 mock 화면과 직접 제작한 픽셀 에셋을 모바일/데스크톱에서 확인하고, 텍스트 겹침, 접근성, 에셋 품질 문제를 정리한다.

## 변경 범위

- **해도 됨:** Phase 02에서 만든 UI 전체의 반응형/접근성/카피 수정, 에셋 크기/좌표/manifest 보정, QA 문서/PROGRESS 갱신
- **하면 안 됨:** 새로운 제품 기능 추가, DB/API 연결, 대규모 화면 재설계

## 작업

- `/`, `/dashboard`, `/room/demo`를 모바일 360px, 태블릿, 데스크톱 폭에서 확인한다.
- `docs/PIXEL_ASSET_PIPELINE.md`의 검수 기준으로 `public/assets/rooms/**`, `public/assets/ui/**` 에셋을 확인한다.
  - 텍스트/워터마크가 이미지에 들어가지 않았는지 확인한다.
  - 투명 PNG의 alpha와 크로마키 잔여색을 확인한다.
  - base room과 오브젝트의 투시/픽셀 밀도/팔레트가 맞는지 확인한다.
  - 너무 큰 원본 에셋이 있으면 품질을 해치지 않는 선에서 압축/크기 조정을 검토한다.
- 버튼/탭/채팅/카드 텍스트 overflow를 고친다.
- 키보드 포커스와 버튼/link 역할을 점검한다.
- reduced motion 기본 처리를 확인한다.
- 십자표/개발용 그리드/흰 박스 placeholder가 최종 Phase 02 화면에 남아 있는지 검색하고 제거한다.
- 이미지 프레임을 사용한 UI에서도 HTML 텍스트, aria 상태, focus-visible이 유지되는지 확인한다.
- Phase 02 완료 결과와 남은 이슈를 `docs/PROGRESS.md` Working Notes에 기록한다.

## 완료 조건

- [ ] 모바일 360px에서 주요 텍스트가 겹치지 않는다.
- [ ] 데스크톱 1440px에서 화면이 지나치게 비어 보이지 않는다.
- [ ] `/`, `/dashboard`, `/room/demo`의 주요 CTA가 키보드로 접근 가능하다.
- [ ] 채팅 하단 시트와 방치 모드 종료 버튼이 접근 가능하다.
- [ ] 직접 제작한 room/ui/chat 에셋이 화면에서 깨지거나 흐려 보이지 않는다.
- [ ] 이미지에 굽힌 UI 텍스트가 없고, 상태값은 HTML로 유지된다.
- [ ] 개발용 십자표 배경, 임시 흰 박스 stage, 과한 SaaS 카드 느낌이 남아 있지 않다.
- [ ] Phase 02의 모든 task가 `DONE` 또는 `AWAITING REVIEW` 상태로 정리되어 있다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. 모바일 360px에서 `/`, `/dashboard`, `/room/demo`를 확인한다.
2. 데스크톱 1440px에서 같은 화면을 확인한다.
3. 키보드로 주요 버튼과 탭에 접근한다.
4. 전체 픽셀 그래픽 감성이 유지되는지 최종 판단한다.
5. `public/assets/rooms/**`와 `public/assets/ui/**`의 에셋이 실제 화면에서 쓰이고 있는지 확인한다.

## 참조

- `docs/QA_CHECKLIST.md` UI QA
- `docs/UI_UX.md`
- `docs/PIXEL_ASSET_PIPELINE.md`

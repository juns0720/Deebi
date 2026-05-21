# P01-T06 — 초기 검증과 브라우저 확인

## 목표

초기 프로젝트가 실제로 실행, 타입 검사, 빌드, 브라우저 렌더링까지 되는지 확인한다. 이 task가 끝나면 Phase 02에서 UI를 바로 구현할 수 있는 기반이 된다.

## 변경 범위

- **해도 됨:** 검증 명령 실행, 검증 결과를 `docs/PROGRESS.md`에 기록, 필요한 최소 설정 수정
- **하면 안 됨:** UI/UX Phase 02 구현 선행, 실제 외부 API 연결

## 작업

- lint, typecheck, build를 실행한다.
- dev server로 첫 화면을 확인한다.
- 서비스명, title, 이전 가칭 노출 여부를 확인한다.
- Node engine 경고, audit 결과, 미해결 항목을 기록한다.

## 완료 조건

- [ ] `npm run lint`가 통과한다.
- [ ] `npm run typecheck`가 통과한다.
- [ ] `npm run build`가 통과한다.
- [ ] 브라우저에서 첫 화면이 렌더링된다.
- [ ] 알려진 경고와 주의사항이 `docs/PROGRESS.md`에 기록되어 있다.

## 개발자 테스트

1. `npm run lint`를 실행한다.
2. `npm run typecheck`를 실행한다.
3. `npm run build`를 실행한다.
4. `npm run dev` 후 `http://localhost:3000`에서 첫 화면을 확인한다.

## 참조

- `docs/PROGRESS.md`
- `docs/QA_CHECKLIST.md`


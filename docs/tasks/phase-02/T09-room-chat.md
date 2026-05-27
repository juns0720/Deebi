# P02-T09 — 공동 룸 채팅

## 목표

공동 룸에서 친구들끼리 대화하는 느낌을 주는 mock 채팅 UI를 구현하고, 채팅 패널/입력창/말풍선도 게임 UI 프레임 에셋으로 입힌다.

## 변경 범위

- **해도 됨:** room chat components, message list, composer, mobile bottom sheet, mock validation state, chat UI frame PNG 에셋 생성/가공
- **하면 안 됨:** 실제 message API, websocket/realtime 연결, DM, 신고/차단, 파일 첨부, 읽음 표시

## 작업

- `docs/PIXEL_ASSET_PIPELINE.md`와 P02-T05 UI frame 에셋을 따른다.
- 필요하면 `public/assets/ui/` 아래에 채팅 전용 UI 프레임을 직접 제작한다.
  - `chat-panel-frame.png`
  - `chat-bubble-self.png`
  - `chat-bubble-other.png`
  - `input-frame.png`
  - `sheet-handle.png`
- 말풍선 에셋에는 텍스트를 굽지 않는다. 작성자 login, 시각, 메시지는 HTML로 유지한다.
- 데스크톱에서는 룸 스테이지 오른쪽 320~360px 채팅 패널을 만든다.
- 모바일에서는 열고 닫을 수 있는 하단 시트 채팅을 만든다.
- 모바일 하단 시트는 공동 룸 stage를 완전히 가리지 않고, 닫힘 상태에서도 새 메시지 여부를 작은 게임 UI badge로 보여준다.
- 최근 메시지 mock, 빈 상태, 긴 메시지, 긴 GitHub login 상태를 만든다.
- 입력창과 전송 버튼 mock을 만든다.
- 빈 메시지/300자 초과 오류 mock을 표시할 수 있게 한다.
- 디비 말풍선이나 시스템 봇 메시지는 공동 룸 채팅에 넣지 않는다.

## 완료 조건

- [ ] 데스크톱 채팅은 오른쪽 패널로 보이고 룸 스테이지를 가리지 않는다.
- [ ] 채팅 패널, 입력창, 말풍선이 게임 UI 프레임 감성을 유지한다.
- [ ] 채팅 프레임 에셋에 텍스트가 굽혀 있지 않다.
- [ ] 모바일 채팅은 하단 시트로 열고 닫을 수 있다.
- [ ] 빈 상태, 긴 메시지, 긴 GitHub login이 깨지지 않는다.
- [ ] 입력 오류 상태가 명확하다.
- [ ] 디비 말풍선이 공동 룸 채팅에 없다.
- [ ] DM/신고/차단/파일 첨부/읽음 표시 UI가 없다.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`가 통과한다.

## 개발자 테스트

1. `/room/demo`에서 채팅 패널을 확인한다.
2. 모바일 폭에서 하단 시트를 열고 닫는다.
3. 긴 메시지와 긴 login이 레이아웃을 깨지 않는지 확인한다.
4. 디비 말풍선/시스템 봇처럼 보이는 요소가 공동 룸 채팅에 없는지 확인한다.

## 참조

- `docs/UI_UX.md` 공동 룸 채팅 섹션
- `docs/SPEC.md` 8.9장
- `docs/PIXEL_ASSET_PIPELINE.md`

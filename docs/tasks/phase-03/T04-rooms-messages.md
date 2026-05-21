# P03-T04 — rooms, room_members, room_messages

## 목표

공동 룸과 룸 채팅을 저장할 DB 구조를 만든다.

## 변경 범위

- **해도 됨:** `rooms`, `room_members`, `room_messages` SQL, room code 제약, message index
- **하면 안 됨:** room API, 채팅 UI, 실시간 기능 구현

## 작업

- `rooms` 테이블과 code unique 기준을 만든다.
- `room_members` 테이블과 user/room 중복 방지 제약을 만든다.
- 8명 제한을 API에서 검증할 수 있도록 구조를 준비한다.
- `room_messages` 테이블, 300자 제한, 최근 메시지 조회용 index를 만든다.

## 완료 조건

- [ ] `rooms`에 code unique 제약이 있다.
- [ ] `room_members`에 room/user unique 제약이 있다.
- [ ] `room_messages`가 room과 user FK를 가진다.
- [ ] 메시지 길이 제약 또는 적용 계획이 있다.
- [ ] 최근 50개 조회가 가능한 index가 있다.

## 개발자 테스트

1. migration에서 room 관련 3개 테이블을 확인한다.
2. 같은 사용자가 같은 room에 중복 참여하지 못하는지 확인한다.
3. 메시지 조회 index가 room/time 기준인지 확인한다.

## 참조

- `docs/DATA_MODEL.md` 3.6~3.8
- `docs/SPEC.md` 8.9


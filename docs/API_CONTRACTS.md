# API_CONTRACTS.md — Deebi API 계약

이 문서는 Next.js Route Handler 기준 API 계약을 정의한다. 구현 중 계약을 바꾸면 이 문서를 먼저 갱신하고 `docs/DECISIONS.md`에 기록한다.

---

## 1. 공통 응답 형태

성공:

```ts
type ApiSuccess<T> = {
  ok: true;
  data: T;
};
```

실패:

```ts
type ApiError = {
  ok: false;
  error: {
    code: string;
    message: string;
  };
};
```

원칙:

- 사용자에게 보여도 되는 메시지만 `message`에 넣는다.
- 내부 error stack, token, SQL 원문은 응답에 넣지 않는다.
- 인증이 필요한 API는 세션이 없으면 `401`을 반환한다.
- 권한이 없으면 `403`, 대상이 없으면 `404`, 입력 오류는 `400`을 반환한다.

## 2. 인증 API

### 2.1 `GET /api/auth/login`

역할:

- GitHub authorize URL로 리다이렉트한다.

요청:

- query 없음

처리:

- OAuth `state`를 생성한다.
- state를 httpOnly 쿠키 또는 서명된 임시 값으로 저장한다.
- GitHub authorize URL로 redirect한다.

scope:

- 기본 후보: `read:user`
- 비공개 커밋 집계 확정 시: `read:user repo`

응답:

- `302` redirect

### 2.2 `GET /api/auth/callback`

역할:

- GitHub OAuth callback을 처리하고 세션을 발급한다.

query:

| 이름 | 필수 | 설명 |
|---|---|---|
| `code` | yes | GitHub authorization code |
| `state` | yes | CSRF 방지 state |

성공:

- `users` upsert
- session cookie 발급
- `/dashboard`로 redirect

실패:

- state 불일치: `/`로 redirect하며 안전한 오류 표시
- token exchange 실패: `/`로 redirect
- GitHub user fetch 실패: `/`로 redirect

### 2.3 `POST /api/auth/logout`

역할:

- 세션 쿠키를 삭제한다.

응답:

```ts
type LogoutResponse = ApiSuccess<{ redirectTo: "/" }>;
```

## 3. 사용자/대시보드 API

### 3.1 `GET /api/me`

역할:

- 현재 로그인 사용자 요약을 반환한다.

응답:

```ts
type MeResponse = ApiSuccess<{
  id: string;
  githubLogin: string;
  avatarUrl: string | null;
  points: number;
  health: number;
  lastSyncedAt: string | null;
}>;
```

### 3.2 `POST /api/sync`

역할:

- 현재 사용자의 GitHub 활동을 동기화한다.

요청 body:

```ts
type SyncRequest = {
  force?: boolean;
};
```

처리:

- `force`가 false이고 `last_synced_at`이 10분 이내면 캐시 결과 반환
- GitHub API로 커밋 활동 조회
- `commit_stats` upsert
- points delta 계산
- health 계산
- user row 갱신

응답:

```ts
type SyncResponse = ApiSuccess<{
  synced: boolean;
  usedCache: boolean;
  health: number;
  points: number;
  todayCommitCount: number;
  streakDays: number;
  pointsDelta: number;
  lastSyncedAt: string;
}>;
```

## 4. 인벤토리 API

### 4.1 `GET /api/inventory`

역할:

- 보유 아이템과 장착 상태를 반환한다.

응답:

```ts
type InventoryResponse = ApiSuccess<{
  items: Array<{
    id: string;
    name: string;
    slot: "hat" | "face" | "accessory" | "background";
    rarity: "common" | "rare" | "unique";
    acquired: boolean;
    equipped: boolean;
  }>;
  equipped: Array<{
    slot: "hat" | "face" | "accessory" | "background";
    itemId: string;
  }>;
}>;
```

### 4.2 `POST /api/inventory/equip`

역할:

- 아이템을 장착하거나 해제한다.

요청 body:

```ts
type EquipRequest =
  | {
      action: "equip";
      itemId: string;
    }
  | {
      action: "unequip";
      slot: "hat" | "face" | "accessory" | "background";
    };
```

검증:

- 장착하려는 item이 존재해야 한다.
- 사용자가 해당 item을 보유해야 한다.
- item slot과 equipped slot이 일치해야 한다.

응답:

```ts
type EquipResponse = ApiSuccess<{
  equipped: Array<{
    slot: "hat" | "face" | "accessory" | "background";
    itemId: string;
  }>;
}>;
```

## 5. 뽑기 API

### 5.1 `POST /api/gacha`

역할:

- 100포인트를 차감하고 아이템 1개를 추첨한다.

요청 body:

```ts
type GachaRequest = {};
```

처리:

- 현재 points가 100 이상인지 확인
- 100포인트 차감
- 등급 추첨
- 해당 등급 아이템 중 균등 추첨
- 미보유 아이템이면 inventory insert
- 보유 아이템이면 30포인트 환급

응답:

```ts
type GachaResponse = ApiSuccess<{
  item: {
    id: string;
    name: string;
    slot: "hat" | "face" | "accessory" | "background";
    rarity: "common" | "rare" | "unique";
  };
  duplicate: boolean;
  pointsSpent: 100;
  refundPoints: number;
  pointsAfter: number;
}>;
```

오류:

- 포인트 부족: `400`, code `INSUFFICIENT_POINTS`

## 6. 룸 API

### 6.1 `POST /api/rooms`

역할:

- 새 룸을 생성하고 생성자를 첫 멤버로 추가한다.

요청 body:

```ts
type CreateRoomRequest = {
  name: string;
};
```

검증:

- `name`은 1~30자
- 생성 직후 멤버 수는 1명이다.

응답:

```ts
type CreateRoomResponse = ApiSuccess<{
  id: string;
  code: string;
  name: string;
}>;
```

### 6.2 `POST /api/rooms/join`

역할:

- room code로 룸에 즉시 참여한다.

요청 body:

```ts
type JoinRoomRequest = {
  code: string;
};
```

응답:

```ts
type JoinRoomResponse = ApiSuccess<{
  id: string;
  code: string;
  name: string;
  alreadyJoined: boolean;
}>;
```

오류:

- 룸 멤버가 이미 8명이면 `400`, code `ROOM_FULL`

참고:

- MVP에서는 별도 친구 승인이나 참여 확인 API가 없다.
- 이미 참여한 룸은 `room_members`를 기준으로 내 룸 목록에서 다시 입장할 수 있다.

### 6.3 `GET /api/rooms/[code]`

역할:

- 룸 상세와 멤버 캐릭터 목록을 반환한다.

응답:

```ts
type RoomResponse = ApiSuccess<{
  room: {
    id: string;
    code: string;
    name: string;
    createdBy: string;
  };
  members: Array<{
    userId: string;
    githubLogin: string;
    avatarUrl: string | null;
    health: number;
    todayCommitCount: number;
    streakDays: number;
    equipped: Array<{
      slot: "hat" | "face" | "accessory" | "background";
      itemId: string;
    }>;
  }>;
}>;
```

정렬:

- `health` 내림차순
- 동률이면 `todayCommitCount` 내림차순
- 그래도 동률이면 `githubLogin` 오름차순

### 6.4 `POST /api/rooms/[code]/leave`

역할:

- 현재 사용자가 룸에서 나간다.

응답:

```ts
type LeaveRoomResponse = ApiSuccess<{
  left: true;
  redirectTo: "/dashboard";
}>;
```

### 6.5 `GET /api/rooms/[code]/messages`

역할:

- 현재 사용자가 참여 중인 룸의 최근 채팅 메시지를 반환한다.

query:

| 이름 | 필수 | 설명 |
|---|---|---|
| `limit` | no | 기본 50, 최대 100 |
| `before` | no | 이 ISO 시각보다 이전 메시지를 조회할 때 사용 |

응답:

```ts
type RoomMessagesResponse = ApiSuccess<{
  messages: Array<{
    id: string;
    roomId: string;
    userId: string;
    githubLogin: string;
    avatarUrl: string | null;
    body: string;
    createdAt: string;
  }>;
}>;
```

정렬:

- DB 조회는 최신순으로 가져올 수 있으나, API 응답은 화면 표시를 위해 오래된 메시지 -> 최신 메시지 순서로 반환한다.

오류:

- 세션 없음: `401`
- 룸 없음: `404`, code `ROOM_NOT_FOUND`
- 룸 멤버가 아님: `403`, code `ROOM_FORBIDDEN`

### 6.6 `POST /api/rooms/[code]/messages`

역할:

- 현재 사용자가 참여 중인 룸에 텍스트 메시지를 작성한다.

요청 body:

```ts
type SendRoomMessageRequest = {
  body: string;
};
```

검증:

- `body`는 trim 후 1~300자
- 작성자는 해당 룸의 현재 멤버여야 한다.
- 클라이언트가 보낸 `userId`, `githubLogin`, `createdAt`은 받지 않는다.

응답:

```ts
type SendRoomMessageResponse = ApiSuccess<{
  message: {
    id: string;
    roomId: string;
    userId: string;
    githubLogin: string;
    avatarUrl: string | null;
    body: string;
    createdAt: string;
  };
}>;
```

오류:

- 세션 없음: `401`
- 룸 없음: `404`, code `ROOM_NOT_FOUND`
- 룸 멤버가 아님: `403`, code `ROOM_FORBIDDEN`
- 빈 메시지 또는 300자 초과: `400`, code `INVALID_MESSAGE`

MVP 채팅 범위:

- MVP는 공동 룸 내부 텍스트 채팅만 지원한다.
- 전역 채팅, DM, 메시지 수정/삭제, 신고/차단, 파일 첨부, 읽음 표시는 지원하지 않는다.
- 웹소켓이나 Supabase Realtime은 필수가 아니다. 우선 최근 메시지 조회 + 전송 + 짧은 폴링으로 구현할 수 있다.

## 7. 페이지 데이터 경계

Server Component에서 직접 서버 함수를 호출할 수 있다. 단, 페이지가 API 계약과 다른 shape을 쓰면 안 된다. 페이지용 내부 함수도 위 타입과 같은 의미를 유지한다.

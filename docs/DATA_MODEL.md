# DATA_MODEL.md — Deebi 데이터 모델

이 문서는 Supabase Postgres 기준 데이터 모델을 정의한다. DB 마이그레이션을 작성할 때 이 문서를 기준으로 한다.

---

## 1. 공통 원칙

- 모든 primary key는 가능하면 DB에서 생성한다.
- 시간 필드는 `timestamptz`를 사용한다.
- GitHub access token은 `users.access_token`에 저장하지만 서버 전용으로 취급한다.
- RLS 정책은 Phase 03에서 함께 작성한다.
- 클라이언트가 보내는 `user_id`는 신뢰하지 않는다. 서버 세션에서 확인한 user id를 사용한다.
- 삭제보다 보존을 우선한다. 단, inventory/equipped/room_members 같은 관계 데이터는 명시적 삭제를 허용한다.
- 채팅 메시지는 룸 멤버에게만 공개한다. 서버는 세션 사용자와 룸 멤버십을 검증한 뒤 저장/조회한다.

## 2. enum 후보

Postgres enum 또는 check constraint로 관리한다.

```sql
item_slot = 'hat' | 'face' | 'accessory' | 'background'
item_rarity = 'common' | 'rare' | 'unique'
```

MVP에서는 enum을 써도 되고 check constraint를 써도 된다. 단, TypeScript union type과 값이 1:1로 맞아야 한다.

## 3. 테이블

### 3.1 `users`

로그인 사용자와 게임 상태 캐시를 저장한다.

| 컬럼 | 타입 | 제약 | 설명 |
|---|---|---|---|
| `id` | `uuid` | pk, default `gen_random_uuid()` | 내부 사용자 id |
| `github_id` | `bigint` | unique, not null | GitHub user id |
| `github_login` | `text` | not null | GitHub login |
| `avatar_url` | `text` | nullable | GitHub avatar URL |
| `access_token` | `text` | not null | GitHub API 호출용 token, 서버 전용 |
| `points` | `int` | not null, default 0, `>= 0` | 누적 사용 가능 포인트 |
| `health` | `int` | not null, default 50, `0..100` | 마지막 동기화 계산값 |
| `created_at` | `timestamptz` | not null, default now() | 생성 시각 |
| `updated_at` | `timestamptz` | not null, default now() | 수정 시각 |
| `last_synced_at` | `timestamptz` | nullable | 마지막 GitHub 동기화 시각 |

인덱스:

- unique index on `github_id`
- index on `github_login`

주의:

- API 응답에 `access_token`을 포함하지 않는다.
- service role 외에는 `access_token` 직접 조회를 금지한다.

### 3.2 `commit_stats`

날짜별 커밋 집계 캐시와 보상 중복 방지에 사용한다.

| 컬럼 | 타입 | 제약 | 설명 |
|---|---|---|---|
| `user_id` | `uuid` | pk part, fk `users.id` on delete cascade | 사용자 |
| `date` | `date` | pk part | 커밋 날짜 |
| `commit_count` | `int` | not null, default 0, `>= 0` | 해당 날짜 커밋 수 |
| `rewarded_commit_count` | `int` | not null, default 0, `>= 0` | 포인트 지급에 반영한 커밋 수 |
| `created_at` | `timestamptz` | not null, default now() | 생성 시각 |
| `updated_at` | `timestamptz` | not null, default now() | 수정 시각 |

primary key:

- `(user_id, date)`

포인트 지급 원칙:

- `commit_count - rewarded_commit_count`가 양수인 경우만 신규 보상 대상이다.
- 보상 지급 후 `rewarded_commit_count`를 새 `commit_count`까지 올린다.

### 3.3 `items`

아이템 마스터 데이터다.

| 컬럼 | 타입 | 제약 | 설명 |
|---|---|---|---|
| `id` | `text` | pk | 고정 item id |
| `name` | `text` | not null | 한국어 이름 |
| `slot` | `text` | not null | `hat`, `face`, `accessory`, `background` |
| `rarity` | `text` | not null | `common`, `rare`, `unique` |
| `sort_order` | `int` | not null | UI 표시 순서 |
| `created_at` | `timestamptz` | not null, default now() | 생성 시각 |

seed 데이터는 `docs/SPEC.md` 10장을 따른다.

### 3.4 `inventory`

사용자가 보유한 아이템이다.

| 컬럼 | 타입 | 제약 | 설명 |
|---|---|---|---|
| `user_id` | `uuid` | pk part, fk `users.id` on delete cascade | 사용자 |
| `item_id` | `text` | pk part, fk `items.id` | 아이템 |
| `acquired_at` | `timestamptz` | not null, default now() | 획득 시각 |

primary key:

- `(user_id, item_id)`

MVP 정책:

- 같은 아이템은 1개만 보유한다.
- 중복 뽑기는 inventory insert 대신 30포인트 환급 처리한다.

### 3.5 `equipped`

슬롯별 장착 상태다.

| 컬럼 | 타입 | 제약 | 설명 |
|---|---|---|---|
| `user_id` | `uuid` | pk part, fk `users.id` on delete cascade | 사용자 |
| `slot` | `text` | pk part | 슬롯 |
| `item_id` | `text` | fk `items.id` | 장착 아이템 |
| `updated_at` | `timestamptz` | not null, default now() | 수정 시각 |

primary key:

- `(user_id, slot)`

검증:

- `equipped.slot`은 장착하려는 `items.slot`과 같아야 한다.
- 사용자가 `inventory`에 보유한 아이템만 장착 가능하다.

### 3.6 `rooms`

룸 메타데이터다.

| 컬럼 | 타입 | 제약 | 설명 |
|---|---|---|---|
| `id` | `uuid` | pk, default `gen_random_uuid()` | 내부 room id |
| `code` | `text` | unique, not null | 공유용 짧은 코드 |
| `name` | `text` | not null | 룸 이름 |
| `created_by` | `uuid` | fk `users.id` | 생성자 |
| `created_at` | `timestamptz` | not null, default now() | 생성 시각 |
| `updated_at` | `timestamptz` | not null, default now() | 수정 시각 |

코드 정책:

- 기본은 6자리 대문자 알파벳 + 숫자.
- 헷갈리는 문자는 제외할 수 있다. 예: `0`, `O`, `1`, `I`.
- 충돌 시 재시도한다.

### 3.7 `room_members`

룸 참여 관계다.

| 컬럼 | 타입 | 제약 | 설명 |
|---|---|---|---|
| `room_id` | `uuid` | pk part, fk `rooms.id` on delete cascade | 룸 |
| `user_id` | `uuid` | pk part, fk `users.id` on delete cascade | 사용자 |
| `joined_at` | `timestamptz` | not null, default now() | 참여 시각 |

primary key:

- `(room_id, user_id)`

MVP 정책:

- 한 사용자는 여러 룸에 참여 가능하다.
- 같은 룸에는 한 번만 참여할 수 있다.
- 한 룸의 멤버 수 상한은 8명이다.
- 룸 삭제는 MVP 제외다.

### 3.8 `room_messages`

공동 룸 안에서 친구들이 주고받는 간단한 텍스트 채팅 메시지다.

| 컬럼 | 타입 | 제약 | 설명 |
|---|---|---|---|
| `id` | `uuid` | pk, default `gen_random_uuid()` | 내부 message id |
| `room_id` | `uuid` | fk `rooms.id` on delete cascade, not null | 메시지가 속한 룸 |
| `user_id` | `uuid` | fk `users.id` on delete cascade, not null | 작성자 |
| `body` | `text` | not null, length 1..300 | 메시지 본문 |
| `created_at` | `timestamptz` | not null, default now() | 작성 시각 |

인덱스:

- index on `(room_id, created_at desc)`
- index on `(user_id, created_at desc)`

MVP 정책:

- 메시지는 같은 룸의 현재 멤버만 조회할 수 있다.
- 메시지 작성자는 해당 룸의 현재 멤버여야 한다.
- 메시지는 일반 사용자에게 수정/삭제 기능을 제공하지 않는다.
- 디비나 시스템 봇이 공동 룸 채팅 메시지를 자동 작성하지 않는다.
- 신고/차단/멘션/파일 첨부/읽음 표시는 MVP 제외다.
- 최근 메시지 조회 기본값은 50개, 최대값은 100개로 둔다.
- room leave 후에는 해당 사용자가 새 메시지를 작성하거나 조회할 수 없다.

## 4. 조회용 데이터 형태

### 4.1 공개 캐릭터 프로필

룸과 대시보드에서 공통으로 사용한다.

```ts
type PublicCharacterProfile = {
  userId: string;
  githubLogin: string;
  avatarUrl: string | null;
  health: number;
  points?: number;
  todayCommitCount: number;
  streakDays: number;
  equipped: Array<{
    slot: "hat" | "face" | "accessory" | "background";
    itemId: string;
  }>;
};
```

주의:

- 룸에서는 `points`를 노출하지 않아도 된다.
- `access_token`은 절대 포함하지 않는다.

### 4.2 공개 룸 메시지

룸 채팅 UI와 API에서 사용한다.

```ts
type PublicRoomMessage = {
  id: string;
  roomId: string;
  userId: string;
  githubLogin: string;
  avatarUrl: string | null;
  body: string;
  createdAt: string;
};
```

주의:

- `body`는 서버에서 trim 후 저장한다.
- 빈 문자열, 300자 초과 문자열은 저장하지 않는다.
- 같은 룸 멤버가 아닌 사용자에게는 메시지를 반환하지 않는다.

## 5. RLS 방향

Phase 03에서 최소 아래 정책을 둔다.

- `users`: 본인 공개 필드 읽기 허용, `access_token`은 일반 클라이언트 접근 금지
- `commit_stats`: 본인 데이터만 읽기 허용
- `items`: 모든 로그인 사용자가 읽기 가능
- `inventory`: 본인만 읽기 가능
- `equipped`: 본인 읽기/쓰기, 같은 룸 멤버에게 공개 조회 가능
- `rooms`: 룸 멤버 읽기 가능
- `room_members`: 같은 룸 멤버 읽기 가능, 본인 참여/나가기 가능
- `room_messages`: 같은 룸 멤버 읽기/작성 가능, 작성자라도 일반 삭제/수정은 MVP에서 열지 않음

MVP에서 모든 DB 접근을 service role 서버 API로만 처리한다면 RLS는 방어막으로 두고, 클라이언트 직접 접근은 열지 않는다.

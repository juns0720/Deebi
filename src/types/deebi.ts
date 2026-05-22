export type HealthBand = "great" | "normal" | "tired" | "idle";

export type ItemRarity = "common" | "rare" | "unique";

export type ItemSlot = "hat" | "face" | "accessory" | "background";

export type RoomMood = "quiet" | "active" | "idle";

export interface DeebiUserSummary {
  id: string;
  githubLogin: string;
  displayName: string;
  health: number;
  healthBand: HealthBand;
  todayCommitCount: number;
  streakDays: number;
  points: number;
}

export interface DeebiItemSummary {
  id: string;
  name: string;
  slot: ItemSlot;
  rarity: ItemRarity;
  owned: boolean;
}

export interface EquippedItemSummary {
  slot: ItemSlot;
  itemId: string;
}

export interface JoinedRoomPreview {
  code: string;
  name: string;
  memberCount: number;
  activeTodayCount: number;
  mood: RoomMood;
}

export interface DashboardMockData {
  user: DeebiUserSummary;
  equipped: EquippedItemSummary[];
  inventory: DeebiItemSummary[];
  joinedRooms: JoinedRoomPreview[];
}

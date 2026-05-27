import type { DashboardMockData, DeebiItemSummary } from "@/types/deebi";

export const mockInventoryItems: DeebiItemSummary[] = [
  {
    id: "hat_cap",
    name: "야구모자",
    slot: "hat",
    rarity: "common",
    owned: true,
  },
  {
    id: "face_glasses",
    name: "안경",
    slot: "face",
    rarity: "common",
    owned: true,
  },
  {
    id: "acc_headphone",
    name: "헤드폰",
    slot: "accessory",
    rarity: "rare",
    owned: false,
  },
  {
    id: "bg_window",
    name: "창문 배경",
    slot: "background",
    rarity: "common",
    owned: true,
  },
];

export const mockDashboardData: DashboardMockData = {
  user: {
    id: "mock-user-1",
    githubLogin: "deebi-maker",
    displayName: "DeeBi Maker",
    health: 82,
    healthBand: "great",
    todayCommitCount: 12,
    streakDays: 5,
    points: 240,
  },
  equipped: [
    {
      slot: "hat",
      itemId: "hat_cap",
    },
    {
      slot: "face",
      itemId: "face_glasses",
    },
    {
      slot: "background",
      itemId: "bg_window",
    },
  ],
  inventory: mockInventoryItems,
  joinedRooms: [
    {
      code: "DEEBI",
      name: "밤샘 리팩터링 방",
      memberCount: 4,
      activeTodayCount: 3,
      mood: "active",
    },
    {
      code: "PIXEL",
      name: "픽셀 토큰 실험실",
      memberCount: 2,
      activeTodayCount: 1,
      mood: "quiet",
    },
  ],
};

import type { RoomLayerAsset, RoomMenuItem, RoomObjectAction } from "@/types/room-assets";

export const myRoomStageSize = {
  width: 1600,
  height: 900,
} as const;

export const myRoomLayers: RoomLayerAsset[] = [
  {
    id: "base-room",
    label: "내 방 배경",
    src: "/assets/rooms/my-room/base-room.png",
    x: 0,
    y: 0,
    width: 1600,
    anchor: "top-left",
    zIndex: 0,
  },
  {
    id: "foreground-scene",
    label: "책상과 DeeBi",
    src: "/assets/rooms/my-room/foreground-scene.png",
    x: 0,
    y: 0,
    width: 1600,
    anchor: "top-left",
    zIndex: 10,
  },
];

export const myRoomMenuItems: RoomMenuItem[] = [
  {
    id: "rooms",
    label: "룸",
    description: "함께하는 방 탭으로 이동",
    iconSrc: "/assets/rooms/my-room/menu-room.png",
    status: "active",
    targetTab: "rooms",
  },
  {
    id: "gacha",
    label: "뽑기",
    description: "다음 task에서 연결할 목업 슬롯",
    iconSrc: "/assets/rooms/my-room/menu-gacha-locked.png",
    status: "locked",
  },
  {
    id: "bag",
    label: "가방",
    description: "인벤토리 dock task에서 연결할 목업 슬롯",
    iconSrc: "/assets/rooms/my-room/menu-bag-locked.png",
    status: "locked",
  },
];

export const myRoomObjectActions: RoomObjectAction[] = [
  {
    id: "rooms",
    label: "문",
    description: "함께하는 방으로 이동",
    iconSrc: "/assets/rooms/my-room/object-door.png",
  },
  {
    id: "status",
    label: "상태 보드",
    description: "건강도, streak, 포인트 보기",
    iconSrc: "/assets/rooms/my-room/object-status-board.png",
  },
  {
    id: "bag",
    label: "가방",
    description: "장착과 보유 아이템 보기",
    iconSrc: "/assets/rooms/my-room/object-bag.png",
  },
  {
    id: "gacha",
    label: "뽑기 장치",
    description: "포인트 보상 mock 확인",
    iconSrc: "/assets/rooms/my-room/object-gacha.png",
  },
];

export const overworkCommitThreshold = 8;

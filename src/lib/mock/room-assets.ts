import type { RoomLayerAsset, RoomObjectAction } from "@/types/room-assets";

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

export const myRoomObjectActions: RoomObjectAction[] = [
  {
    id: "rooms",
    label: "놀러가기",
    description: "함께하는 방으로 이동",
    iconSrc: "/assets/rooms/my-room/object-visit.png",
  },
  {
    id: "status",
    label: "상태",
    description: "DeeBi 컨디션과 작업 리듬 확인",
    iconSrc: "/assets/rooms/my-room/object-status.png",
  },
  {
    id: "bag",
    label: "꾸미기",
    description: "장착 슬롯과 보유 아이템 확인",
    iconSrc: "/assets/rooms/my-room/object-customize.png",
  },
  {
    id: "gacha",
    label: "뽑기",
    description: "포인트 보상과 뽑기 상태 확인",
    iconSrc: "/assets/rooms/my-room/object-gacha.png",
  },
];

export const overworkCommitThreshold = 8;

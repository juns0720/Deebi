export type RoomLayerAnchor = "top-left" | "bottom-left" | "bottom-center" | "center";

export interface RoomLayerAsset {
  id: string;
  label: string;
  src: string;
  x: number;
  y: number;
  width: number;
  anchor: RoomLayerAnchor;
  zIndex: number;
  interactive?: boolean;
  targetTab?: "my-room" | "rooms";
}

export type RoomObjectActionId = "rooms" | "status" | "bag" | "gacha";

export interface RoomObjectAction {
  id: RoomObjectActionId;
  label: string;
  description: string;
  iconSrc: string;
}

export interface RoomMenuItem {
  id: "rooms" | "gacha" | "bag";
  label: string;
  description: string;
  iconSrc: string;
  status: "active" | "locked";
  targetTab?: "rooms";
}

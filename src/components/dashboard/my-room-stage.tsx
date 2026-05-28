"use client";

import Image from "next/image";
import { myRoomLayers, myRoomStageSize, overworkCommitThreshold } from "@/lib/mock/room-assets";
import type { DashboardMockData, HealthBand } from "@/types/deebi";
import type { RoomLayerAsset } from "@/types/room-assets";

const healthStageMeta: Record<HealthBand, { label: string; copy: string; tone: "success" | "warning" | "danger" | "muted" }> = {
  great: {
    label: "최상",
    copy: "방은 밝고 DeeBi는 멀쩡해요.",
    tone: "success",
  },
  normal: {
    label: "보통",
    copy: "오늘도 무난하게 유지 중이에요.",
    tone: "muted",
  },
  tired: {
    label: "나쁨",
    copy: "조금 피곤한 기색이 보여요.",
    tone: "warning",
  },
  idle: {
    label: "방치",
    copy: "잠깐 돌봄이 필요한 상태예요.",
    tone: "danger",
  },
};

function layerTransform(anchor: RoomLayerAsset["anchor"]) {
  if (anchor === "center") {
    return "translate(-50%, -50%)";
  }

  if (anchor === "bottom-center") {
    return "translate(-50%, -100%)";
  }

  if (anchor === "bottom-left") {
    return "translateY(-100%)";
  }

  return undefined;
}

function stagePercent(value: number, axis: "x" | "y") {
  const base = axis === "x" ? myRoomStageSize.width : myRoomStageSize.height;
  return `${(value / base) * 100}%`;
}

function RoomLayer({ layer }: { layer: RoomLayerAsset }) {
  const width = `${(layer.width / myRoomStageSize.width) * 100}%`;
  const left = stagePercent(layer.x, "x");
  const top = stagePercent(layer.y, "y");

  return (
    <div
      className="my-room-stage__layer pixel-grid-art"
      style={{
        aspectRatio: `${myRoomStageSize.width} / ${myRoomStageSize.height}`,
        left,
        top,
        transform: layerTransform(layer.anchor),
        width,
        zIndex: layer.zIndex,
      }}
    >
      <Image alt="" aria-hidden="true" fill priority={layer.id === "base-room"} sizes="(max-width: 639px) 1120px, 70vw" src={layer.src} unoptimized />
    </div>
  );
}

function OverworkEffect({ enabled }: { enabled: boolean }) {
  if (!enabled) {
    return null;
  }

  return (
    <div aria-hidden="true" className="my-room-stage__overwork">
      <span className="my-room-stage__dark-eye my-room-stage__dark-eye--left" />
      <span className="my-room-stage__dark-eye my-room-stage__dark-eye--right" />
      <span className="my-room-stage__stubble my-room-stage__stubble--one" />
      <span className="my-room-stage__stubble my-room-stage__stubble--two" />
      <span className="my-room-stage__fly my-room-stage__fly--one" />
      <span className="my-room-stage__fly my-room-stage__fly--two" />
    </div>
  );
}

export function MyRoomStage({ data }: { data: DashboardMockData }) {
  const healthMeta = healthStageMeta[data.user.healthBand];
  const isOverworked = data.user.todayCommitCount >= overworkCommitThreshold;

  return (
    <section
      aria-label={`내 방 스테이지, DeeBi 상태 ${healthMeta.label}`}
      className={`my-room-stage my-room-stage--${data.user.healthBand}`}
    >
      <div className="my-room-stage__scene">
        {myRoomLayers.map((layer) => (
          <RoomLayer key={layer.id} layer={layer} />
        ))}
        <OverworkEffect enabled={isOverworked} />
      </div>
      <p className="sr-only">{isOverworked ? `오늘 ${data.user.todayCommitCount}커밋, 살짝 과열 중` : healthMeta.copy}</p>
    </section>
  );
}

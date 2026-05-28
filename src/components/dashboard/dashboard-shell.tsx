"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { GameRoomFrame } from "@/components/dashboard/game-room-frame";
import type { DashboardTabId } from "@/components/dashboard/game-room-frame";
import { MyRoomStage } from "@/components/dashboard/my-room-stage";
import { myRoomObjectActions } from "@/lib/mock/room-assets";
import type {
  DashboardMockData,
  DeebiItemSummary,
  HealthBand,
  ItemSlot,
  JoinedRoomPreview,
  RoomMood,
} from "@/types/deebi";
import type { RoomObjectActionId } from "@/types/room-assets";

const healthBandMeta: Record<HealthBand, { label: string; copy: string; tone: string }> = {
  great: { label: "최상", copy: "방은 밝고 DeeBi는 멀쩡해요.", tone: "success" },
  normal: { label: "보통", copy: "오늘도 무난하게 유지 중이에요.", tone: "muted" },
  tired: { label: "나쁨", copy: "조금 피곤한 기색이 보여요.", tone: "warning" },
  idle: { label: "방치", copy: "잠깐 돌봄이 필요한 상태예요.", tone: "danger" },
};

const roomMoodMeta: Record<RoomMood, { label: string; tone: string }> = {
  active: { label: "작업 중", tone: "success" },
  quiet: { label: "조용함", tone: "muted" },
  idle: { label: "쉬는 중", tone: "warning" },
};

const slotLabels: Record<ItemSlot, string> = {
  accessory: "액세서리",
  background: "배경",
  face: "얼굴",
  hat: "모자",
};

const commandTitles: Record<Exclude<RoomObjectActionId, "rooms">, { eyebrow: string; title: string; copy: string }> = {
  bag: {
    eyebrow: "STYLE",
    title: "꾸미기",
    copy: "장착 슬롯과 보유 아이템을 살펴봐요.",
  },
  gacha: {
    eyebrow: "GACHA",
    title: "뽑기",
    copy: "포인트와 뽑기 준비 상태를 확인해요.",
  },
  status: {
    eyebrow: "STATUS",
    title: "상태",
    copy: "DeeBi 컨디션과 작업 리듬을 확인해요.",
  },
};

function getItemById(items: DeebiItemSummary[], itemId: string) {
  return items.find((item) => item.id === itemId);
}

function CommandHeader({ actionId }: { actionId: Exclude<RoomObjectActionId, "rooms"> }) {
  const meta = commandTitles[actionId];

  return (
    <div className="game-command__header">
      <p>{meta.eyebrow}</p>
      <h2>{meta.title}</h2>
      <span>{meta.copy}</span>
    </div>
  );
}

function HealthMeter({ value }: { value: number }) {
  return (
    <div className="game-health-meter" aria-label={`건강도 ${value}%`}>
      <i style={{ width: `${value}%` }} />
    </div>
  );
}

function StatusCommand({ data }: { data: DashboardMockData }) {
  const healthMeta = healthBandMeta[data.user.healthBand];
  const ownedCount = data.inventory.filter((item) => item.owned).length;

  return (
    <div className="game-command__section">
      <div className="game-command__status-line">
        <span data-tone={healthMeta.tone}>{healthMeta.label}</span>
        <strong>{data.user.health}%</strong>
      </div>
      <HealthMeter value={data.user.health} />
      <p className="game-command__copy">{healthMeta.copy}</p>
      <div className="game-command__stat-grid">
        <div>
          <span>STREAK</span>
          <strong>{data.user.streakDays}일</strong>
        </div>
        <div>
          <span>OWNED</span>
          <strong>{ownedCount}/{data.inventory.length}</strong>
        </div>
        <div>
          <span>SYNC</span>
          <strong>MOCK</strong>
        </div>
      </div>
    </div>
  );
}

function InventorySlot({ label, item, equipped = false }: { label: string; item?: DeebiItemSummary; equipped?: boolean }) {
  return (
    <div className="game-inventory-slot" data-equipped={equipped}>
      <span>{label}</span>
      <strong>{item?.name ?? "빈 슬롯"}</strong>
    </div>
  );
}

function BagCommand({ data }: { data: DashboardMockData }) {
  const equippedSlots = (Object.keys(slotLabels) as ItemSlot[]).map((slot) => {
    const equipped = data.equipped.find((item) => item.slot === slot);
    return {
      item: equipped ? getItemById(data.inventory, equipped.itemId) : undefined,
      slot,
    };
  });

  return (
    <div className="game-command__section">
      <div className="game-command__slot-grid">
        {equippedSlots.map(({ item, slot }) => (
          <InventorySlot equipped={Boolean(item)} item={item} key={slot} label={slotLabels[slot]} />
        ))}
      </div>
      <ul className="game-command__item-list" aria-label="보유 아이템">
        {data.inventory.map((item) => (
          <li data-owned={item.owned} key={item.id}>
            <span>{item.name}</span>
            <b>{item.owned ? "보유" : "미보유"}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GachaCommand({ data }: { data: DashboardMockData }) {
  const canDraw = data.user.points >= 100;

  return (
    <div className="game-command__section">
      <div className="game-command__status-line">
        <span data-tone={canDraw ? "success" : "warning"}>{canDraw ? "뽑기 가능" : "포인트 부족"}</span>
        <strong>{data.user.points}P</strong>
      </div>
      <p className="game-command__copy">
        실제 뽑기 API는 이후 task에서 연결해요. 지금은 버튼과 상태 표시만 확인합니다.
      </p>
      <button className="game-command__button" disabled type="button">
        다음 단계에서 연결
      </button>
    </div>
  );
}

function MyRoomCommandPanel({
  actionId,
  data,
}: {
  actionId: Exclude<RoomObjectActionId, "rooms">;
  data: DashboardMockData;
}) {
  return (
    <div className="game-command">
      <CommandHeader actionId={actionId} />
      {actionId === "status" ? <StatusCommand data={data} /> : null}
      {actionId === "bag" ? <BagCommand data={data} /> : null}
      {actionId === "gacha" ? <GachaCommand data={data} /> : null}
    </div>
  );
}

function MyRoomLogDock({ data }: { data: DashboardMockData }) {
  const healthMeta = healthBandMeta[data.user.healthBand];
  const logs = [
    `오늘 커밋 ${data.user.todayCommitCount}개가 sync mock에 반영됐어요.`,
    `${data.user.streakDays}일 연속 기록이 이어지고 있어요.`,
    data.user.todayCommitCount >= 8 ? "작업량이 높아 DeeBi가 살짝 과열된 상태예요." : healthMeta.copy,
  ];

  return (
    <div className="game-log">
      <div className="game-log__title">
        <span>SYNC LOG</span>
        <b>오늘 {data.user.todayCommitCount}커밋</b>
      </div>
      <div className="game-log__sync-card">
        <div>
          <span>HEALTH</span>
          <strong>{data.user.health}%</strong>
        </div>
        <div>
          <span>STREAK</span>
          <strong>{data.user.streakDays}일</strong>
        </div>
        <div>
          <span>SYNC</span>
          <strong>MOCK</strong>
        </div>
      </div>
      <ol>
        {logs.map((log) => (
          <li key={log}>{log}</li>
        ))}
      </ol>
    </div>
  );
}

function SharedRoomStage({ rooms }: { rooms: JoinedRoomPreview[] }) {
  return (
    <div className="shared-room-stage">
      <div className="shared-room-stage__board">
        <p>공동 룸 스테이지 준비 중</p>
        <strong>{rooms.length}개 룸 참여 중</strong>
      </div>
      <div className="shared-room-stage__list">
        {rooms.map((room) => {
          const mood = roomMoodMeta[room.mood];
          return (
            <article className="shared-room-stage__card" data-tone={mood.tone} key={room.code}>
              <span>#{room.code}</span>
              <h2>{room.name}</h2>
              <p>{room.memberCount}명 / 오늘 {room.activeTodayCount}명 활동</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function SharedRoomCommand({ rooms }: { rooms: JoinedRoomPreview[] }) {
  const activeRooms = rooms.filter((room) => room.mood === "active").length;

  return (
    <div className="game-command">
      <div className="game-command__header">
        <p>ROOM</p>
        <h2>함께하는 방</h2>
        <span>실제 룸 API는 이후 단계에서 연결해요.</span>
      </div>
      <div className="game-command__stat-grid">
        <div>
          <span>JOINED</span>
          <strong>{rooms.length}</strong>
        </div>
        <div>
          <span>ACTIVE</span>
          <strong>{activeRooms}</strong>
        </div>
      </div>
      <button className="game-command__button" disabled type="button">
        새 룸 만들기
      </button>
      <button className="game-command__button" disabled type="button">
        코드로 참여
      </button>
    </div>
  );
}

function SharedRoomDock() {
  return (
    <div className="game-log">
      <div className="game-log__title">
        <span>CHAT DOCK</span>
        <b>준비 중</b>
      </div>
      <ol>
        <li>공동 룸 채팅은 같은 하단 dock 자리에 들어올 예정이에요.</li>
        <li>이번 단계에서는 내 방 상태 로그와 레이아웃 충돌이 없는지만 확인합니다.</li>
      </ol>
    </div>
  );
}

function HeaderAssetMenu({
  activeTab,
  selectedAction,
  onOpenRooms,
  onSelectAction,
}: {
  activeTab: DashboardTabId;
  selectedAction: Exclude<RoomObjectActionId, "rooms">;
  onOpenRooms: () => void;
  onSelectAction: (actionId: Exclude<RoomObjectActionId, "rooms">) => void;
}) {
  return (
    <div className="game-room-frame__asset-menu">
      {myRoomObjectActions.map((action) => {
        const isActive = action.id === "rooms" ? activeTab === "rooms" : activeTab === "my-room" && selectedAction === action.id;
        const activate = () => {
          if (action.id === "rooms") {
            onOpenRooms();
            return;
          }

          onSelectAction(action.id);
        };

        return (
          <button
            aria-label={`${action.label}: ${action.description}`}
            aria-pressed={isActive}
            className="game-room-frame__asset-menu-item"
            data-active={isActive}
            key={action.id}
            onClick={activate}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                activate();
              }
            }}
            type="button"
          >
            <Image alt="" aria-hidden="true" className="pixel-grid-art" height={64} src={action.iconSrc} unoptimized width={64} />
            <span>{action.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export function DashboardShell({ data }: { data: DashboardMockData }) {
  const [activeTab, setActiveTab] = useState<DashboardTabId>("my-room");
  const [selectedAction, setSelectedAction] = useState<Exclude<RoomObjectActionId, "rooms">>("status");

  const command = useMemo(() => {
    if (activeTab === "rooms") {
      return <SharedRoomCommand rooms={data.joinedRooms} />;
    }

    return <MyRoomCommandPanel actionId={selectedAction} data={data} />;
  }, [activeTab, data, selectedAction]);

  const dock = activeTab === "rooms" ? <SharedRoomDock /> : <MyRoomLogDock data={data} />;
  const menu = (
    <HeaderAssetMenu
      activeTab={activeTab}
      onOpenRooms={() => setActiveTab("rooms")}
      onSelectAction={(actionId) => {
        setActiveTab("my-room");
        setSelectedAction(actionId);
      }}
      selectedAction={selectedAction}
    />
  );

  return (
    <GameRoomFrame activeTab={activeTab} command={command} dock={dock} menu={menu}>
      {activeTab === "my-room" ? <MyRoomStage data={data} /> : <SharedRoomStage rooms={data.joinedRooms} />}
    </GameRoomFrame>
  );
}

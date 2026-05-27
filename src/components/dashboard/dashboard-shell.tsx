"use client";

import { useMemo, useState } from "react";
import { PixelBadge, PixelButton, PixelPanel, PixelTab } from "@/components/ui";
import type { DashboardMockData, HealthBand, JoinedRoomPreview, RoomMood } from "@/types/deebi";

type DashboardTabId = "my-room" | "rooms";

const dashboardTabs: Array<{ id: DashboardTabId; label: string }> = [
  { id: "my-room", label: "내 방" },
  { id: "rooms", label: "함께하는 방" },
];

const healthBandMeta: Record<HealthBand, { label: string; tone: "success" | "warning" | "danger" | "muted" }> = {
  great: { label: "최상", tone: "success" },
  normal: { label: "보통", tone: "muted" },
  tired: { label: "나쁨", tone: "warning" },
  idle: { label: "방치", tone: "danger" },
};

const roomMoodMeta: Record<RoomMood, { label: string; tone: "success" | "warning" | "danger" | "muted" }> = {
  active: { label: "작업 중", tone: "success" },
  quiet: { label: "조용함", tone: "muted" },
  idle: { label: "쉬는 중", tone: "warning" },
};

function StatTile({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <PixelPanel className="min-h-[112px] p-4">
      <p className="text-xs font-black uppercase text-[#6f6257]">{label}</p>
      <p className="mt-3 text-2xl font-black leading-none [font-family:var(--font-pixel-title)] sm:text-3xl">
        {value}
      </p>
      {detail ? <p className="pixel-copy mt-3 text-sm leading-6 text-[#4c4038]">{detail}</p> : null}
    </PixelPanel>
  );
}

function RoomShellPreview({ healthBand }: { healthBand: HealthBand }) {
  const faceClass = healthBand === "great" ? "bg-[#a8e6c1]" : healthBand === "tired" ? "bg-[#f0b84b]" : "bg-[#fffaf0]";

  return (
    <PixelPanel className="relative min-h-[320px] w-full min-w-0 overflow-hidden bg-[#f7e6c2] p-0 sm:min-h-[420px]">
      <div className="absolute inset-x-0 top-0 h-[60%] bg-[linear-gradient(90deg,rgba(23,18,15,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(23,18,15,0.04)_1px,transparent_1px),#fff2d2] bg-[length:20px_20px]" />
      <div className="absolute inset-x-0 bottom-0 h-[44%] border-t-2 border-[#17120f] bg-[linear-gradient(90deg,rgba(143,106,66,0.20)_1px,transparent_1px),#d9a66f] bg-[length:42px_42px]" />
      <div className="absolute left-[8%] top-[22%] h-24 w-16 border-2 border-[#17120f] bg-[#67b7e8] shadow-[3px_3px_0_#8f6a42]">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#17120f]" />
        <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-[#17120f]" />
      </div>
      <div className="absolute right-[8%] top-[18%] h-24 w-28 border-2 border-[#17120f] bg-[#d9a66f] shadow-[3px_3px_0_#8f6a42]">
        <div className="mx-auto mt-4 h-3 w-20 bg-[#17120f]" />
        <div className="mx-auto mt-4 h-3 w-16 bg-[#2fb66d]" />
      </div>
      <div className="pixel-idle-bob absolute left-1/2 top-[63%] h-28 w-24 -translate-x-1/2 -translate-y-1/2 border-2 border-[#17120f] bg-[#fffaf0] shadow-[4px_4px_0_#8f6a42]">
        <div className={`absolute left-1/2 top-5 h-12 w-12 -translate-x-1/2 border-2 border-[#17120f] ${faceClass}`}>
          <div className="absolute left-3 top-4 h-1.5 w-1.5 bg-[#17120f]" />
          <div className="absolute right-3 top-4 h-1.5 w-1.5 bg-[#17120f]" />
          <div className="absolute bottom-3 left-1/2 h-0.5 w-5 -translate-x-1/2 bg-[#17120f]" />
        </div>
        <div className="absolute bottom-4 left-5 h-5 w-4 border-2 border-[#17120f] bg-[#fffaf0]" />
        <div className="absolute bottom-4 right-5 h-5 w-4 border-2 border-[#17120f] bg-[#fffaf0]" />
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
        <PixelBadge tone="muted">목업 방 셸</PixelBadge>
        <PixelBadge tone="success">스테이지 준비</PixelBadge>
      </div>
    </PixelPanel>
  );
}

function MyRoomPanel({ data }: { data: DashboardMockData }) {
  const healthMeta = healthBandMeta[data.user.healthBand];
  const ownedCount = useMemo(() => data.inventory.filter((item) => item.owned).length, [data.inventory]);

  return (
    <section aria-labelledby="dashboard-tab-my-room" className="mt-6" id="dashboard-panel-my-room" role="tabpanel">
      <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
        <RoomShellPreview healthBand={data.user.healthBand} />
        <div className="grid min-w-0 gap-4">
          <PixelPanel className="p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase text-[#6f6257]">상태</p>
                <h2 className="mt-2 text-2xl font-black [font-family:var(--font-pixel-title)]">오늘의 DeeBi</h2>
              </div>
              <PixelBadge tone={healthMeta.tone}>{healthMeta.label}</PixelBadge>
            </div>
            <div className="mt-5 h-6 border-2 border-[#17120f] bg-[#efe0bd] p-1 shadow-[2px_2px_0_#17120f]">
              <div className="h-full bg-[#2fb66d]" style={{ width: `${data.user.health}%` }} />
            </div>
            <p className="pixel-copy mt-4 text-sm leading-6 text-[#4c4038]">
              {data.user.githubLogin} 기준 목업 상태예요. 실제 GitHub 동기화는 이후 단계에서 연결해요.
            </p>
          </PixelPanel>
          <div className="grid min-w-0 grid-cols-2 gap-4">
            <StatTile detail="오늘 활동 목업" label="오늘 커밋" value={`${data.user.todayCommitCount}`} />
            <StatTile detail="연속 기록 목업" label="연속" value={`${data.user.streakDays}일`} />
            <StatTile detail="뽑기 가능" label="포인트" value={`${data.user.points}P`} />
            <StatTile detail={`${ownedCount}/${data.inventory.length}개 보유`} label="인벤토리" value={`${ownedCount}`} />
          </div>
        </div>
      </div>
    </section>
  );
}

function RoomPreviewCard({ room }: { room: JoinedRoomPreview }) {
  const mood = roomMoodMeta[room.mood];

  return (
    <PixelPanel className="flex min-h-[160px] flex-col justify-between p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="pixel-copy text-lg font-black leading-7">{room.name}</h3>
          <p className="mt-1 text-sm font-black text-[#6f6257]">#{room.code}</p>
        </div>
        <PixelBadge tone={mood.tone}>{mood.label}</PixelBadge>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div className="border-2 border-[#17120f] bg-[#fffaf0] p-3 shadow-[2px_2px_0_#8f6a42]">
          <p className="font-black">{room.memberCount}명</p>
          <p className="mt-1 text-[#4c4038]">멤버</p>
        </div>
        <div className="border-2 border-[#17120f] bg-[#fffaf0] p-3 shadow-[2px_2px_0_#8f6a42]">
          <p className="font-black">{room.activeTodayCount}명</p>
          <p className="mt-1 text-[#4c4038]">오늘 활동</p>
        </div>
      </div>
    </PixelPanel>
  );
}

function RoomsPanel({ data }: { data: DashboardMockData }) {
  return (
    <section aria-labelledby="dashboard-tab-rooms" className="mt-6" id="dashboard-panel-rooms" role="tabpanel">
      <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="grid min-w-0 gap-4 md:grid-cols-2">
          {data.joinedRooms.length > 0 ? (
            data.joinedRooms.map((room) => <RoomPreviewCard key={room.code} room={room} />)
          ) : (
            <PixelPanel className="p-6 md:col-span-2">
              <h2 className="text-xl font-black [font-family:var(--font-pixel-title)]">아직 참여한 방이 없어요.</h2>
              <p className="pixel-copy mt-3 text-sm leading-6 text-[#4c4038]">
                방 만들기와 코드 참여는 mock shell에서 자리만 잡아둡니다.
              </p>
            </PixelPanel>
          )}
        </div>
        <PixelPanel className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-black [font-family:var(--font-pixel-title)]">룸 액션</h2>
            <PixelBadge tone="muted">목업</PixelBadge>
          </div>
          <div className="mt-5 grid gap-3">
            <PixelButton disabled variant="primary">
              새 룸 만들기
            </PixelButton>
            <PixelButton disabled variant="quiet">
              코드로 참여
            </PixelButton>
          </div>
          <p className="pixel-copy mt-4 text-sm leading-6 text-[#4c4038]">
            실제 룸 생성과 참여 API는 아직 연결하지 않았어요.
          </p>
        </PixelPanel>
      </div>
    </section>
  );
}

export function DashboardShell({ data }: { data: DashboardMockData }) {
  const [activeTab, setActiveTab] = useState<DashboardTabId>("my-room");

  return (
    <main className="pixel-app-root min-h-screen overflow-x-clip px-4 py-5 text-[#17120f] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1180px] min-w-0 flex-col">
        <header className="flex min-w-0 flex-col gap-4 border-b-2 border-[#17120f] pb-5 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-4xl font-black leading-none [font-family:var(--font-pixel-title)] sm:text-5xl">DeeBi</h1>
              <PixelBadge tone="warning">목업 UI</PixelBadge>
            </div>
            <p className="pixel-copy mt-3 max-w-[640px] text-sm leading-6 text-[#4c4038] sm:text-base">
              GitHub 인증 연결 전, 대시보드의 기본 탭 구조만 먼저 확인하는 화면이에요.
            </p>
          </div>
          <PixelPanel className="flex w-[calc(100vw-32px)] max-w-full min-w-0 items-center justify-between gap-4 p-3 md:w-auto md:min-w-[300px]">
            <div className="min-w-0">
              <p className="text-xs font-black uppercase text-[#6f6257]">목업 사용자</p>
              <p className="truncate text-lg font-black">{data.user.githubLogin}</p>
            </div>
            <PixelBadge tone="success">{data.user.health}%</PixelBadge>
          </PixelPanel>
        </header>

        <nav aria-label="대시보드 탭" className="mt-5">
          <div className="grid w-[calc(100vw-32px)] max-w-full min-w-0 grid-cols-2 gap-3 sm:inline-grid sm:w-full sm:min-w-[360px]" role="tablist">
            {dashboardTabs.map((tab) => (
              <PixelTab
                active={activeTab === tab.id}
                aria-controls={`dashboard-panel-${tab.id}`}
                aria-selected={activeTab === tab.id}
                className="w-full"
                id={`dashboard-tab-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
              >
                {tab.label}
              </PixelTab>
            ))}
          </div>
        </nav>

        {activeTab === "my-room" ? <MyRoomPanel data={data} /> : <RoomsPanel data={data} />}
      </div>
    </main>
  );
}

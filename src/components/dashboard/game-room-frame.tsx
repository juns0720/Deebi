"use client";

import Image from "next/image";
import type { ReactNode } from "react";

export type DashboardTabId = "my-room" | "rooms";

const locationLabel: Record<DashboardTabId, string> = {
  "my-room": "개인 방",
  rooms: "함께하는 방",
};

export function GameRoomFrame({
  activeTab,
  command,
  dock,
  menu,
  points,
  children,
}: {
  activeTab: DashboardTabId;
  command: ReactNode;
  dock: ReactNode;
  menu: ReactNode;
  points: number;
  children: ReactNode;
}) {
  return (
    <main className="pixel-app-root min-h-screen overflow-x-clip px-3 py-3 text-[#17120f] sm:px-5 sm:py-5 lg:px-8">
      <div className="game-room-frame mx-auto w-full max-w-[1240px]">
        <header className="game-room-frame__hud" aria-label="게임 HUD">
          <div className="game-room-frame__topline">
            <div className="game-room-frame__brand">
              <strong>DeeBi</strong>
              <span>{locationLabel[activeTab]}</span>
            </div>

            <div aria-label={`보유 코인 ${points}`} className="game-room-frame__coin-hud">
              <Image alt="" aria-hidden="true" height={28} src="/assets/ui/hud/icon-coin.png" unoptimized width={28} />
              <strong aria-hidden="true">{points}</strong>
            </div>
          </div>

          <nav aria-label="대시보드 메뉴" className="game-room-frame__menu">
            {menu}
          </nav>
        </header>

        <div className="game-room-frame__body">
          <section
            aria-label={activeTab === "my-room" ? "내 방" : "함께하는 방"}
            className="game-room-frame__stage"
            id={`dashboard-panel-${activeTab}`}
          >
            {children}
          </section>

          <aside aria-label="선택 메뉴창" className="game-room-frame__command">
            {command}
          </aside>

          <section aria-label={activeTab === "my-room" ? "상태 로그" : "채팅 Dock 자리"} className="game-room-frame__dock">
            {dock}
          </section>
        </div>
      </div>
    </main>
  );
}

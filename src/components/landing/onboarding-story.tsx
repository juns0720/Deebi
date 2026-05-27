"use client";

import { useMemo, useState } from "react";
import { PixelLinkButton } from "@/components/ui";
import type { OnboardingSlide } from "@/types/onboarding";
import { PixelRoomScene } from "./pixel-room-scene";

interface OnboardingStoryProps {
  slides: OnboardingSlide[];
}

interface FeatureDetail {
  navLabel: string;
  summary: string;
}

const featureDetails: Record<string, FeatureDetail> = {
  "commit-heal": {
    navLabel: "오늘 기록",
    summary: "커밋할수록 포인트가 쌓이고, 개발량에 따라 DeeBi의 상태가 달라져요.",
  },
  "gacha-items": {
    navLabel: "꾸미기",
    summary: "포인트로 옷이나 방 소품을 뽑을 수 있어요.",
  },
  "friends-room": {
    navLabel: "함께하기",
    summary: "친구들과 같은 방에 모여 공부할 수 있어요.",
  },
};

function TitleScreen({ roomSlide }: { roomSlide: OnboardingSlide }) {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#f8f1df] px-4 text-[#17120f] sm:px-6"
    >
      <div className="absolute inset-0 translate-y-[4%] scale-[1.03] opacity-95 saturate-[1.08]">
        <PixelRoomScene className="size-full" frame="bleed" showLabels={false} size="hero" variant={roomSlide.scene} />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,240,0.50)_0%,rgba(255,250,240,0.18)_38%,rgba(248,241,223,0.10)_62%,rgba(248,241,223,0.58)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_39%,rgba(255,250,240,0.74)_0%,rgba(255,250,240,0.44)_27%,rgba(255,250,240,0.07)_56%,rgba(255,250,240,0.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f8f1df] to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col items-center justify-center pb-14 pt-12 text-center sm:pb-20 sm:pt-16">
        <h1 className="text-[4.25rem] font-black leading-none text-[#17120f] [font-family:var(--font-pixel-title)] sm:text-[7rem] lg:text-[9rem]">
          DeeBi
        </h1>
        <p className="pixel-copy mt-4 max-w-[520px] text-lg font-black leading-8 text-[#4c4038] sm:text-2xl">
          커밋이 쌓이는 나만의 도트룸
        </p>
        <div className="mt-9 flex w-full max-w-[280px] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <PixelLinkButton className="w-full text-2xl sm:min-w-44 sm:w-auto" href="/dashboard" variant="primary">
            시작하기
          </PixelLinkButton>
          <PixelLinkButton className="w-full text-2xl sm:min-w-44 sm:w-auto" href="#demo" variant="quiet">
            구경하기
          </PixelLinkButton>
        </div>
      </div>
    </section>
  );
}

function FeatureDemo({ featureSlides }: { featureSlides: OnboardingSlide[] }) {
  const [activeId, setActiveId] = useState(featureSlides[0]?.id ?? "commit-heal");
  const activeSlide = featureSlides.find((slide) => slide.id === activeId) ?? featureSlides[0];
  if (!activeSlide) {
    return null;
  }

  return (
    <section
      id="demo"
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#f8f1df] px-4 py-8 text-[#17120f] sm:px-6 sm:py-10"
    >
      <div className="absolute inset-0 translate-y-[18%] scale-[1.05] opacity-95 saturate-[1.08] sm:translate-y-[8%]">
        <PixelRoomScene
          background={activeSlide.asset?.background}
          character={activeSlide.asset?.character}
          className="size-full"
          frame="bleed"
          showLabels={false}
          size="hero"
          variant={activeSlide.scene}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,240,0.94)_0%,rgba(255,250,240,0.78)_34%,rgba(255,250,240,0.20)_66%,rgba(248,241,223,0.80)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8f1df] to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col">
        <div className="flex items-center justify-between gap-4">
          <PixelLinkButton href="#top" size="small" variant="quiet">
            처음으로
          </PixelLinkButton>
          <span className="border-2 border-[#17120f] bg-[#fffaf0]/92 px-3 py-1 text-xs font-black text-[#4c4038] shadow-[3px_3px_0_#8f6a42]">
            02 / 02
          </span>
        </div>

        <div className="mx-auto mt-12 max-w-[840px] text-center sm:mt-14">
          <h2 className="text-balance text-3xl font-black leading-tight text-[#17120f] [font-family:var(--font-pixel-title)] sm:text-5xl">
            오늘 기록이 DeeBi를 바꿔요.
          </h2>
          <p className="pixel-copy mx-auto mt-4 flex min-h-16 max-w-[720px] items-center justify-center text-base leading-8 text-[#4c4038] sm:min-h-10 sm:text-lg">
            {featureDetails[activeSlide.id]?.summary}
          </p>
        </div>

        <div className="mx-auto mt-8 grid w-full max-w-[500px] grid-cols-3 gap-2">
          {featureSlides.map((slide) => {
            const tab = featureDetails[slide.id];
            const active = slide.id === activeSlide.id;

            return (
              <button
                key={slide.id}
                className={`border-2 px-2 py-3 text-center text-sm font-black transition-colors ${
                  active
                    ? "border-[#17120f] bg-[#a8e6c1] text-[#17120f] shadow-[3px_3px_0_#1f8b56]"
                    : "border-[#17120f] bg-[#fffaf0]/92 text-[#4c4038] shadow-[2px_2px_0_#8f6a42] hover:bg-[#f2d28d]"
                }`}
                onClick={() => setActiveId(slide.id)}
                type="button"
              >
                {tab?.navLabel ?? slide.id}
              </button>
            );
          })}
        </div>

        <div className="min-h-[300px] flex-1 sm:min-h-[380px] lg:min-h-[460px]" />
      </div>
    </section>
  );
}

export function OnboardingStory({ slides }: OnboardingStoryProps) {
  const introSlide = slides.find((slide) => slide.id === "room-intro") ?? slides[0];
  const roomSlide = slides.find((slide) => slide.id === "friends-room") ?? slides[slides.length - 1] ?? introSlide;
  const featureSlides = useMemo(
    () => slides.filter((slide) => ["commit-heal", "gacha-items", "friends-room"].includes(slide.id)),
    [slides],
  );

  if (!introSlide || !roomSlide) {
    return null;
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f8f1df] text-[#17120f]">
      <TitleScreen roomSlide={roomSlide} />
      <FeatureDemo featureSlides={featureSlides} />
    </main>
  );
}

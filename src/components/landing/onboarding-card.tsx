import { PixelButton, PixelLinkButton } from "@/components/ui";
import type { OnboardingChipTone, OnboardingSlide } from "@/types/onboarding";
import { PixelRoomScene } from "./pixel-room-scene";

interface OnboardingCardProps {
  slide: OnboardingSlide;
}

const chipToneClass: Record<OnboardingChipTone, string> = {
  amber: "border-[#f6c453] bg-[#332819] text-[#ffd66e]",
  blue: "border-[#6bb6ff] bg-[#16273e] text-[#9fd2ff]",
  lime: "border-[#9bf542] bg-[#1d2d1d] text-[#b8ff61]",
  quiet: "border-[#526179] bg-[#101927] text-[#f8fafc]",
  rose: "border-[#ff6c98] bg-[#321c2a] text-[#ff9bb8]",
};

export function OnboardingCard({ slide }: OnboardingCardProps) {
  return (
    <article className="relative flex min-h-[520px] w-[86vw] shrink-0 snap-center flex-col overflow-hidden border border-[#1d2b42] bg-[#0c1422] p-5 shadow-[0_0_0_2px_rgba(255,255,255,0.03),0_18px_40px_rgba(0,0,0,0.34)] sm:w-[420px] lg:min-h-[440px] lg:w-auto">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,180,255,0.16),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)]" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-4 flex items-start justify-between gap-3">
          <span className="text-lg font-black text-[#b8ff61]">{slide.step}</span>
          <div className="flex gap-1 pt-1" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, index) => (
              <span
                key={index}
                className={`h-1.5 w-3 rounded-full ${
                  Number(slide.step) === index + 1 ? "bg-[#9bf542]" : "bg-[#39465c]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 min-h-[132px]">
          <h2 className="text-balance text-2xl font-black leading-tight text-white [overflow-wrap:anywhere] sm:text-3xl">
            {slide.title.map((part, index) => (
              <span key={`${part.text}-${index}`} className={part.accent ? "text-[#9bf542]" : undefined}>
                {part.text}
              </span>
            ))}
          </h2>
          <p className="pixel-copy mt-4 max-w-[280px] text-sm leading-7 text-[#d7e2f2] sm:max-w-xl sm:text-base">
            {slide.body}
          </p>
        </div>

        <div className="relative z-10 mt-4">
          <PixelRoomScene
            background={slide.asset?.background}
            character={slide.asset?.character}
            compact={slide.scene === "commit" || slide.scene === "cta"}
            variant={slide.scene}
          />
        </div>

        <div className="relative z-10 mt-4 grid gap-2 sm:grid-cols-2">
          {slide.chips?.map((chip) => (
            <div
              key={`${slide.id}-${chip.label}`}
              className={`flex min-h-12 items-center justify-between gap-3 border-2 px-3 py-2 text-sm font-black ${
                chipToneClass[chip.tone ?? "quiet"]
              }`}
            >
              <span className="truncate">
                {chip.icon ? <span className="mr-2">{chip.icon}</span> : null}
                {chip.label}
              </span>
              {chip.value ? <span className="shrink-0 text-base">{chip.value}</span> : null}
            </div>
          ))}
        </div>

        {slide.cta ? (
          <div className="relative z-10 mt-5 grid gap-3">
            <PixelButton disabled type="button" variant="primary">
              GitHub 로그인 준비 중
            </PixelButton>
            <PixelLinkButton href="#onboarding-demo" variant="quiet">
              데모로 둘러보기
            </PixelLinkButton>
          </div>
        ) : null}
      </div>
    </article>
  );
}

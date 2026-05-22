import { PixelBadge, PixelButton, PixelLinkButton } from "@/components/ui";
import type { OnboardingSlide } from "@/types/onboarding";
import { OnboardingCard } from "./onboarding-card";

interface OnboardingStoryProps {
  slides: OnboardingSlide[];
}

const logoCells = [
  "bg-[#9bf542]",
  "bg-[#67b7e8]",
  "bg-[#ff6c98]",
  "bg-[#f8fafc]",
  "bg-[#0c1422]",
  "bg-[#b8ff61]",
  "bg-[#f6c453]",
  "bg-[#f8fafc]",
  "bg-[#67b7e8]",
];

export function OnboardingStory({ slides }: OnboardingStoryProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050914] text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_0%,rgba(155,245,66,0.12),transparent_34%),radial-gradient(circle_at_80%_8%,rgba(103,183,232,0.14),transparent_32%),linear-gradient(180deg,#08111f_0%,#050914_58%,#070b12_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1540px] flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4 rounded-[2px] border border-[#18263d] bg-[#0b1322]/90 px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.26)]">
          <div className="flex items-center gap-3">
            <div className="pixel-grid-art grid size-9 grid-cols-3 overflow-hidden border-2 border-[#9fb2d1] bg-[#050914] shadow-[3px_3px_0_#000]">
              {logoCells.map((color, index) => (
                <span key={`${color}-${index}`} className={color} />
              ))}
            </div>
            <div>
              <div className="text-xl font-black text-[#9bf542]">Deebi</div>
              <div className="hidden text-xs text-[#aab8cc] sm:block">
                작은 커밋이 모여, Deebi의 하루가 빛나요
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <PixelBadge tone="success">온보딩 미리보기</PixelBadge>
          </div>
        </header>

        <section className="grid gap-5 py-7 lg:grid-cols-[minmax(260px,0.62fr)_minmax(0,1fr)] lg:items-end">
          <div className="max-w-[328px] sm:max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-normal text-[#9bf542]">
              GitHub activity pixel room
            </p>
            <h1 className="max-w-[328px] text-3xl font-black leading-tight tracking-normal text-white [overflow-wrap:anywhere] sm:max-w-3xl sm:text-5xl lg:text-6xl">
              각자 코딩해도,
              <br />
              같은 방에 있는 것처럼.
            </h1>
            <p className="pixel-copy mt-4 max-w-[320px] text-sm leading-7 text-[#d7e2f2] sm:max-w-2xl sm:text-lg sm:leading-8">
              Deebi는 GitHub 커밋으로 캐릭터 상태가 바뀌는 작은 픽셀방이에요. 내
              방을 켜두고, 친구들과 같은 방에서 느슨하게 같이 개발해요.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <PixelButton disabled type="button" variant="primary">
                GitHub 로그인 준비 중
              </PixelButton>
              <PixelLinkButton href="#onboarding-demo" variant="quiet">
                먼저 둘러보기
              </PixelLinkButton>
            </div>
          </div>

          <div className="grid gap-2 border border-[#1d2b42] bg-[#0b1322] p-3 text-sm text-[#d7e2f2] sm:grid-cols-3">
            <div>
              <span className="block text-[#9bf542]">01</span>
              커밋이 캐릭터 건강도로 바뀌어요
            </div>
            <div>
              <span className="block text-[#9bf542]">02</span>
              포인트로 작은 아이템을 뽑아요
            </div>
            <div>
              <span className="block text-[#9bf542]">03</span>
              친구들과 같은 룸에서 상태를 봐요
            </div>
          </div>
        </section>

        <section id="onboarding-demo" aria-label="Deebi 온보딩" className="pb-3">
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:snap-none lg:grid-cols-3 lg:overflow-visible lg:px-0">
            {slides.map((slide) => (
              <OnboardingCard key={slide.id} slide={slide} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

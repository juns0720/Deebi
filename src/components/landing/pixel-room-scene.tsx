import type { OnboardingAsset, OnboardingSceneVariant } from "@/types/onboarding";

interface PixelRoomSceneProps {
  background?: OnboardingAsset;
  character?: OnboardingAsset;
  compact?: boolean;
  variant: OnboardingSceneVariant;
}

const sceneMood: Record<OnboardingSceneVariant, string> = {
  intro: "bg-[#17233a]",
  commit: "bg-[#102338]",
  neglect: "bg-[#162031]",
  gacha: "bg-[#201936]",
  room: "bg-[#142836]",
  cta: "bg-[#121f32]",
};

function isProvided(asset?: OnboardingAsset) {
  return Boolean(asset?.provided && asset.src);
}

function PixelWindow({ rainy = false }: { rainy?: boolean }) {
  return (
    <div className="absolute left-[10%] top-[12%] h-14 w-16 border-2 border-[#40536f] bg-[#0d1730] shadow-[3px_3px_0_#050a12] sm:h-16 sm:w-20">
      <div className="absolute inset-2 grid grid-cols-2 gap-1">
        <span className="bg-[#1e345b]" />
        <span className="bg-[#263f69]" />
        <span className="bg-[#192d50]" />
        <span className="bg-[#20365d]" />
      </div>
      {rainy ? (
        <>
          <span className="absolute left-4 top-5 h-1 w-5 rotate-[-20deg] bg-[#7db4ff]" />
          <span className="absolute right-4 top-8 h-1 w-4 rotate-[-20deg] bg-[#7db4ff]" />
        </>
      ) : (
        <>
          <span className="absolute left-4 top-4 size-1 bg-[#ffe27a]" />
          <span className="absolute right-5 top-6 size-1 bg-[#ffe27a]" />
        </>
      )}
    </div>
  );
}

function PixelDesk({ wide = false }: { wide?: boolean }) {
  return (
    <div
      className={`absolute bottom-[19%] left-1/2 h-5 -translate-x-1/2 border-2 border-[#34251c] bg-[#6d4b33] shadow-[4px_4px_0_#05070b] ${
        wide ? "w-[76%]" : "w-[56%]"
      }`}
    >
      <span className="absolute left-3 top-5 h-10 w-3 bg-[#4a3426]" />
      <span className="absolute right-3 top-5 h-10 w-3 bg-[#4a3426]" />
      <span className="absolute left-1/2 top-[-36px] h-8 w-20 -translate-x-1/2 border-2 border-[#3d5069] bg-[#07131d]">
        <span className="absolute left-2 top-2 h-1 w-2 bg-[#9bf542]" />
        <span className="absolute left-6 top-2 h-1 w-2 bg-[#65ce36]" />
        <span className="absolute left-10 top-2 h-1 w-2 bg-[#9bf542]" />
        <span className="absolute left-14 top-2 h-1 w-2 bg-[#65ce36]" />
        <span className="absolute left-3 top-5 h-1 w-12 bg-[#2d6f32]" />
      </span>
    </div>
  );
}

function PixelCharacter({
  mood = "happy",
  x = "50%",
  y = "64%",
}: {
  mood?: "happy" | "sad" | "plain";
  x?: string;
  y?: string;
}) {
  const mouth = mood === "happy" ? "bottom-5 h-1 w-5 bg-[#111827]" : "bottom-5 h-1 w-4 bg-[#6b7280]";
  const bodyColor = mood === "sad" ? "bg-[#f0eadb]" : "bg-[#fff8ea]";

  return (
    <div
      className="absolute h-20 w-16 -translate-x-1/2 -translate-y-1/2"
      style={{ left: x, top: y }}
    >
      <div className={`absolute left-2 top-0 size-12 border-2 border-[#0b0f16] ${bodyColor}`} />
      <div className={`absolute left-0 top-10 h-8 w-16 border-2 border-[#0b0f16] ${bodyColor}`} />
      <span className="absolute left-5 top-5 size-1.5 bg-[#0b0f16]" />
      <span className="absolute right-5 top-5 size-1.5 bg-[#0b0f16]" />
      <span className={`absolute left-1/2 -translate-x-1/2 ${mouth}`} />
      <span className="absolute bottom-0 left-3 h-4 w-3 border-2 border-[#0b0f16] bg-[#fff8ea]" />
      <span className="absolute bottom-0 right-3 h-4 w-3 border-2 border-[#0b0f16] bg-[#fff8ea]" />
    </div>
  );
}

function SceneBits({ variant }: { variant: OnboardingSceneVariant }) {
  if (variant === "commit") {
    return (
      <>
        <PixelCharacter x="25%" y="64%" />
        <div className="absolute left-[45%] top-[36%] h-12 w-28 border-2 border-[#40536f] bg-[#121b2a] p-2">
          <span className="block text-xs text-white">HP</span>
          <span className="mt-1 block h-3 w-full bg-[#25344a]">
            <span className="block h-full w-3/4 bg-[#9bf542]" />
          </span>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-lg font-black text-[#9bf542]">
            +10
          </span>
        </div>
        <PixelCharacter x="78%" y="64%" mood="happy" />
        <span className="absolute right-[18%] top-[24%] text-xl text-[#ff6c98]">♥</span>
        <span className="absolute right-[10%] top-[38%] text-xl text-[#ffe27a]">✦</span>
      </>
    );
  }

  if (variant === "neglect") {
    return (
      <>
        <PixelWindow rainy />
        <PixelDesk />
        <PixelCharacter x="47%" y="70%" mood="sad" />
        <div className="absolute right-[6%] top-[28%] w-28 border-2 border-[#40536f] bg-[#121b2a] p-2 text-xs text-white">
          <div>HP</div>
          <div className="mt-2 h-3 bg-[#25344a]">
            <div className="h-full w-1/4 bg-[#ff6b6b]" />
          </div>
          <div className="mt-1 text-right">25 / 100</div>
        </div>
      </>
    );
  }

  if (variant === "gacha") {
    return (
      <>
        <div className="absolute left-[8%] top-[28%] size-24 border-4 border-[#302141] bg-[#7d4ad1] shadow-[4px_4px_0_#05070b]">
          <span className="absolute left-1/2 top-2 size-16 -translate-x-1/2 rounded-full border-4 border-[#cbb7ff] bg-[#f8d37a]" />
          <span className="absolute bottom-3 left-1/2 size-7 -translate-x-1/2 border-2 border-[#251634] bg-[#b18cff]" />
        </div>
        <PixelCharacter x="34%" y="70%" />
        {["개발자 후드티", "고양이 모자", "작은 식물"].map((label, index) => (
          <div
            key={label}
            className="absolute top-[42%] h-24 w-20 border-2 border-[#4b3a2b] bg-[#f2d28d] p-2 text-center text-[10px] text-[#17120f] shadow-[3px_3px_0_#05070b]"
            style={{ left: `${48 + index * 16}%` }}
          >
            <span className="mb-2 block h-9 border-2 border-[#33251c] bg-[#1e2b3a]" />
            {label}
          </div>
        ))}
        <span className="absolute right-[8%] top-[25%] text-xl text-[#ffe27a]">✦</span>
      </>
    );
  }

  if (variant === "room") {
    return (
      <>
        <PixelDesk wide />
        <div className="absolute right-[9%] top-[16%] border-2 border-[#33445f] bg-[#122134] px-2 py-1 text-[10px] text-[#9bf542]">
          ROOM #42
        </div>
        <PixelCharacter x="24%" y="68%" />
        <PixelCharacter x="43%" y="68%" mood="plain" />
        <PixelCharacter x="62%" y="68%" />
        <PixelCharacter x="80%" y="68%" mood="plain" />
        {["오늘 커밋 완료!", "내 Deebi 배고파짐...", "포인트 모았다!"].map((text, index) => (
          <span
            key={text}
            className="absolute top-[24%] border-2 border-[#1f2937] bg-[#fff8ea] px-2 py-1 text-[10px] text-[#17120f]"
            style={{ left: `${10 + index * 29}%` }}
          >
            {text}
          </span>
        ))}
      </>
    );
  }

  if (variant === "cta") {
    return (
      <>
        <PixelCharacter x="50%" y="56%" mood="happy" />
        <span className="absolute left-[30%] top-[31%] text-xl text-[#ffe27a]">✦</span>
        <span className="absolute right-[30%] top-[26%] text-2xl text-[#ff6c98]">♥</span>
        <span className="absolute right-[20%] top-[45%] text-xl text-[#ffe27a]">✦</span>
      </>
    );
  }

  return (
    <>
      <PixelWindow />
      <PixelDesk />
      <PixelCharacter x="54%" y="68%" />
      <span className="absolute right-[16%] top-[24%] h-12 w-10 border-2 border-[#31425b] bg-[#1d3b2f]" />
      <span className="absolute left-[22%] top-[35%] rotate-[-20deg] text-lg text-[#9bf542]">✦</span>
    </>
  );
}

export function PixelRoomScene({
  background,
  character,
  compact = false,
  variant,
}: PixelRoomSceneProps) {
  const hasBackground = isProvided(background);
  const hasCharacter = isProvided(character);

  return (
    <div
      className={`pixel-grid-art relative overflow-hidden border-2 border-[#26364f] ${sceneMood[variant]} ${
        compact ? "h-44" : "h-56"
      }`}
    >
      {hasBackground ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt={background?.alt ?? ""} className="absolute inset-0 size-full object-cover" src={background?.src} />
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:18px_18px]" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#0a101b]" />
          <div className="absolute inset-x-0 bottom-[33%] h-px bg-[#2b3b55]" />
        </>
      )}
      <SceneBits variant={variant} />
      {hasCharacter ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={character?.alt ?? ""}
          className="absolute bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 object-contain"
          src={character?.src}
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0,rgba(3,7,18,0.18)_52%,rgba(3,7,18,0.58)_100%)]" />
    </div>
  );
}

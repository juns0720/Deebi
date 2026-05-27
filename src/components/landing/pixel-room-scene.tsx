import type { OnboardingAsset, OnboardingSceneVariant } from "@/types/onboarding";

interface PixelRoomSceneProps {
  background?: OnboardingAsset;
  character?: OnboardingAsset;
  className?: string;
  compact?: boolean;
  frame?: "bordered" | "bleed";
  showLabels?: boolean;
  size?: "card" | "stage" | "hero";
  variant: OnboardingSceneVariant;
}

const sceneMood: Record<OnboardingSceneVariant, string> = {
  intro: "bg-[#dfe9c7]",
  commit: "bg-[#d9f0d4]",
  neglect: "bg-[#cfd8d8]",
  gacha: "bg-[#efe0bf]",
  room: "bg-[#dcebd2]",
  cta: "bg-[#f1e6c8]",
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

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
          <span className="pixel-rain-drop absolute left-4 top-5 h-1 w-5 rotate-[-20deg] bg-[#7db4ff]" />
          <span className="pixel-rain-drop absolute right-4 top-8 h-1 w-4 rotate-[-20deg] bg-[#7db4ff]" />
        </>
      ) : (
        <>
          <span className="pixel-twinkle absolute left-4 top-4 size-1 bg-[#ffe27a]" />
          <span className="pixel-twinkle absolute right-5 top-6 size-1 bg-[#ffe27a]" />
        </>
      )}
    </div>
  );
}

function PixelDesk({ wide = false }: { wide?: boolean }) {
  return (
    <div
      className={cx(
        "absolute bottom-[19%] left-1/2 h-5 -translate-x-1/2 border-2 border-[#34251c] bg-[#6d4b33] shadow-[4px_4px_0_#05070b]",
        wide ? "w-[76%]" : "w-[56%]",
      )}
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
  className = "pixel-idle-bob",
  mood = "happy",
  x = "50%",
  y = "64%",
}: {
  className?: string;
  mood?: "happy" | "sad" | "plain";
  x?: string;
  y?: string;
}) {
  const mouth = mood === "happy" ? "bottom-5 h-1 w-5 bg-[#111827]" : "bottom-5 h-1 w-4 bg-[#6b7280]";
  const bodyColor = mood === "sad" ? "bg-[#f0eadb]" : "bg-[#fff8ea]";

  return (
    <div
      className={cx("absolute h-20 w-16 -translate-x-1/2 -translate-y-1/2", className)}
      style={{ left: x, top: y }}
    >
      <div className={cx("absolute left-2 top-0 size-12 border-2 border-[#0b0f16]", bodyColor)} />
      <div className={cx("absolute left-0 top-10 h-8 w-16 border-2 border-[#0b0f16]", bodyColor)} />
      <span className="absolute left-5 top-5 size-1.5 bg-[#0b0f16]" />
      <span className="absolute right-5 top-5 size-1.5 bg-[#0b0f16]" />
      <span className={cx("absolute left-1/2 -translate-x-1/2", mouth)} />
      <span className="absolute bottom-0 left-3 h-4 w-3 border-2 border-[#0b0f16] bg-[#fff8ea]" />
      <span className="absolute bottom-0 right-3 h-4 w-3 border-2 border-[#0b0f16] bg-[#fff8ea]" />
    </div>
  );
}

function CommitSceneBits() {
  return (
    <>
      <PixelCharacter className="pixel-idle-bob" x="25%" y="64%" />
      <div className="absolute left-[45%] top-[36%] h-12 w-28 border-2 border-[#40536f] bg-[#121b2a] p-2">
        <span className="block text-xs text-white">COND</span>
        <span className="mt-1 block h-3 w-full bg-[#25344a]">
          <span className="pixel-condition-fill block h-full w-3/4 bg-[#9bf542]" />
        </span>
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-lg font-black text-[#9bf542]">
          +10
        </span>
      </div>
      <PixelCharacter className="pixel-happy-hop" x="78%" y="64%" mood="happy" />
      <span className="pixel-heart-pop absolute right-[18%] top-[24%] text-xl font-black text-[#ff6c98]">+</span>
      <span className="pixel-twinkle absolute right-[10%] top-[38%] text-xl font-black text-[#ffe27a]">*</span>
    </>
  );
}

function NeglectSceneBits() {
  return (
    <>
      <PixelWindow rainy />
      <PixelDesk />
      <PixelCharacter className="pixel-sad-sway" x="47%" y="70%" mood="sad" />
      <div className="absolute right-[6%] top-[28%] w-28 border-2 border-[#40536f] bg-[#121b2a] p-2 text-xs text-white">
        <div>COND</div>
        <div className="mt-2 h-3 bg-[#25344a]">
          <div className="h-full w-1/4 bg-[#ff6b6b]" />
        </div>
        <div className="mt-1 text-right">25 / 100</div>
      </div>
    </>
  );
}

function GachaSceneBits() {
  return (
    <>
      <div className="pixel-capsule-hop absolute left-[8%] top-[28%] size-24 border-4 border-[#302141] bg-[#7d4ad1] shadow-[4px_4px_0_#05070b]">
        <span className="absolute left-1/2 top-2 size-16 -translate-x-1/2 rounded-full border-4 border-[#cbb7ff] bg-[#f8d37a]" />
        <span className="absolute bottom-3 left-1/2 size-7 -translate-x-1/2 border-2 border-[#251634] bg-[#b18cff]" />
      </div>
      <PixelCharacter className="pixel-idle-bob" x="34%" y="70%" />
      {["개발자 후드", "도트 모자", "초록 화분"].map((label, index) => (
        <div
          key={label}
          className="pixel-item-pop absolute top-[42%] h-24 w-20 border-2 border-[#4b3a2b] bg-[#f2d28d] p-2 text-center text-[10px] text-[#17120f] shadow-[3px_3px_0_#05070b]"
          style={{ animationDelay: `${index * 120}ms`, left: `${48 + index * 16}%` }}
        >
          <span className="mb-2 block h-9 border-2 border-[#33251c] bg-[#1e2b3a]" />
          {label}
        </div>
      ))}
      <span className="pixel-twinkle absolute right-[8%] top-[25%] text-xl font-black text-[#ffe27a]">*</span>
    </>
  );
}

function RoomSceneBits({ showLabels = true }: { showLabels?: boolean }) {
  return (
    <>
      <PixelDesk wide />
      {showLabels ? (
        <div className="absolute right-[9%] top-[16%] border-2 border-[#33445f] bg-[#122134] px-2 py-1 text-[10px] text-[#9bf542]">
          ROOM #42
        </div>
      ) : null}
      <PixelCharacter className="pixel-idle-bob" x="24%" y="68%" />
      <PixelCharacter className="pixel-idle-bob pixel-delay-1" x="43%" y="68%" mood="plain" />
      <PixelCharacter className="pixel-idle-bob pixel-delay-2" x="62%" y="68%" />
      <PixelCharacter className="pixel-idle-bob pixel-delay-3" x="80%" y="68%" mood="plain" />
      {showLabels
        ? ["커밋 완료", "컨디션 회복", "장비 뽑았다"].map((text, index) => (
            <span
              key={text}
              className="pixel-chat-pop absolute top-[24%] border-2 border-[#1f2937] bg-[#fff8ea] px-2 py-1 text-[10px] text-[#17120f]"
              style={{ animationDelay: `${index * 160}ms`, left: `${10 + index * 29}%` }}
            >
              {text}
            </span>
          ))
        : null}
    </>
  );
}

function IntroSceneBits() {
  return (
    <>
      <PixelWindow />
      <PixelDesk />
      <PixelCharacter className="pixel-idle-bob" x="54%" y="68%" />
      <span className="absolute right-[16%] top-[24%] h-12 w-10 border-2 border-[#31425b] bg-[#1d3b2f]" />
      <span className="pixel-twinkle absolute left-[22%] top-[35%] rotate-[-20deg] text-lg font-black text-[#9bf542]">
        *
      </span>
    </>
  );
}

function SceneBits({ showLabels, variant }: { showLabels?: boolean; variant: OnboardingSceneVariant }) {
  if (variant === "commit") {
    return <CommitSceneBits />;
  }

  if (variant === "neglect") {
    return <NeglectSceneBits />;
  }

  if (variant === "gacha") {
    return <GachaSceneBits />;
  }

  if (variant === "room") {
    return <RoomSceneBits showLabels={showLabels} />;
  }

  if (variant === "cta") {
    return (
      <>
        <PixelCharacter x="50%" y="56%" mood="happy" />
        <span className="pixel-twinkle absolute left-[30%] top-[31%] text-xl font-black text-[#ffe27a]">*</span>
        <span className="pixel-heart-pop absolute right-[30%] top-[26%] text-2xl font-black text-[#ff6c98]">+</span>
        <span className="pixel-twinkle absolute right-[20%] top-[45%] text-xl font-black text-[#ffe27a]">*</span>
      </>
    );
  }

  return <IntroSceneBits />;
}

export function PixelRoomScene({
  background,
  character,
  className,
  compact = false,
  frame = "bordered",
  showLabels = true,
  size = "card",
  variant,
}: PixelRoomSceneProps) {
  const hasBackground = isProvided(background);
  const hasCharacter = isProvided(character);
  const heightClass =
    size === "hero" ? "h-full min-h-[620px]" : size === "stage" ? "h-[280px] sm:h-[420px] lg:h-[500px]" : compact ? "h-44" : "h-56";

  return (
    <div
      className={cx(
        "pixel-grid-art relative overflow-hidden",
        frame === "bordered" && "border-2 border-[#26364f]",
        sceneMood[variant],
        heightClass,
        className,
      )}
    >
      {hasBackground ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt={background?.alt ?? ""} className="absolute inset-0 size-full object-cover" src={background?.src} />
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,18,15,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(23,18,15,0.045)_1px,transparent_1px)] bg-[length:18px_18px]" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#cda66f]" />
          <div className="absolute inset-x-0 bottom-[33%] h-px bg-[#9b764e]" />
        </>
      )}
      <SceneBits showLabels={showLabels} variant={variant} />
      {hasCharacter ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={character?.alt ?? ""}
          className="absolute bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 object-contain"
          src={character?.src}
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0,rgba(46,36,30,0.06)_54%,rgba(46,36,30,0.24)_100%)]" />
    </div>
  );
}

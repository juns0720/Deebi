export type OnboardingSceneVariant = "intro" | "commit" | "neglect" | "gacha" | "room" | "cta";

export type OnboardingChipTone = "lime" | "rose" | "amber" | "blue" | "quiet";

export interface OnboardingAsset {
  alt: string;
  provided?: boolean;
  src?: string;
}

export interface OnboardingTitlePart {
  accent?: boolean;
  text: string;
}

export interface OnboardingStatChip {
  icon?: string;
  label: string;
  tone?: OnboardingChipTone;
  value?: string;
}

export interface OnboardingSlide {
  asset?: {
    background?: OnboardingAsset;
    character?: OnboardingAsset;
    icon?: OnboardingAsset;
  };
  body: string;
  chips?: OnboardingStatChip[];
  cta?: "start" | "demo";
  id: string;
  scene: OnboardingSceneVariant;
  step: string;
  title: OnboardingTitlePart[];
}

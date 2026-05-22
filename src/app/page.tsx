import { OnboardingStory } from "@/components/landing/onboarding-story";
import { onboardingSlides } from "@/lib/mock/onboarding";

export default function Home() {
  return <OnboardingStory slides={onboardingSlides} />;
}

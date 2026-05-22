import type { OnboardingSlide } from "@/types/onboarding";

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: "today-commit",
    step: "01",
    title: [
      { text: "오늘 " },
      { text: "커밋", accent: true },
      { text: "했어?" },
    ],
    body: "Deebi가 기다리고 있어요. 당신의 GitHub 활동으로 자라는 작은 픽셀 친구를 만나보세요.",
    scene: "intro",
    chips: [
      { label: "GitHub로 시작하기", tone: "lime", icon: "●" },
      { label: "먼저 둘러보기", tone: "quiet" },
    ],
  },
  {
    id: "commit-heal",
    step: "02",
    title: [
      { text: "커밋하면 " },
      { text: "Deebi", accent: true },
      { text: "가 기운을 차려요" },
    ],
    body: "꾸준한 커밋은 건강도와 포인트로 쌓이고, Deebi는 더 밝은 표정이 돼요.",
    scene: "commit",
    chips: [
      { label: "HP", value: "+10", tone: "rose", icon: "♥" },
      { label: "Mood", value: "Up", tone: "amber", icon: "●" },
      { label: "Point", value: "+30", tone: "amber", icon: "◆" },
    ],
  },
  {
    id: "rest-warning",
    step: "03",
    title: [
      { text: "며칠 쉬면 " },
      { text: "Deebi", accent: true },
      { text: "도 시무룩해져요" },
    ],
    body: "그래도 괜찮아요. 다시 커밋하면 금방 회복할 수 있어요.",
    scene: "neglect",
    chips: [
      { label: "HP", value: "25 / 100", tone: "rose" },
      { label: "3 Days", value: "No Commit", tone: "quiet", icon: "☹" },
    ],
  },
  {
    id: "gacha-items",
    step: "04",
    title: [
      { text: "포인트로 " },
      { text: "아이템", accent: true },
      { text: "을 뽑아보세요" },
    ],
    body: "모자, 안경, 액세서리, 방 장식으로 나만의 Deebi를 꾸밀 수 있어요.",
    scene: "gacha",
    chips: [{ label: "보유 포인트", value: "2,450 pt", tone: "amber", icon: "★" }],
  },
  {
    id: "friends-room",
    step: "05",
    title: [
      { text: "친구들의 " },
      { text: "Deebi", accent: true },
      { text: "도 함께 볼 수 있어요" },
    ],
    body: "같은 룸에서 오늘의 커밋 상태를 확인하고 가볍게 대화해보세요.",
    scene: "room",
    chips: [
      { label: "오늘 커밋 완료", tone: "lime", icon: "●" },
      { label: "포인트 모았다", tone: "amber", icon: "◆" },
    ],
  },
  {
    id: "start",
    step: "06",
    title: [
      { text: "이제 " },
      { text: "Deebi", accent: true },
      { text: "를 만나러 가볼까요?" },
    ],
    body: "GitHub를 연결하면 오늘의 커밋 상태를 바로 확인할 수 있어요.",
    cta: "start",
    scene: "cta",
    chips: [
      { label: "GitHub 로그인 준비 중", tone: "lime", icon: "●" },
      { label: "데모로 둘러보기", tone: "quiet" },
    ],
  },
];

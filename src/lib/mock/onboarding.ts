import type { OnboardingSlide } from "@/types/onboarding";

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: "room-intro",
    step: "01",
    title: [
      { text: "각자 코딩해도,\n" },
      { text: "같은 방", accent: true },
      { text: "에\n있는 것처럼." },
    ],
    body: "DeeBi는 GitHub 커밋에 맞춰 컨디션과 표정이 바뀌는 도트 캐릭터예요. 내 작업 루틴이 작은 방과 캐릭터 상태로 바로 보입니다.",
    scene: "intro",
    chips: [
      { label: "내 방", tone: "lime", icon: "#" },
      { label: "픽셀 친구", tone: "blue", icon: "*" },
    ],
  },
  {
    id: "commit-heal",
    step: "02",
    title: [
      { text: "커밋하면\n" },
      { text: "컨디션이 오르고", accent: true },
      { text: " 표정이 바뀌어요." },
    ],
    body: "오늘의 활동은 컨디션, 포인트, 표정으로 바로 바뀌어요. 숫자보다 먼저 DeeBi의 상태가 반응합니다.",
    scene: "commit",
    chips: [
      { label: "Condition", value: "+10", tone: "rose", icon: "+" },
      { label: "Mood", value: "UP", tone: "lime", icon: "*" },
      { label: "Point", value: "+30", tone: "amber", icon: ">" },
    ],
  },
  {
    id: "rest-warning",
    step: "03",
    title: [
      { text: "며칠 쉬면\n" },
      { text: "컨디션이 낮아져도", accent: true },
      { text: "\n다시 회복해요." },
    ],
    body: "활동이 줄면 DeeBi의 컨디션이 내려가요. 다시 커밋하면 바로 회복되는 가벼운 리마인더예요.",
    scene: "neglect",
    chips: [
      { label: "Condition", value: "25 / 100", tone: "rose" },
      { label: "3 Days", value: "No Commit", tone: "quiet", icon: "!" },
    ],
  },
  {
    id: "gacha-items",
    step: "04",
    title: [
      { text: "포인트는\n" },
      { text: "장비와 룸 아이템", accent: true },
      { text: "으로 돌아와요." },
    ],
    body: "커밋으로 모은 포인트는 모자, 안경, 소품, 방 장식으로 바뀌어요. 장비를 모으는 재미만 가볍게 남깁니다.",
    scene: "gacha",
    chips: [
      { label: "보유 포인트", value: "2,450 pt", tone: "amber", icon: ">" },
      { label: "장비/소품", value: "15종", tone: "blue", icon: "#" },
    ],
  },
  {
    id: "friends-room",
    step: "05",
    title: [
      { text: "친구들의 DeeBi도\n" },
      { text: "같은 테이블", accent: true },
      { text: "에 모여요." },
    ],
    body: "룸에서는 친구들의 오늘 커밋 상태와 작은 메시지를 함께 봐요. 경쟁보다 같이 켜두는 작업방에 가깝게요.",
    cta: "start",
    scene: "room",
    chips: [
      { label: "오늘 커밋 완료", tone: "lime", icon: "*" },
      { label: "공동 룸", tone: "blue", icon: "#" },
    ],
  },
];

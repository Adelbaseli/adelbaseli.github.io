import {
  Activity,
  ScanEye,
  AudioLines,
  Gamepad2,
  Sparkles,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

interface CategoryMeta {
  icon: LucideIcon;
  // A representative background image for the category tile. Either a real
  // photo/figure reused from a project in that category, or (for Computer
  // Vision) an original illustration — never a stock image with someone
  // else's branding baked in. Add one here before a category's first
  // project ships, or its tile will render without a background image.
  image?: string;
}

export const categoryMeta: Record<string, CategoryMeta> = {
  "Human Activity Recognition": {
    icon: Activity,
    image: "/categories/human-activity-recognition.jpg",
  },
  "Computer Vision": {
    icon: ScanEye,
    image: "/categories/computer-vision.svg",
  },
  "Audio Processing": {
    icon: AudioLines,
  },
  "Reinforcement Learning": {
    icon: Gamepad2,
  },
  "Agentic AI / LLM / VLM": {
    icon: Sparkles,
    image: "/projects/multimodal-transfer-learning.png",
  },
  "User Studies & Statistical Testing": {
    icon: ClipboardList,
    image: "/projects/rowing-skill-classification.png",
  },
};

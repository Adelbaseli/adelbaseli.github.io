import {
  BarChart3,
  ScanEye,
  AudioLines,
  Sparkles,
  Gamepad2,
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
  "Data Science": {
    icon: BarChart3,
    image: "/categories/data-science.jpg",
  },
  "Computer Vision": {
    icon: ScanEye,
    image: "/categories/computer-vision.svg",
  },
  "Audio & Speech": {
    icon: AudioLines,
    image: "/projects/wifi-sleep-posture.png",
  },
  "AI Agents & LLMs": {
    icon: Sparkles,
    image: "/projects/multimodal-transfer-learning.png",
  },
  "Reinforcement Learning": {
    icon: Gamepad2,
    image: "/projects/rowing-skill-classification.png",
  },
};

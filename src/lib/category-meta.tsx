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
  // A representative background image for the category tile, pre-cropped
  // to the tile's 3:10 aspect ratio (see public/categories/).
  image?: string;
}

export const categoryMeta: Record<string, CategoryMeta> = {
  "Data Science": {
    icon: BarChart3,
    image: "/categories/data-science.jpg",
  },
  "Computer Vision": {
    icon: ScanEye,
    image: "/categories/computer-vision.jpg",
  },
  "Audio & Speech": {
    icon: AudioLines,
    image: "/categories/audio-speech.jpg",
  },
  "AI Agents & LLMs": {
    icon: Sparkles,
    image: "/categories/ai-agents-llms.jpg",
  },
  "Reinforcement Learning": {
    icon: Gamepad2,
    image: "/categories/reinforcement-learning.jpg",
  },
};

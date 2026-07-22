import {
  Eye,
  AudioLines,
  Gamepad2,
  Sparkles,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

interface CategoryMeta {
  icon: LucideIcon;
  // A representative background image for the category tile. Reuses real
  // figures/photos from projects in that category rather than stock photos.
  // Add one here before a category's first project ships, or its tile will
  // render without a background image.
  image?: string;
}

export const categoryMeta: Record<string, CategoryMeta> = {
  "Machine Vision": {
    icon: Eye,
    image: "/projects/pose-prediction-hri.png",
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

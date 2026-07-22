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
  gradient: string;
}

export const categoryMeta: Record<string, CategoryMeta> = {
  "Machine Vision": {
    icon: Eye,
    gradient: "from-indigo-500 to-cyan-500",
  },
  "Audio Processing": {
    icon: AudioLines,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  "Reinforcement Learning": {
    icon: Gamepad2,
    gradient: "from-emerald-500 to-teal-500",
  },
  "Agentic AI / LLM / VLM": {
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-500",
  },
  "User Studies & Statistical Testing": {
    icon: ClipboardList,
    gradient: "from-slate-500 to-blue-500",
  },
};

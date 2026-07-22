import type { IconType } from "react-icons";
import {
  SiPython,
  SiCplusplus,
  SiR,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiFastapi,
  SiNumpy,
  SiPandas,
  SiDatabricks,
  SiDocker,
  SiMlflow,
  SiGit,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";
import {
  Brain,
  Layers,
  Layers3,
  Eye,
  TrendingUp,
  MessageSquare,
  TreePine,
  LineChart,
  Container,
  Workflow,
  Terminal,
  Sigma,
  Database,
  type LucideIcon,
} from "lucide-react";

interface SkillMeta {
  icon: IconType | LucideIcon;
  color: string;
}

export const skillMeta: Record<string, SkillMeta> = {
  Python: { icon: SiPython, color: "#3776AB" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  SQL: { icon: Database, color: "#4479A1" },
  MATLAB: { icon: Sigma, color: "#D95319" },
  R: { icon: SiR, color: "#276DC3" },

  "Machine Learning": { icon: Brain, color: "#8B5CF6" },
  "Deep Learning": { icon: Layers3, color: "#6366F1" },
  "Multimodal DL (RNNs, CNNs, Transformers)": {
    icon: Layers,
    color: "#06B6D4",
  },
  "Machine Vision": { icon: Eye, color: "#10B981" },
  "Time-Series Analysis": { icon: TrendingUp, color: "#F59E0B" },
  "LLMs / VLMs": { icon: MessageSquare, color: "#EC4899" },

  PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
  TensorFlow: { icon: SiTensorflow, color: "#FF6F00" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  XGBoost: { icon: TreePine, color: "#16A34A" },
  FastAPI: { icon: SiFastapi, color: "#009688" },

  NumPy: { icon: SiNumpy, color: "#4DABCF" },
  Pandas: { icon: SiPandas, color: "#8250DF" },
  Matplotlib: { icon: LineChart, color: "#1F77B4" },
  Databricks: { icon: SiDatabricks, color: "#FF3621" },

  Docker: { icon: SiDocker, color: "#2496ED" },
  Singularity: { icon: Container, color: "#64748B" },
  Apptainer: { icon: Container, color: "#64748B" },
  "Microsoft Azure": { icon: TbBrandAzure, color: "#0078D4" },
  AWS: { icon: FaAws, color: "#FF9900" },
  MLflow: { icon: SiMlflow, color: "#0194E2" },
  "CI/CD": { icon: Workflow, color: "#22C55E" },

  Git: { icon: SiGit, color: "#F05032" },
  CLI: { icon: Terminal, color: "#71717A" },
};

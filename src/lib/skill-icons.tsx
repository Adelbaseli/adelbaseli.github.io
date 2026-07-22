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

export const skillIcons: Record<string, IconType | LucideIcon> = {
  Python: SiPython,
  "C++": SiCplusplus,
  SQL: Database,
  MATLAB: Sigma,
  R: SiR,

  "Machine Learning": Brain,
  "Deep Learning": Layers3,
  "Multimodal DL (RNNs, CNNs, Transformers)": Layers,
  "Machine Vision": Eye,
  "Time-Series Analysis": TrendingUp,
  "LLMs / VLMs": MessageSquare,

  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  "Scikit-learn": SiScikitlearn,
  XGBoost: TreePine,
  FastAPI: SiFastapi,

  NumPy: SiNumpy,
  Pandas: SiPandas,
  Matplotlib: LineChart,
  Databricks: SiDatabricks,

  Docker: SiDocker,
  Singularity: Container,
  Apptainer: Container,
  "Microsoft Azure": TbBrandAzure,
  AWS: FaAws,
  MLflow: SiMlflow,
  "CI/CD": Workflow,

  Git: SiGit,
  CLI: Terminal,
};

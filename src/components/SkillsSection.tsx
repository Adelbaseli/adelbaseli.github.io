import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiNumpy,
  SiApachespark,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiDocker,
  SiGooglecloud,
  SiCplusplus,
  SiR,
  SiLangchain,
  SiMlflow,
} from "react-icons/si";
import { Bot, Network, Sparkles, Cpu, Database } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  LangChain: SiLangchain,
  LangGraph: Network,
  MCP: Bot,
  "Fine-tuning": Sparkles,
  LoRA: Sparkles,
  RLHF: Sparkles,
  GRPO: Sparkles,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  "Scikit-learn": SiScikitlearn,
  XGBoost: Cpu,
  NumPy: SiNumpy,
  "Apache Spark": SiApachespark,
  MLflow: SiMlflow,
  Kubernetes: SiKubernetes,
  Docker: SiDocker,
  "CI/CD": Cpu,
  GCP: SiGooglecloud,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Python: SiPython,
  "C++": SiCplusplus,
  SQL: Database,
  R: SiR,
};

export default function SkillsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="flex flex-col gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => {
                  const Icon = iconMap[item] ?? Cpu;
                  return (
                    <div
                      key={item}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-purple-500/20 dark:border-purple-500/10 bg-purple-500/5 backdrop-blur-sm"
                    >
                      <Icon className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">{item}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
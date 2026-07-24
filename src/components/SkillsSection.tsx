import React from "react";
import { skills } from "@/lib/data";
import { skillMeta } from "@/lib/skill-icons";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

function SkillTag({ skill, index }: { skill: string; index: number }) {
  const meta = skillMeta[skill];
  const Icon = meta?.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.05 * index,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-1.5 px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-indigo-500/10 shadow-sm"
    >
      {Icon && (
        <Icon className="h-4 w-4 shrink-0" style={{ color: meta.color }} />
      )}
      {skill}
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillCategoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const skillCategories = [
  {
    icon: "💻",
    title: "Programming Languages",
    items: skills.programmingLanguages,
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    items: skills.aiAndMachineLearning,
  },
  {
    icon: "🧠",
    title: "ML Frameworks",
    items: skills.mlFrameworks,
  },
  {
    icon: "🗄️",
    title: "Data & Storage",
    items: skills.dataAndStorage,
  },
  {
    icon: "☁️",
    title: "DevOps & Tools",
    items: skills.devOpsAndTools,
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 relative"
    >
      <div className="container max-w-[1344px] mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🛠️ Skills
          </h2>
        </MotionWrapper>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={skillCategoryVariants}>
              <GlassCard className="p-4 h-full">
                <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                  <span className="mr-2 text-xl">{category.icon}</span>{" "}
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {category.items.map((skill, index) => (
                    <SkillTag key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

function SkillTag({
  skill,
  Icon,
  index,
}: {
  skill: string;
  Icon: React.ElementType;
  index: number;
}) {
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
      className="flex items-center gap-2 px-3 py-2 bg-muted/80 backdrop-blur-sm rounded-md border border-purple-500/10 shadow-sm"
    >
      <Icon className="w-4 h-4 text-purple-500" />
      <span className="text-sm">{skill}</span>
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

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8">
            Skills
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={skillCategoryVariants}>
              <GlassCard className="p-4">
                <h3 className="text-lg font-medium mb-4">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <SkillTag
                      key={skill.name}
                      skill={skill.name}
                      Icon={skill.icon}
                      index={index}
                    />
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
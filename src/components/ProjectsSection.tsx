import React, { useState } from "react";
import { projects, techniqueCategories } from "@/lib/data";
import { categoryMeta } from "@/lib/category-meta";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowLeft, Eye, Github, X } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { cn } from "@/lib/utils";
import MotionWrapper from "./MotionWrapper";
import { AnimatePresence, motion } from "framer-motion";

type Project = (typeof projects)[number];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    null
  );
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const availableCategories = techniqueCategories.filter((category) =>
    projects.some((project) => project.techniques?.includes(category))
  );
  const categoryProjects = selectedCategory
    ? projects.filter((project) =>
        project.techniques?.includes(selectedCategory)
      )
    : [];
  const selectedMeta = selectedCategory ? categoryMeta[selectedCategory] : null;

  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🚀 Projects
          </h2>
        </MotionWrapper>

        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="categories"
              exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.25 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {availableCategories.map((category, index) => {
                const meta = categoryMeta[category];
                const Icon = meta.icon;
                const count = projects.filter((p) =>
                  p.techniques?.includes(category)
                ).length;
                return (
                  <motion.button
                    key={category}
                    layoutId={`category-card-${category}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl p-8 text-left text-white shadow-lg bg-gradient-to-br",
                      meta.gradient
                    )}
                  >
                    <Icon className="h-10 w-10 mb-4 opacity-90 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
                    <h3 className="text-xl font-semibold">{category}</h3>
                    <p className="text-sm text-white/80 mt-1">
                      {count} {count === 1 ? "project" : "projects"}
                    </p>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </motion.button>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="projects"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {selectedMeta && (
                <motion.button
                  layoutId={`category-card-${selectedCategory}`}
                  onClick={() => setSelectedCategory(null)}
                  className={cn(
                    "flex items-center gap-4 w-full rounded-2xl p-6 mb-8 text-left text-white shadow-lg bg-gradient-to-br",
                    selectedMeta.gradient
                  )}
                >
                  <ArrowLeft className="h-5 w-5 shrink-0" />
                  <selectedMeta.icon className="h-8 w-8 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {selectedCategory}
                    </h3>
                    <p className="text-sm text-white/80">
                      {categoryProjects.length}{" "}
                      {categoryProjects.length === 1 ? "project" : "projects"}
                    </p>
                  </div>
                </motion.button>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <GlassCard
                      onClick={() => setActiveProject(project)}
                      className="group overflow-hidden dark:border-indigo-500/10 h-full flex flex-col cursor-pointer"
                    >
                      {project.image && (
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-all duration-700 ease-out group-hover:scale-125 group-hover:-rotate-2 group-hover:brightness-50 group-hover:shadow-2xl"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="flex translate-y-3 items-center gap-2 text-sm font-medium text-white opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
                              <Eye className="h-4 w-4" />
                              View Details
                            </span>
                          </div>
                        </div>
                      )}
                      <CardHeader className="bg-gradient-to-r from-indigo-500/5 to-cyan-500/5">
                        <CardTitle className="text-center md:text-left group-hover:text-indigo-500 transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        {project.domains && project.domains.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start pt-1">
                            {project.domains.map((domain) => (
                              <span
                                key={domain}
                                className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/50"
                              >
                                {domain}
                              </span>
                            ))}
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="list-disc ml-4 space-y-1 text-sm group-hover:space-y-2 transition-all duration-300">
                          {project.description.map((desc, i) => (
                            <motion.li
                              key={i}
                              className="text-muted-foreground"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              {desc}
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                      {project.github && (
                        <CardFooter className="flex justify-center md:justify-start items-center border-t border-border/30 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center text-sm text-muted-foreground hover:text-indigo-500 transition-colors group/link pt-8"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                            View on GitHub 🔗
                          </motion.a>
                        </CardFooter>
                      )}
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-background rounded-xl max-w-xl w-full max-h-[85vh] overflow-y-auto border border-border/50 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {activeProject.image && (
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold">{activeProject.title}</h3>
                  <button
                    onClick={() => setActiveProject(null)}
                    aria-label="Close"
                    className="shrink-0 text-muted-foreground hover:text-indigo-500 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                {activeProject.domains && activeProject.domains.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {activeProject.domains.map((domain) => (
                      <span
                        key={domain}
                        className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/50"
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                )}
                <ul className="list-disc ml-4 space-y-2 text-sm text-muted-foreground">
                  {(activeProject.details ?? activeProject.description).map(
                    (desc, i) => (
                      <li key={i}>{desc}</li>
                    )
                  )}
                </ul>
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-indigo-500 transition-colors mt-6"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub 🔗
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

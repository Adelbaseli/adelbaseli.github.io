import React, { useState, useRef, useEffect } from "react";
import { projects, techniqueCategories } from "@/lib/data";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Eye, ExternalLink, X } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { AnimatePresence, motion, useInView } from "framer-motion";

type Project = (typeof projects)[number];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { margin: "200px 0px" });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  const availableTags = techniqueCategories.filter((tag) =>
    projects.some((project) => project.techniques?.includes(tag))
  );

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const rank = (project: Project) =>
    project.title.includes("(Ongoing)") &&
    project.techniques?.includes("Audio & Speech")
      ? 2
      : project.techniques?.includes("Reinforcement Learning")
        ? 1
        : 0;

  const visibleProjects = (
    activeTags.length === 0
      ? projects
      : projects.filter((project) =>
          project.techniques?.some((t) => activeTags.includes(t))
        )
  )
    .slice()
    .sort((a, b) => rank(a) - rank(b));

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          src="/videos/prima-care-bg.mp4"
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>
      <div className="container max-w-[1344px] mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            🚀 Projects
          </h2>
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <p className="text-muted-foreground mb-6 text-center md:text-left">
            AI/ML projects I've led or contributed to, spanning computer
            vision, audio, robotics, and language models. Filter by tag, or
            browse them all below.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.15}>
          <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
            <button
              onClick={() => setActiveTags([])}
              className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                activeTags.length === 0
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "bg-muted text-muted-foreground border-border/50 hover:border-indigo-500/50"
              }`}
            >
              All
            </button>
            {availableTags.map((tag) => {
              const active = activeTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                    active
                      ? "bg-indigo-500 text-white border-indigo-500"
                      : "bg-muted text-muted-foreground border-border/50 hover:border-indigo-500/50"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (index % 8) * 0.05 }}
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
                      className="w-full h-56 object-cover transition-all duration-700 ease-out group-hover:scale-125 group-hover:-rotate-2 group-hover:brightness-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="flex translate-y-3 items-center gap-2 text-sm font-medium text-white opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
                        <Eye className="h-4 w-4" />
                        View Details
                      </span>
                    </div>
                  </div>
                )}
                <CardHeader className="bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 py-3">
                  <CardTitle className="text-sm leading-snug text-center md:text-left group-hover:text-indigo-500 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow py-2">
                  <ul className="list-disc ml-4 space-y-1 text-xs">
                    {project.description.slice(0, 2).map((desc, i) => (
                      <li key={i} className="text-muted-foreground">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </GlassCard>
            </motion.div>
          ))}
        </div>
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
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View More
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

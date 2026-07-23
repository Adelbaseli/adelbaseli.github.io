import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import type { projects as allProjects } from "@/lib/data";

type Project = (typeof allProjects)[number];

interface CategoryHoverPreviewProps {
  category: string;
  categoryProjects: Project[];
  anchorY: number;
  side: "left" | "right";
}

const ARROW_WIDTH = 110;
const ARROW_HEIGHT = 80;
const BOX_WIDTH = 240;
const EDGE_GAP = 12;

function ArrowIcon({ side }: { side: "left" | "right" }) {
  const d =
    side === "right"
      ? "M 2 40 H 32 V 12 H 68 V 60 H 96"
      : "M 108 40 H 78 V 12 H 42 V 60 H 14";
  const headD =
    side === "right" ? "M 88 30 L 100 40 L 88 50" : "M 22 30 L 10 40 L 22 50";

  return (
    <svg
      width={ARROW_WIDTH}
      height={ARROW_HEIGHT}
      viewBox={`0 0 ${ARROW_WIDTH} ${ARROW_HEIGHT}`}
      fill="none"
      className="shrink-0 text-indigo-400"
    >
      <motion.path
        d={d}
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.path
        d={headD}
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.42, duration: 0.18 }}
      />
    </svg>
  );
}

export default function CategoryHoverPreview({
  category,
  categoryProjects,
  anchorY,
  side,
}: CategoryHoverPreviewProps) {
  if (typeof document === "undefined") return null;

  const containerHeight = Math.max(
    ARROW_HEIGHT,
    52 + categoryProjects.length * 46
  );
  const viewportHeight =
    typeof window !== "undefined" ? window.innerHeight : 900;
  const top = Math.min(
    Math.max(anchorY - containerHeight / 2, 16),
    viewportHeight - containerHeight - 16
  );

  return createPortal(
    <motion.div
      className="fixed z-[60] flex items-center pointer-events-none"
      style={{ top, [side]: EDGE_GAP }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      {side === "left" && <ArrowIcon side="left" />}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, x: side === "left" ? 12 : -12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.35, ease: "easeOut" }}
        className="relative overflow-hidden rounded-xl border border-border/50 bg-background/95 shadow-2xl backdrop-blur-md"
        style={{ width: BOX_WIDTH }}
      >
        <div className="px-3 pt-3 pb-1.5 text-xs font-medium text-muted-foreground">
          {category}
        </div>
        <div className="px-2 pb-2 space-y-1.5">
          {categoryProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: side === "left" ? 8 : -8 }}
              animate={{
                opacity: Math.max(1 - i * 0.24, 0.12),
                x: 0,
              }}
              transition={{ delay: 0.55 + i * 0.12, duration: 0.3 }}
              className="flex items-center gap-2 rounded-lg bg-muted/60 p-1.5"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt=""
                  className="h-8 w-8 shrink-0 rounded object-cover"
                />
              )}
              <span className="text-xs leading-tight line-clamp-2">
                {project.title}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent" />
      </motion.div>
      {side === "right" && <ArrowIcon side="right" />}
    </motion.div>,
    document.body
  );
}

import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import type { projects as allProjects } from "@/lib/data";

type Project = (typeof allProjects)[number];

interface CategoryHoverPreviewProps {
  category: string;
  categoryProjects: Project[];
  tileCenterX: number;
  rowTop: number;
  rowBottom: number;
  rowLeft: number;
  rowRight: number;
  side: "left" | "right";
}

const BOX_WIDTH = 300;
const EDGE_GAP = 10;
const ARROW_RISE = 30;

export default function CategoryHoverPreview({
  category,
  categoryProjects,
  tileCenterX,
  rowTop,
  rowBottom,
  rowLeft,
  rowRight,
  side,
}: CategoryHoverPreviewProps) {
  if (typeof document === "undefined") return null;

  const viewportW = typeof window !== "undefined" ? window.innerWidth : 1400;
  const viewportH = typeof window !== "undefined" ? window.innerHeight : 900;

  const boxTop = Math.max(rowTop, 8);
  const boxBottom = Math.min(rowBottom, viewportH - 8);
  const boxHeight = Math.max(boxBottom - boxTop, 140);

  const boxLeft =
    side === "left"
      ? Math.max(rowLeft - EDGE_GAP - BOX_WIDTH, 8)
      : Math.min(rowRight + EDGE_GAP, viewportW - BOX_WIDTH - 8);
  const boxCenterX = boxLeft + BOX_WIDTH / 2;

  const rise = Math.min(ARROW_RISE, boxTop - 8);
  const arrowTopY = boxTop - rise;
  const arrowLeftX = Math.min(tileCenterX, boxCenterX);
  const arrowRightX = Math.max(tileCenterX, boxCenterX);
  const arrowWidth = Math.max(arrowRightX - arrowLeftX, 1);
  const tileLocalX = tileCenterX - arrowLeftX;
  const boxLocalX = boxCenterX - arrowLeftX;

  const linePath = `M ${tileLocalX} ${rise} L ${tileLocalX} 0 L ${boxLocalX} 0 L ${boxLocalX} ${rise}`;
  const headPath = `M ${boxLocalX - 6} ${rise - 8} L ${boxLocalX} ${rise} L ${boxLocalX + 6} ${rise - 8}`;

  return createPortal(
    <>
      <svg
        className="fixed z-[60] text-indigo-400"
        style={{
          top: arrowTopY,
          left: arrowLeftX,
          width: arrowWidth,
          height: rise,
        }}
        viewBox={`0 0 ${arrowWidth} ${rise}`}
        fill="none"
      >
        <motion.path
          d={linePath}
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d={headPath}
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.42, duration: 0.18 }}
        />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: side === "left" ? 12 : -12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
        transition={{ delay: 0.5, duration: 0.35, ease: "easeOut" }}
        className="fixed z-[60] overflow-hidden rounded-xl border border-border/50 bg-background/95 shadow-2xl backdrop-blur-md"
        style={{ top: boxTop, left: boxLeft, width: BOX_WIDTH, height: boxHeight }}
      >
        <div className="px-4 pt-4 pb-2 text-sm font-semibold text-muted-foreground">
          {category}
        </div>
        <div className="px-3 pb-3 space-y-3 overflow-hidden">
          {categoryProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: side === "left" ? 10 : -10 }}
              animate={{
                opacity: Math.max(1 - i * 0.22, 0.12),
                x: 0,
              }}
              transition={{ delay: 0.55 + i * 0.14, duration: 0.3 }}
              className="overflow-hidden rounded-lg bg-muted/60"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt=""
                  className="h-24 w-full object-cover"
                />
              )}
              <div className="p-2.5">
                <span className="text-sm font-medium leading-snug line-clamp-2">
                  {project.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
      </motion.div>
    </>,
    document.body
  );
}

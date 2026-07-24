import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

// Density-based rather than a fixed count: this canvas spans Hero + Experience
// + Skills combined, which is much taller than one viewport, so a fixed count
// would look sparse. ~1 node per 8,000px^2 gives a dense, interconnected mesh
// rather than a sparse "stars in the sky" look; clamp so very tall/short pages
// stay reasonable.
const AREA_PER_NODE = 8000;
const MIN_NODES = 70;
const MAX_NODES = 380;
const LINK_DISTANCE = 190;
const DARK_COLOR = "255, 255, 255";
const LIGHT_COLOR = "15, 23, 42"; // slate-900, reads against the light theme

export default function NetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const sizeRef = useRef({ width: 0, height: 0 });
  const rafRef = useRef<number | null>(null);
  const colorRef = useRef(DARK_COLOR);
  const isInView = useInView(containerRef, { margin: "200px 0px" });

  // One-time setup: size the canvas, seed the nodes, keep them in sync on resize.
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Re-seeds node positions/count to match the current size. Re-run on every
    // resize (not just once) because the sibling sections are separate
    // `client:only` islands that hydrate asynchronously - this container can
    // still be near-zero height the first time we measure it.
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = container.clientWidth;
      const height = container.clientHeight;
      sizeRef.current = { width, height };
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const nodeCount = Math.min(
        MAX_NODES,
        Math.max(MIN_NODES, Math.round((width * height) / AREA_PER_NODE))
      );
      // Sample x from a distribution whose density decreases linearly from
      // left (densest) to right (sparsest), instead of a uniform spread -
      // this is an actual density gradient, not just an opacity fade.
      nodesRef.current = Array.from({ length: nodeCount }, () => ({
        x: width * (1 - Math.sqrt(1 - Math.random())),
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  // Track light/dark theme so the network stays visible in either.
  useEffect(() => {
    const updateColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      colorRef.current = isDark ? DARK_COLOR : LIGHT_COLOR;
    };
    updateColor();

    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Drive the animation loop, paused whenever the section is off-screen.
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const draw = () => {
      const { width, height } = sizeRef.current;
      const nodes = nodesRef.current;
      const n = nodes.length;
      const color = colorRef.current;
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;
      }

      // Track each node's two closest neighbors as we go, so we can force a
      // connection to them even when they're farther than LINK_DISTANCE -
      // this keeps the whole thing reading as one connected mesh instead of
      // several separate clumps of nodes.
      const nearestDist1 = new Array(n).fill(Infinity);
      const nearestIdx1 = new Array(n).fill(-1);
      const nearestDist2 = new Array(n).fill(Infinity);
      const nearestIdx2 = new Array(n).fill(-1);
      const updateNearest = (i: number, j: number, dist: number) => {
        if (dist < nearestDist1[i]) {
          nearestDist2[i] = nearestDist1[i];
          nearestIdx2[i] = nearestIdx1[i];
          nearestDist1[i] = dist;
          nearestIdx1[i] = j;
        } else if (dist < nearestDist2[i]) {
          nearestDist2[i] = dist;
          nearestIdx2[i] = j;
        }
      };

      ctx.lineWidth = 1;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          updateNearest(i, j, dist);
          updateNearest(j, i, dist);

          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${color}, ${0.15 * (1 - dist / LINK_DISTANCE)})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < n; i++) {
        for (const j of [nearestIdx1[i], nearestIdx2[i]]) {
          if (j === -1) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${color}, 0.12)`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = `rgba(${color}, 0.55)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    if (prefersReducedMotion) {
      draw();
      return;
    }

    if (!isInView) return;

    const loop = () => {
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

// Density-based rather than a fixed count, so it still looks right at
// whatever height the Hero section ends up being. ~1 node per 8,000px^2
// gives a dense, interconnected mesh rather than a sparse "stars in the
// sky" look; clamp so very tall/short viewports stay reasonable.
const AREA_PER_NODE = 8000;
const MIN_NODES = 70;
const MAX_NODES = 380;
const LINK_DISTANCE = 190;
const NODE_COLOR = "99, 102, 241"; // indigo-500
const LINK_COLOR = "34, 211, 238"; // cyan-400

export default function NetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const sizeRef = useRef({ width: 0, height: 0 });
  const rafRef = useRef<number | null>(null);
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
      // Sample both x and y from a distribution that's densest at the
      // top-left corner and decreases going right and down - an actual
      // density gradient (not just an opacity fade over a uniform mesh).
      nodesRef.current = Array.from({ length: nodeCount }, () => ({
        x: width * (1 - Math.sqrt(1 - Math.random())),
        y: height * (1 - Math.sqrt(1 - Math.random())),
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
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
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;
      }

      // Track each node's three closest neighbors as we go, so we can force
      // a connection to them even when they're farther than LINK_DISTANCE -
      // this keeps the whole thing reading as one connected mesh instead of
      // several separate clumps of nodes.
      const nearestDist = [
        new Array(n).fill(Infinity),
        new Array(n).fill(Infinity),
        new Array(n).fill(Infinity),
      ];
      const nearestIdx = [
        new Array(n).fill(-1),
        new Array(n).fill(-1),
        new Array(n).fill(-1),
      ];
      const updateNearest = (i: number, j: number, dist: number) => {
        if (dist < nearestDist[0][i]) {
          nearestDist[2][i] = nearestDist[1][i];
          nearestIdx[2][i] = nearestIdx[1][i];
          nearestDist[1][i] = nearestDist[0][i];
          nearestIdx[1][i] = nearestIdx[0][i];
          nearestDist[0][i] = dist;
          nearestIdx[0][i] = j;
        } else if (dist < nearestDist[1][i]) {
          nearestDist[2][i] = nearestDist[1][i];
          nearestIdx[2][i] = nearestIdx[1][i];
          nearestDist[1][i] = dist;
          nearestIdx[1][i] = j;
        } else if (dist < nearestDist[2][i]) {
          nearestDist[2][i] = dist;
          nearestIdx[2][i] = j;
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
            ctx.strokeStyle = `rgba(${LINK_COLOR}, ${0.18 * (1 - dist / LINK_DISTANCE)})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < n; i++) {
        for (const j of [nearestIdx[0][i], nearestIdx[1][i], nearestIdx[2][i]]) {
          if (j === -1) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${LINK_COLOR}, 0.14)`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = `rgba(${NODE_COLOR}, 0.45)`;
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

"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FooterWave() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress **within the footer** (0 when top hits viewport bottom, 1 when it leaves)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    mass: 0.6,
  });

  // Parallax layers (only active while the footer is on screen)
  const x1 = useTransform(smooth, [0, 1], ["10%", "-25%"]);
  const x2 = useTransform(smooth, [0, 1], ["-15%", "20%"]);
  const x3 = useTransform(smooth, [0, 1], ["5%", "-10%"]);

  const y1 = useTransform(smooth, [0, 1], [30, -10]);
  const y2 = useTransform(smooth, [0, 1], [20, -20]);
  const y3 = useTransform(smooth, [0, 1], [10, -30]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Layer 1 — back */}
      <motion.svg
        style={{ x: x1, y: y1 }}
        className="absolute left-0 top-0 h-[140%] w-[200%] will-change-transform"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fwave1" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--acc)" stopOpacity="0.10" />
            <stop offset="50%" stopColor="var(--acc)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--acc)" stopOpacity="0.10" />
          </linearGradient>
        </defs>
        <path
          fill="url(#fwave1)"
          d="M0,380 C240,300 480,460 720,400 C960,340 1200,460 1440,380 L1440,600 L0,600 Z"
        />
      </motion.svg>

      {/* Layer 2 — middle */}
      <motion.svg
        style={{ x: x2, y: y2 }}
        className="absolute left-0 top-0 h-[140%] w-[200%] will-change-transform"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fwave2" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--acc)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="var(--acc)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--acc)" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path
          fill="url(#fwave2)"
          d="M0,460 C300,520 600,360 900,440 C1140,500 1320,400 1440,460 L1440,600 L0,600 Z"
        />
      </motion.svg>

      {/* Layer 3 — front */}
      <motion.svg
        style={{ x: x3, y: y3 }}
        className="absolute left-0 top-0 h-[140%] w-[200%] will-change-transform"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fwave3" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--acc)" stopOpacity="0.05" />
            <stop offset="50%" stopColor="var(--acc)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--acc)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          fill="url(#fwave3)"
          d="M0,530 C360,470 720,580 1080,510 C1260,475 1380,560 1440,530 L1440,600 L0,600 Z"
        />
      </motion.svg>

      {/* Soft fade at the top so the wave blends with the section above */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg to-transparent" />
    </div>
  );
}

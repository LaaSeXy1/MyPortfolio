"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WaveBackground() {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll progress across the whole page (0 → 1)
  const { scrollYProgress } = useScroll();

  // Spring smooths the raw scroll value → no jitter
  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.6,
  });

  // Each layer moves at a different speed (parallax)
  const x1 = useTransform(smooth, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(smooth, [0, 1], ["0%", "25%"]);
  const x3 = useTransform(smooth, [0, 1], ["0%", "-15%"]);

  // Subtle vertical drift so waves feel alive
  const y1 = useTransform(smooth, [0, 1], [0, -40]);
  const y2 = useTransform(smooth, [0, 1], [0, 30]);
  const y3 = useTransform(smooth, [0, 1], [0, -20]);

  // Fade slightly as you scroll for depth
  const opacity = useTransform(smooth, [0, 1], [1, 0.55]);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1 — back, slow, big */}
      <motion.svg
        style={{ x: x1, y: y1, opacity }}
        className="absolute left-0 top-0 h-full w-[200%] will-change-transform"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave1" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--acc)" stopOpacity="0.10" />
            <stop offset="50%" stopColor="var(--acc)" stopOpacity="0.20" />
            <stop offset="100%" stopColor="var(--acc)" stopOpacity="0.10" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave1)"
          d="M0,600 C240,520 480,700 720,620 C960,540 1200,680 1440,600 L1440,900 L0,900 Z"
        />
      </motion.svg>

      {/* Layer 2 — middle */}
      <motion.svg
        style={{ x: x2, y: y2, opacity }}
        className="absolute left-0 top-0 h-full w-[200%] will-change-transform"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave2" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--acc)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="var(--acc)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--acc)" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave2)"
          d="M0,700 C300,780 600,560 900,660 C1140,740 1320,620 1440,700 L1440,900 L0,900 Z"
        />
      </motion.svg>

      {/* Layer 3 — front, fastest, lightest */}
      <motion.svg
        style={{ x: x3, y: y3, opacity }}
        className="absolute left-0 top-0 h-full w-[200%] will-change-transform"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave3" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--acc)" stopOpacity="0.05" />
            <stop offset="50%" stopColor="var(--acc)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--acc)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave3)"
          d="M0,780 C360,700 720,860 1080,760 C1260,710 1380,820 1440,780 L1440,900 L0,900 Z"
        />
      </motion.svg>

      {/* Optional soft radial glow to blend the waves */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,transparent_40%,var(--bg)_100%)]" />
    </div>
  );
}

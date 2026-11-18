"use client";
import { MotionConfig, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
function Cursor() {
  const x = useMotionValue(-100),
    y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 35 }),
    sy = useSpring(y, { stiffness: 400, damping: 35 });
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (
      !window.matchMedia("(pointer:fine)").matches ||
      window.matchMedia("(prefers-reduced-motion:reduce)").matches
    )
      return;
    setOn(true);
    const m = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, [x, y]);
  return on ? (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100] h-6 w-6 rounded-full border border-acc/60"
    />
  ) : null;
}
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <Cursor />
      {children}
    </MotionConfig>
  );
}

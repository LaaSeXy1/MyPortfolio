"use client";
import type { Project } from "@/data/projects";
import { motion } from "framer-motion";
export function Thumb({ p, className = "" }: { p: Project; className?: string }) {
  const initials = p.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div
      role="img"
      aria-label={`${p.name} placeholder thumbnail`}
      className={`grid place-items-center text-5xl font-semibold text-white/90 ${className}`}
      style={{
        background: `linear-gradient(135deg,hsl(${p.hue} 70% 45%),hsl(${p.hue + 40} 70% 35%))`,
      }}
    >
      {initials}
    </div>
  );
}
export default function ProjectCard({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative h-full overflow-hidden rounded-2xl
        border border-line bg-card
        transition-colors duration-300
        hover:border-acc/60 hover:shadow-xl hover:shadow-acc/10
        before:absolute before:inset-x-0 before:bottom-0 before:z-10 before:h-1
        before:bg-gradient-to-r before:from-teal-600 before:via-emerald-400 before:to-amber-400
        before:content-['']"
    >
      <button
        onClick={() => onOpen(p)}
        className="block w-full text-left"
        aria-label={`View details of ${p.name}`}
      >
        <div className="overflow-hidden">
          <Thumb p={p} className="h-44 transition duration-500 group-hover:scale-110" />
        </div>
        <div className="p-5">
          <h3 className="font-semibold">{p.name}</h3>
          <p className="mt-1 text-sm text-mute">{p.short}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-2.5 py-0.5 text-xs text-mute"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </button>
    </motion.article>
  );
}

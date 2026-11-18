"use client";
import ProjectCard, { Thumb } from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useEffect, useState } from "react";
const cats = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
export default function Projects() {
  const [cat, setCat] = useState("All"),
    [sel, setSel] = useState<Project | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setSel(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  const list = projects.filter((p) => cat === "All" || p.category === cat);
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-4">
      <SectionHeading
        title="Featured projects"
        sub="Select a project for details. Links are placeholders until you add real URLs."
      />
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition",
              cat === c
                ? "border-acc bg-acc text-white dark:text-[#080B14]"
                : "border-line bg-card hover:border-acc",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <ProjectCard key={p.id} p={p} onOpen={setSel} />
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {sel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSel(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/50 p-4"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={sel.name}
              initial={{ y: 30, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 30, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-xl overflow-auto rounded-2xl border border-line bg-card"
            >
              <div className="relative">
                <Thumb p={sel} className="h-52" />
                <button
                  autoFocus
                  onClick={() => setSel(null)}
                  aria-label="Close"
                  className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-sm text-mute">{sel.category}</p>
                <h3 className="text-2xl font-semibold">{sel.name}</h3>
                <p className="mt-3 text-mute">{sel.details}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {sel.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-2.5 py-0.5 text-xs text-mute"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href={sel.demo}
                    className="inline-flex items-center gap-2 rounded-full bg-acc px-5 py-2.5 text-sm font-medium text-white dark:text-[#080B14]"
                  >
                    <ExternalLink size={14} />
                    View Project
                  </a>
                  <a
                    href={sel.github}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-acc"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

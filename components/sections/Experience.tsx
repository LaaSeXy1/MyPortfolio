"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 80%"],
  });

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="mx-auto max-w-4xl px-5 py-24">
      <SectionHeading title="Professional experience" />

      <div ref={timelineRef} className="relative pl-8">
        <div className="absolute bottom-0 left-[7px] top-1 w-px bg-line" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: lineProgress }}
          className="absolute bottom-0 left-[7px] top-1 w-px origin-top bg-acc"
        />

        {/* Experience Items */}
        <ol className="space-y-10">
          {experience.map((e, index) => (
            <li key={`${e.role}-${index}`} className="relative">
              {/* Timeline Circle */}
              <div className="absolute -left-8 top-1.5 z-10 grid h-4 w-4 place-items-center rounded-full border-2 border-acc bg-bg">
                <motion.span
                  style={{ scale: lineProgress }}
                  className="h-2 w-2 rounded-full bg-acc"
                />
              </div>

              <Reveal>
                <div
                  className="group relative overflow-hidden rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-acc/50 hover:shadow-xl
                  before:absolute before:inset-x-0 before:top-0 before:h-1
                  before:bg-gradient-to-r before:from-teal-600 before:via-emerald-400 before:to-amber-400
                  before:content-['']"
                >
                  <p className="text-sm text-mute">{e.period}</p>

                  <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-fg">{e.role}</h3>

                    <span className="rounded-full border border-acc/20 bg-acc/10 px-3 py-1 text-xs text-acc">
                      {e.type}
                    </span>
                  </div>

                  <p className="text-acc">{e.org}</p>

                  <ul className="mt-3 list-disc space-y-2 pl-5 text-mute">
                    {e.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

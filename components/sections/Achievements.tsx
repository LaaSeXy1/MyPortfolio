"use client";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements, careers } from "@/data/education";
import { motion } from "framer-motion";
export default function Achievements() {
  return (
    <>
      <section id="achievements" className="mx-auto max-w-6xl px-5 py-4">
        <SectionHeading
          title="Achievements & certifications"
          sub="Only verified items are shown. Placeholders are marked “To be added”."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-acc/50 hover:shadow-lg before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-teal-600 before:via-emerald-400 before:to-amber-400 before:content-['']">
                <h3 className="font-semibold">{a.title}</h3>
                <p className="mt-2 text-mute">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="careers" className="mx-auto max-w-6xl px-5 py-4">
        <SectionHeading title="Where I'm heading" sub="Career paths I'm working toward." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {careers.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-acc/50 hover:shadow-lg before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-teal-600 before:via-emerald-400 before:to-amber-400 before:content-['']"
              >
                <c.icon className="text-acc" />
                <h3 className="mt-4 font-semibold">{c.title}</h3>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

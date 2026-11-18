import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/ui/SkillCard";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-4">
      <SectionHeading
        title="Technical skills"
        sub="Technologies I work with and topics I'm exploring."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group}>
            <div
              className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-acc/50 hover:shadow-xl
              after:absolute after:inset-x-0 after:top-0 after:z-10 after:h-1
              after:bg-gradient-to-r after:from-teal-600 after:via-emerald-400 after:to-amber-400
              after:content-['']"
            >
              <SkillCard group={s.group} icon={s.icon} items={s.items} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

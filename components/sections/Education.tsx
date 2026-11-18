import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, futureGoals } from "@/data/education";
import { BookOpen, GraduationCap, Target } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-4">
      <SectionHeading title="Education" />
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          {education.map((item, index) => (
            <Reveal key={`${item.school}-${item.major}`} delay={index * 0.08}>
              <div
                className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-acc/50 hover:shadow-lg
  before:absolute before:inset-x-0 before:top-0 before:h-1
  before:bg-gradient-to-r before:from-teal-600 before:via-emerald-400 before:to-amber-400
  before:content-['']"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-acc/10">
                    <GraduationCap className="text-acc" size={24} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-mute">{item.period}</p>

                    <h3 className="mt-1 text-lg font-semibold">{item.school}</h3>

                    <p className="mt-1 font-medium text-acc">
                      {item.degree} · {item.major}
                    </p>

                    <p className="mt-3 text-sm leading-7 text-mute">{item.note}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <div
            className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-acc/50 hover:shadow-lg
  before:absolute before:inset-x-0 before:top-0 before:h-1
  before:bg-gradient-to-r before:from-teal-600 before:via-emerald-400 before:to-amber-400
  before:content-['']"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-acc/10 transition-colors duration-300 hover:bg-acc/20">
              <Target className="text-acc" size={24} />
            </div>

            <h3 className="mt-4 text-xl font-semibold">Future Academic Goals</h3>

            <p className="mt-2 text-sm leading-6 text-mute">
              Areas I aspire to explore and pursue through continuous learning and higher education.
            </p>

            <ul className="mt-6 space-y-4">
              {futureGoals.map((goal) => (
                <li
                  key={goal}
                  className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
                >
                  <BookOpen size={18} className="mt-0.5 shrink-0 text-acc" />
                  <span className="text-sm font-medium">{goal}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-acc/5 p-4 transition-colors duration-300 hover:bg-acc/10">
              <p className="text-sm font-medium text-acc">Continuous Learning</p>
              <p className="mt-1 text-xs leading-5 text-mute">
                Committed to expanding my knowledge and developing expertise in emerging
                technologies.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

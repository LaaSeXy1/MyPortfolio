"use client";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { animate, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null),
    inView = useInView(ref, { once: true }),
    [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.2, onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{n}</span>;
}
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-4">
      <SectionHeading title="About me" sub={`${profile.location} · Major: Financial Technology`} />
      <div className="grid gap-12 md:grid-cols-[1fr_1.7fr]">
        <Reveal>
          {/* Added rotate wrapper here */}
          <div className="rotate-[5deg] hover:rotate-0 transition-transform duration-500 ease-in-out w-full max-w-sm mx-auto md:mx-0">
            <div className="group relative w-full overflow-hidden rounded-3xl p-[2px] bg-gradient-to-br from-teal-600 via-emerald-400 to-amber-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img
                src={profile.photo}
                alt={`${profile.name} profile`}
                className="aspect-square w-full rounded-[22px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal className="space-y-4 text-mute">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal className="mt-6">
            <ul className="space-y-2">
              {profile.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-acc" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="mt-6 flex flex-wrap gap-2">
            {profile.interests.map((t) => (
              <span key={t} className="rounded-full border border-line bg-card px-3 py-1 text-sm">
                {t}
              </span>
            ))}
          </Reveal>
          <Reveal className="mt-10 grid grid-cols-3 gap-4">
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-2xl border border-line bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-acc/50 hover:shadow-lg
                before:absolute before:inset-x-0 before:top-0 before:h-1
                before:bg-gradient-to-r before:from-teal-600 before:via-emerald-400 before:to-amber-400
                before:content-['']"
              >
                <p className="text-3xl font-semibold text-acc">
                  <Counter to={s.value} />
                </p>
                <p className="mt-1 text-sm text-mute">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

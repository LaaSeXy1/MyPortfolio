"use client";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { Facebook, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
type Errs = Partial<Record<"name" | "email" | "message", string>>;
export default function Contact() {
  const [errs, setErrs] = useState<Errs>({}),
    [done, setDone] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget,
      f = new FormData(form);
    const name = String(f.get("name")).trim(),
      email = String(f.get("email")).trim(),
      message = String(f.get("message")).trim(),
      er: Errs = {};
    if (name.length < 2) er.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) er.email = "Enter a valid email address.";
    if (message.length < 10) er.message = "Write at least 10 characters.";
    const ok = Object.keys(er).length === 0;
    setErrs(er);
    setDone(ok);
    if (ok) form.reset();
  };
  const input =
    "mt-1 w-full rounded-xl border border-line bg-bg px-4 py-2.5 outline-none focus:border-acc";
  const info = [
    [Mail, profile.email, `mailto:${profile.email}`],
    [Send, "Telegram", profile.links.telegram],
    [Linkedin, "LinkedIn", profile.links.linkedin],
    [Github, "GitHub", profile.links.github],
    [Facebook, "Facebook", profile.links.facebook],
  ] as const;
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-4">
      <SectionHeading title="Have an idea or project in mind? Let's build something meaningful together." />
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <ul className="space-y-3">
            {info.map(([I, l, h]) => (
              <li key={l}>
                <a
                  href={h}
                  className="flex items-center gap-3 rounded-xl border border-line bg-card p-4 hover:border-acc"
                >
                  <I size={18} className="text-acc" />
                  {l}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 rounded-xl border border-line bg-card p-4">
              <MapPin size={18} className="text-acc" />
              {profile.location}
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <form
            onSubmit={submit}
            noValidate
            className="space-y-4 rounded-2xl border border-line bg-card p-6"
          >
            {(["name", "email"] as const).map((k) => (
              <div key={k}>
                <label htmlFor={k} className="text-sm font-medium capitalize">
                  {k}
                </label>
                <input
                  id={k}
                  name={k}
                  type={k === "email" ? "email" : "text"}
                  className={input}
                  aria-invalid={!!errs[k]}
                />
                {errs[k] && <p className="mt-1 text-sm text-red-500">{errs[k]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={input}
                aria-invalid={!!errs.message}
              />
              {errs.message && <p className="mt-1 text-sm text-red-500">{errs.message}</p>}
            </div>
            <button className="rounded-full bg-acc px-6 py-2.5 text-sm font-medium text-white dark:text-[#080B14]">
              Send message
            </button>
            <p role="status" className="text-sm text-mute">
              {done
                ? "Demo only: your message was validated but not sent, because this site has no backend. Email me directly using the links."
                : "Demo form: validates input but does not send messages."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

import { nav, profile } from "@/data/profile";
import { ArrowUp, Github, Linkedin, Mail, Send } from "lucide-react";
import { FaBluesky, FaFacebook, FaTiktok, FaXTwitter } from "react-icons/fa6";
import WaveBackground from "../ui/WaveBackground";
export default function Footer() {
  const social = [
    [Github, profile.links.github, "GitHub"],
    [Linkedin, profile.links.linkedin, "LinkedIn"],
    [Send, profile.links.telegram, "Telegram"],
    [FaFacebook, profile.links.facebook, "Facebook"],
    [FaTiktok, profile.links.tiktok, "TikTok"],
    [FaXTwitter, profile.links.twitter, "Twitter"],
    [FaBluesky, profile.links.bluesky, "BlueSky"],
    [Mail, `mailto:${profile.email}`, "Email"],
  ] as const;
  return (
    <footer className="relative border-t border-line bg-gradient-to-b from-transparent to-black/[0.02] dark:to-white/[0.02]">
      <WaveBackground />

      <div className="mx-auto max-w-6xl px-5 pt-6">
        {/* Changed to a flexible layout that stacks gracefully */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* LEFT: Brand Column */}
          <div className="max-w-sm shrink-0">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight transition-colors hover:text-acc"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-acc text-sm text-white dark:text-[#080B14]">
                TC
              </span>
              Teng Chantola
            </a>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              Data Management, web developer and aspiring data scientist based in Phnom Penh.
              Building clean, data-driven experiences.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/50 px-3 py-1 text-xs text-mute dark:bg-white/5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for opportunities
            </div>
          </div>

          {/* MIDDLE: Navigation */}
          <div className="shrink-0 md:mt-1">
            <h3 className="text-md font-bold uppercase tracking-widest text-mute/70">Navigation</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="group inline-flex items-center gap-1.5 text-mute transition-colors hover:text-acc"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Social Links (DYNAMIC FIX) */}
          <div className="w-full md:w-auto">
            <h3 className="text-md font-bold uppercase tracking-widest text-mute/70">Connect</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {social.map(([I, h, l]) => (
                <a
                  key={l}
                  href={h}
                  aria-label={l}
                  title={l}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid h-10 bg-white w-10 place-items-center rounded-full border border-line text-mute transition-all hover:-translate-y-0.5 hover:border-acc hover:text-acc hover:shadow-md hover:shadow-acc/10"
                >
                  <I size={16} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Bottom Bar (unchanged) */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pb-8 text-sm text-mute">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full bg-acc text-white dark:text-[#080B14]"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!profile.roles.length) return;

    const t = setInterval(() => {
      setI((n) => (n + 1) % profile.roles.length);
    }, 2600);

    return () => clearInterval(t);
  }, []);

  const { scrollY } = useScroll();
  const py = useTransform(scrollY, [0, 600], [0, 80]);

  const social = [
    [Github, profile.links.github, "GitHub"],
    [Linkedin, profile.links.linkedin, "LinkedIn"],
    [Send, profile.links.telegram, "Telegram"],
    [Mail, `mailto:${profile.email}`, "Email"],
    [FaFacebook, profile.links.facebook, "Facebook"],
    [FaTiktok, profile.links.tiktok, "TikTok"],
  ] as const;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-5 pb-16 pt-24"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/BackgroundImage.jpg')",
        }}
      />
      <div
        className="absolute inset-0 z-0 hidden bg-cover bg-center bg-no-repeat dark:block"
        style={{
          backgroundImage: "url('/images/BackgroundImageDarkMode.jpg')",
        }}
      />
      <motion.div
        aria-hidden
        style={{ y: py }}
        className="pointer-events-none absolute inset-0 z-[3] overflow-hidden"
      >
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
        />

        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_1.1fr]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Availability */}
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500 bg-white dark:bg-black dark:text-white px-3 py-1 text-sm text-black backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {profile.availability}
          </span>

          <p className="mt-8 text-lg text-black dark:text-white">Hello, I'm</p>

          <h1 className="mt-1 text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl dark:text-white">
            {profile.name}
          </h1>

          {/* Animated Roles */}
          <div className="mt-4 h-9 overflow-hidden text-xl font-bold text-green-600 sm:text-2xl">
            <AnimatePresence mode="wait">
              <motion.p
                key={i}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {profile.roles[i] || "Developer"}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Introduction */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-black dark:text-white">
            &ldquo;{profile.quote}&rdquo;
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View My Work</Button>

            <Button href={profile.cv} variant="ghost" download>
              Download My CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-3">
            {social.map(([Icon, href, label]) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="group grid h-10 bg-white w-10 place-items-center rounded-full border border-line text-mute transition-all hover:-translate-y-0.5 hover:border-acc hover:text-acc hover:shadow-md hover:shadow-acc/10"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto w-64 sm:w-80"
        >
          <div className="rotate-[10deg] hover:rotate-0 transition-transform duration-500 ease-in-out">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl shadow-blue-950/50 backdrop-blur-md"
            >
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full rounded-3xl object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-slate-300 transition hover:text-cyan-400"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="block"
        >
          <ChevronDown size={28} />
        </motion.span>
      </a>
    </section>
  );
}

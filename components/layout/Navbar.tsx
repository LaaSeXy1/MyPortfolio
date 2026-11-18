"use client";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { nav, profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [solid, setSolid] = useState(false),
    [open, setOpen] = useState(false),
    [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const f = () => setSolid(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div
        className={cn(
          "relative mx-auto max-w-6xl overflow-hidden border transition-all duration-300",
          open ? "rounded-2xl" : "rounded-full",
          solid || open
            ? "border-line bg-white/95 shadow-lg backdrop-blur-md dark:bg-black/95"
            : "border-transparent bg-white/80 shadow-sm backdrop-blur-md dark:bg-black/80",
        )}
      >
        <motion.div
          style={{ scaleX: bar }}
          className="absolute inset-x-0 top-0 h-0.5 origin-left bg-acc"
        />

        <nav aria-label="Main" className="flex h-16 items-center justify-between px-5">
          <a href="#home" className="text-xl font-bold tracking-tight">
            Teng Chantola
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={cn(
                    "relative block rounded-full px-3 py-1.5 text-sm transition-colors",
                    active === n.id
                      ? "text-green-700 dark:text-white font-bold"
                      : "text-mute hover:text-fg",
                  )}
                >
                  {active === n.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-acc/10"
                    />
                  )}
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.cv}
              download
              className="hidden items-center gap-2 rounded-full bg-acc px-4 py-2 text-sm font-medium text-white dark:text-[#080B14] sm:inline-flex"
            >
              <Download size={14} />
              Download CV
            </a>
            <ThemeToggle />
            <button
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-card lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              // Added max-height and overflow-y-auto so it never gets cut off on small screens
              className="max-h-[calc(100vh-6rem)] overflow-y-auto px-5 pb-4 lg:hidden"
            >
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-lg transition-colors",
                      active === n.id
                        ? "bg-acc/10 font-semibold text-acc"
                        : "text-fg hover:bg-acc/5",
                    )}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={profile.cv}
                  download
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-acc px-4 py-2.5 text-sm font-medium text-white dark:text-[#080B14]"
                >
                  <Download size={14} />
                  Download CV
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

"use client";
import { motion } from "framer-motion";
import { Database, Layout, Server, Sparkles, Wrench } from "lucide-react";
const icons = { Layout, Server, Database, Wrench, Sparkles } as const;
export default function SkillCard({
  group,
  icon,
  items,
}: {
  group: string;
  icon: keyof typeof icons;
  items: readonly string[];
}) {
  const Icon = icons[icon];
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="h-full rounded-2xl border-line bg-card p-6 transition-colors"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-acc/10 text-acc">
          <Icon size={20} />
        </span>
        <h3 className="font-semibold">{group}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {items.map((i) => (
          <li key={i} className="rounded-lg bg-bg px-3 py-1.5 text-sm">
            {i}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

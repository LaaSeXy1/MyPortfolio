import type { Config } from "tailwindcss";
const v = (n: string) => `var(--${n})`;
export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { bg: v("bg"), card: v("card"), fg: v("fg"), mute: v("mute"), acc: v("acc"), acc2: v("acc2"), line: v("line") },
    fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;

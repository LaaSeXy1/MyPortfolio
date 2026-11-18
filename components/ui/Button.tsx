import { cn } from "@/lib/utils";
export default function Button({
  href,
  variant = "primary",
  children,
  ...p
}: {
  href: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      {...p}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 active:translate-y-0",
        variant === "primary"
          ? "bg-acc text-white hover:opacity-90 dark:text-[#080B14]"
          : "border border-line bg-card hover:border-acc",
      )}
    >
      {children}
    </a>
  );
}

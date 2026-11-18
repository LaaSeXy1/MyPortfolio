import Reveal from "./Reveal";
export default function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-mute">{sub}</p>}
    </Reveal>
  );
}

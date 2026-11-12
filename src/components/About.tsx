import { about, stats } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section">
      <p className="eyebrow">About</p>
      <h2 className="h2">Automation that businesses can actually trust</h2>
      <div className="mt-8 grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4 leading-relaxed text-zinc-400">
          {about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card p-5">
              <p className="text-3xl font-bold text-zinc-50">{s.value}</p>
              <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

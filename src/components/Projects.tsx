import { projects } from "@/data/profile";
import { ArrowIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">Projects</p>
      <h2 className="h2">Selected work</h2>
      <p className="mt-3 max-w-2xl text-zinc-400">
        AI automation, full-stack products, computer vision, IoT hardware and games. Most of them link to their code.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className={`card flex flex-col p-6 ${p.featured ? "md:col-span-2 lg:col-span-1" : ""}`}>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-md bg-sky-500/10 px-2 py-0.5 font-medium text-sky-300">{p.category}</span>
              <span className="text-zinc-500">{p.period}</span>
              {p.status && <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-amber-300">{p.status}</span>}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-zinc-50">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
            </div>
            {p.links.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
                    {l.label} <ArrowIcon />
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

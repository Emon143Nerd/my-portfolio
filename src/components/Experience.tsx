import { experience, education, awards } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="eyebrow">Experience</p>
      <h2 className="h2">Experience & education</h2>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <ol className="relative space-y-8 border-l border-zinc-800 pl-6">
          {experience.map((e) => (
            <li key={e.role}>
              <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="text-xs text-zinc-500">{e.period}</p>
              <h3 className="font-semibold text-zinc-100">{e.role}</h3>
              <p className="text-sm text-zinc-400">{e.org}</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-zinc-400">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </li>
          ))}
        </ol>
        <div className="space-y-6">
          {education.map((ed) => (
            <div key={ed.degree} className="card p-5">
              <p className="text-xs text-zinc-500">{ed.period}</p>
              <h3 className="font-semibold text-zinc-100">{ed.degree}</h3>
              <p className="text-sm text-zinc-400">{ed.school}</p>
              <p className="mt-1 text-sm text-emerald-300">{ed.note}</p>
            </div>
          ))}
          <div className="card p-5">
            <h3 className="font-semibold text-zinc-100">Awards</h3>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-zinc-400">
              {awards.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

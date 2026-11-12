import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="eyebrow">Skills</p>
      <h2 className="h2">Tools I use to ship</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div key={g.title} className="card p-5">
            <h3 className="font-semibold text-zinc-100">{g.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => <span key={i} className="chip">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

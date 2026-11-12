import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-semibold tracking-tight text-zinc-100">
          Emon<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-zinc-100">{l.label}</a>
          ))}
        </div>
        <a href={profile.resumes[0].href} target="_blank" rel="noopener" className="btn btn-ghost !py-1.5 text-xs">
          Resume
        </a>
      </nav>
    </header>
  );
}

import Image from "next/image";
import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="glow">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-[1.4fr_1fr] md:pt-40">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to full-time & remote roles
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">{profile.name}</h1>
          <p className="mt-3 text-xl font-medium text-accent">{profile.role}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-zinc-400">{profile.tagline}</p>
          <p className="mt-3 text-sm text-zinc-500">{profile.location}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View projects</a>
            {profile.resumes.map((r) => (
              <a key={r.href} href={r.href} target="_blank" rel="noopener" className="btn btn-ghost">
                <DownloadIcon /> {r.label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex gap-4 text-zinc-400">
            <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-accent"><GitHubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-accent"><LinkedInIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent"><MailIcon /></a>
          </div>
        </div>

        <div className="relative mx-auto w-56 sm:w-72">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-sky-500/30 to-emerald-400/20 blur-2xl" />
          <Image
            src="/emon.jpeg"
            alt="Portrait of Emon Bepari"
            width={576}
            height={576}
            priority
            className="relative aspect-square rounded-full border border-zinc-700 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons";

export default function Contact() {
  const items = [
    { label: profile.email, href: `mailto:${profile.email}`, icon: <MailIcon /> },
    { label: `${profile.phone} (WhatsApp)`, href: profile.whatsapp, icon: <PhoneIcon /> },
    { label: "linkedin.com/in/emon-bepari", href: profile.linkedin, icon: <LinkedInIcon /> },
    { label: "github.com/Emon143Nerd", href: profile.github, icon: <GitHubIcon /> },
  ];
  return (
    <section id="contact" className="section">
      <div className="card glow p-8 text-center md:p-12">
        <p className="eyebrow">Contact</p>
        <h2 className="h2">Let&apos;s work together</h2>
        <p className="mx-auto mt-3 max-w-xl text-zinc-400">
          I&apos;m open to AI automation and software engineering roles, remote or in Dhaka. The fastest way to reach me is email or WhatsApp.
        </p>
        <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
          {items.map((i) => (
            <a key={i.href} href={i.href} target="_blank" rel="noopener" className="btn btn-ghost justify-center">
              {i.icon} <span className="truncate">{i.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

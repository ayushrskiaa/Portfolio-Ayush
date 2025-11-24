import { contactLinks } from "@/data/profile";

export function ContactSection() {
  return (
    <section className="rounded-[32px] border border-white/5 bg-gradient-to-br from-[#0f172a] via-[#020617] to-black p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-[#34d399]">
            LET&apos;S TALK
          </p>
          <h2 className="text-4xl font-semibold text-white">
            Have an idea worth shipping?
          </h2>
          <p className="text-base text-zinc-400">
            I partner with ambitious teams to build modern product experiences,
            land polished marketing websites, or mentor interns ramping up on
            web stacks.
          </p>
        </div>
        <div className="w-full max-w-sm rounded-2xl border border-white/5 bg-white/5 p-6">
          <ul className="space-y-4 text-sm">
            {contactLinks.map((link) => (
              <li key={link.label} className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                  {link.label}
                </span>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-lg font-semibold text-white hover:text-[#34d399]"
                >
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


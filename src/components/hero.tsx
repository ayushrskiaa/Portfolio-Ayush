import Image from "next/image";
import { heroContent, stats } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-[#121528] via-[#161629] to-[#05060c] p-10 shadow-[0_25px_120px_rgba(0,0,0,0.65)]"
    >
      {/* Animated mesh blobs and ripples */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[38rem] w-[36rem] opacity-50 animate-blob-move rounded-full bg-gradient-to-br from-[#f97316] via-transparent to-[#c026d3] blur-[120px]" style={{zIndex:1}} />
      <div className="pointer-events-none absolute -bottom-20 -right-32 h-[30rem] w-[36rem] opacity-35 animate-blob-move2 rounded-full bg-gradient-to-br from-[#2563eb] via-transparent to-[#7c3aed] blur-[90px]" style={{zIndex:1}} />
      <div className="pointer-events-none absolute left-1/2 top-[40%] h-80 w-80 -translate-x-1/2 opacity-30 animate-pulse-slow rounded-full bg-[#f97316] mix-blend-lighten blur-[100px]" style={{zIndex:2}} />
      <div className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#a5b4fc]">
              {heroContent.availability}
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-zinc-400">
                {heroContent.location}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {heroContent.name}
              </h1>
              <p className="mt-3 text-xl text-zinc-200">{heroContent.headline}</p>
              <p className="mt-5 text-base text-zinc-400">{heroContent.subline}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-white">
              {[
                {
                  ...heroContent.ctaPrimary,
                  className:
                    "inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-black transition hover:opacity-80",
                },
                {
                  ...heroContent.ctaSecondary,
                  className:
                    "inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white hover:border-white/60",
                },
                heroContent.ctaThird && {
                  ...heroContent.ctaThird,
                  className:
                    "inline-flex items-center justify-center rounded-full border border-[#f97316] px-6 py-3 text-[#f97316] hover:bg-[#f97316]/10",
                },
              ]
                .filter(Boolean)
                .map((cta) => (
                  <a
                    key={cta!.label}
                    href={cta!.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cta!.className}
                  >
                    {cta!.label}
                  </a>
                ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center"
                >
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-6 rounded-[28px] bg-gradient-to-br from-[#f97316] to-[#c026d3] blur-3xl opacity-50" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-48 w-48 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={heroContent.avatar}
                    alt={heroContent.name}
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-6 text-sm uppercase tracking-[0.4em] text-zinc-400">
                  Aspiring software engineer
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  Turning research into real products
                </p>
                <p className="mt-3 text-sm text-zinc-400">
                  I love translating complex problem statements into reliable,
                  human-friendly tools across labs, startups, and open-source
                  teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import type { Education } from "@/data/profile";

type EducationCardProps = {
  entry: Education;
};

export function EducationCard({ entry }: EducationCardProps) {
  return (
    <article className="group rounded-3xl border border-white/5 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur transition-all duration-500 hover:border-white/15 hover:bg-white/10 hover:scale-[1.02] hover:shadow-[0_35px_100px_rgba(0,0,0,0.5),0_0_30px_rgba(148,163,184,0.15)]">
      <p className="text-sm uppercase tracking-[0.3em] text-[#94a3b8] transition-colors duration-300 group-hover:text-[#cbd5e1]">
        {entry.period}
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300">
        {entry.program}
      </h3>
      <p className="text-lg text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200">{entry.school}</p>
      <div className="mt-2 text-sm text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">{entry.location}</div>
      <p className="mt-4 text-sm text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200">{entry.details}</p>
    </article>
  );
}


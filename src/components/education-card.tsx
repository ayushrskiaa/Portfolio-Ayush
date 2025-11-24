import type { Education } from "@/data/profile";

type EducationCardProps = {
  entry: Education;
};

export function EducationCard({ entry }: EducationCardProps) {
  return (
    <article className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur">
      <p className="text-sm uppercase tracking-[0.3em] text-[#94a3b8]">
        {entry.period}
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{entry.program}</h3>
      <p className="text-lg text-zinc-300">{entry.school}</p>
      <div className="mt-2 text-sm text-zinc-500">{entry.location}</div>
      <p className="mt-4 text-sm text-zinc-300">{entry.details}</p>
    </article>
  );
}


import type { Insight } from "@/data/profile";

type InsightCardProps = {
  insight: Insight;
};

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 p-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-[#34d399]">
          INSIGHT
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">{insight.title}</h3>
        <p className="mt-2 text-sm text-zinc-400">{insight.summary}</p>
      </div>
      <a
        href={insight.link}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#34d399]"
      >
        Continue reading
        <span aria-hidden>↗</span>
      </a>
    </article>
  );
}


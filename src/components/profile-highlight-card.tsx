import Image from "next/image";
import type { ProfileHighlight } from "@/data/profile";

type ProfileHighlightCardProps = {
  highlight: ProfileHighlight;
};

const iconMap: Record<string, JSX.Element> = {
  LeetCode: (
    <Image
      src="/leetcode.png"
      alt="LeetCode logo"
      width={32}
      height={32}
      className="h-8 w-8 object-contain"
    />
  ),
  GeeksforGeeks: (
    <Image
      src="/gfg.png"
      alt="GeeksforGeeks logo"
      width={32}
      height={32}
      className="h-8 w-8 object-contain"
    />
  ),
  CodeChef: (
    <Image
      src="/codechef.png"
      alt="CodeChef logo"
      width={32}
      height={32}
      className="h-8 w-8 object-contain"
    />
  ),
};

export function ProfileHighlightCard({ highlight }: ProfileHighlightCardProps) {
  const icon = iconMap[highlight.platform];

  return (
    <a
      href={highlight.link}
      target="_blank"
      rel="noreferrer"
      className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 to-white/0 p-6 transition hover:border-white/20"
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            {icon}
          </div>
        )}
        <p className="text-xs uppercase tracking-[0.4em] text-[#38bdf8]">
          {highlight.platform}
        </p>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">
        {highlight.metric}
      </h3>
      <p className="mt-2 text-sm text-zinc-300">{highlight.summary}</p>
      <div className="mt-4 text-sm font-semibold text-white">
        View profile <span aria-hidden>↗</span>
      </div>
    </a>
  );
}


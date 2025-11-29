import type { SkillCategory } from "@/data/profile";

type SkillCategoryCardProps = {
  category: SkillCategory;
};

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <div className="group flex min-h-[150px] flex-col rounded-2xl border border-white/5 bg-white/5 p-5 transition-all duration-500 hover:border-white/15 hover:bg-white/10 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_20px_rgba(249,115,22,0.1)]">
      <p className="text-xs uppercase tracking-[0.4em] text-[#f97316] transition-colors duration-300 group-hover:text-[#fb923c]">
        {category.title}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2 text-sm text-white/80">
        {category.items.map((item, idx) => (
          <li
            key={item}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/5 group-hover:scale-105 group-hover:text-zinc-200"
            style={{ transitionDelay: `${idx * 30}ms` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}


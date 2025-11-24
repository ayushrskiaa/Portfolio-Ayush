import type { SkillCategory } from "@/data/profile";

type SkillCategoryCardProps = {
  category: SkillCategory;
};

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <div className="flex min-h-[150px] flex-col rounded-2xl border border-white/5 bg-white/5 p-5">
      <p className="text-xs uppercase tracking-[0.4em] text-[#f97316]">
        {category.title}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2 text-sm text-white/80">
        {category.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}


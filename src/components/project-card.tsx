import Image from "next/image";
import type { Project } from "@/data/profile";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/5">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#f97316]">
            FEATURED PROJECT
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-zinc-300">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-4 text-sm font-semibold text-white">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#f97316]"
            >
              Live demo
              <span aria-hidden>↗</span>
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#f97316]"
          >
            View repo
            <span aria-hidden>↗</span>
          </a>
        </div>
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-white/80">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-3 py-1 hover:border-white/40 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}


"use client";
import { Hero } from "@/components/hero";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ContactSection } from "@/components/contact-section";
import { EducationCard } from "@/components/education-card";
import { SkillCategoryCard } from "@/components/skill-category-card";
import { ProfileHighlightCard } from "@/components/profile-highlight-card";
import {
  education,
  experiences,
  heroContent,
  profileHighlights,
  projects,
  skillCategories,
} from "@/data/profile";
import { useState, useEffect } from "react";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  useEffect(() => {
    let lastScroll = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const curr = window.scrollY;
          if (curr < 24 || curr < lastScroll) {
            setShowHeader(true);
          } else if (curr > lastScroll + 12) {
            setShowHeader(false);
          }
          lastScroll = curr;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#010104] pb-16 text-white">
      <div className="bg-mesh" />
      <div className="bg-noise" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-10 sm:px-8">
        <header
          className={`sticky top-6 z-40 transition-all duration-500 ${
            showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="rounded-[999px] border border-white/10 bg-white/5/50 px-6 py-5 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-lg">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                  Portfolio
                </p>
                <p className="text-2xl font-semibold tracking-[0.25em] text-white">
                  Ayush Kumar
                </p>
              </div>
              <nav className="flex flex-wrap items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-zinc-400 sm:text-xs">
                {[
                  { label: "Overview", href: "#overview" },
                  { label: "Experience", href: "#experience" },
                  { label: "Work", href: "#projects" },
                  { label: "Academics", href: "#education" },
                  { label: "Profiles", href: "#profiles" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-full border border-transparent px-3 py-1 transition hover:border-white/20 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </header>
        <div className="animate-fadein">
          <Hero />
        </div>
        <section id="experience" className="space-y-10">
          <div className="animate-fadein" style={{ animationDelay: '0.18s', animationFillMode: 'both' }}>
            <SectionHeading kicker="TRACK RECORD" title="Engineering experiences that shaped my craft" />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.company} experience={experience} />
            ))}
          </div>
        </section>
        <section id="projects" className="space-y-10">
          <div className="animate-fadein" style={{ animationDelay: '0.34s', animationFillMode: 'both' }}>
            <SectionHeading kicker="SELECTED WORK" title="Projects I have worked on" />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="flex justify-center">
            <a href="https://github.com/ayushrskiaa?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40">
              Explore more on GitHub
              <span aria-hidden>↗</span>
            </a>
          </div>
        </section>

        <section id="education" className="space-y-10">
          <div className="animate-fadein" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <SectionHeading
              kicker="ACADEMICS & TOOLING"
              title="ECE rigor meets product engineering"
              description="Formal training from IIIT Manipur backed by a versatile skill stack and consistent coding practice."
            />
          </div>
          <div className="space-y-6">
            {education.map((entry) => (
              <EducationCard key={entry.school} entry={entry} />
            ))}
            <div className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                Skills snapshot
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {skillCategories.map((category) => (
                  <SkillCategoryCard key={category.title} category={category} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="profiles" className="space-y-10">
          <div className="animate-fadein" style={{ animationDelay: '0.66s', animationFillMode: 'both' }}>
            <SectionHeading
              kicker="CODING PROFILES"
              title="Practice that powers production work"
              description="Daily reps across LeetCode, GFG, and CodeChef keep data structures sharp for real-world shipping."
            />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {profileHighlights.map((highlight) => (
              <ProfileHighlightCard
                key={highlight.platform}
                highlight={highlight}
              />
            ))}
          </div>
        </section>

        <section id="contact">
          <ContactSection />
        </section>

      </div>
    </div>
  );
}

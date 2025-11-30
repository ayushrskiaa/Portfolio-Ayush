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
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement) return;

    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHeaderVisible(entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "-100px 0px 0px 0px" }
    );

    headerObserver.observe(headerElement);

    return () => {
      if (headerElement) {
        headerObserver.unobserve(headerElement);
      }
      headerObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#010104] pb-16 text-white">
      <div className="bg-mesh" />
      <div className="bg-noise" />
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 pt-10 sm:px-6 lg:px-8">
        <header 
          ref={headerRef}
          className={`relative z-40 transition-all duration-700 ease-in-out ${
            headerVisible 
              ? "opacity-100 translate-y-0 blur-0 scale-100" 
              : "opacity-0 -translate-y-8 blur-md scale-95 pointer-events-none"
          }`}
        >
          <div className="relative mx-auto max-w-6xl rounded-[999px] border border-white/10 bg-gradient-to-r from-white/[0.08] via-white/[0.06] to-white/[0.08] px-8 py-6 shadow-[0_25px_70px_rgba(0,0,0,0.4),0_0_60px_rgba(249,115,22,0.1)] backdrop-blur-xl">
            {/* Animated gradient border glow */}
            <div className="absolute -inset-[1px] rounded-[999px] bg-gradient-to-r from-[#f97316]/20 via-[#c026d3]/20 to-[#2563eb]/20 opacity-60 blur-sm -z-10 animate-gradient-border" />
            
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#f97316] to-[#c026d3] opacity-30 blur-md animate-pulse-slow" />
                  <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-[#f97316]/40 to-[#c026d3]/40 border border-white/20" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 font-medium">
                    Portfolio
                  </p>
                  <p className="text-2xl font-bold tracking-[0.15em] text-white bg-gradient-to-r from-white via-zinc-100 to-white bg-clip-text text-transparent">
                    Ayush Kumar
                  </p>
                </div>
              </div>
              <nav className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-zinc-400 sm:text-xs">
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
                    className="group relative rounded-full border border-transparent px-4 py-2 transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/5"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f97316]/10 to-[#c026d3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <div className={`transition-all duration-1000 ${visibleSections.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionHeading kicker="TRACK RECORD" title="Engineering experiences that shaped my craft" />
          </div>
          <div className="grid auto-rows-fr gap-6 lg:grid-cols-2">
            {experiences.map((experience, idx) => (
              <div
                key={experience.company}
                className={`flex h-full transition-all duration-700 ease-out ${
                  visibleSections.has('experience')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </section>
        <section id="projects" className="space-y-10">
          <div className={`transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionHeading kicker="SELECTED WORK" title="Projects I have worked on" />
          </div>
          <div className="grid auto-rows-fr gap-6 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className={`flex h-full transition-all duration-700 ease-out ${
                  visibleSections.has('projects')
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className={`flex justify-center transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
            <a href="https://github.com/ayushrskiaa?tab=repositories" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              Explore more on GitHub
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>
        </section>

        <section id="education" className="space-y-10">
          <div className={`transition-all duration-1000 ${visibleSections.has('education') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionHeading
              kicker="ACADEMICS & TOOLING"
              title="ECE rigor meets product engineering"
              description="Formal training from IIIT Manipur backed by a versatile skill stack and consistent coding practice."
            />
          </div>
          <div className="space-y-6">
            {education.map((entry, idx) => (
              <div
                key={entry.school}
                className={`transition-all duration-700 ease-out ${
                  visibleSections.has('education')
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <EducationCard entry={entry} />
              </div>
            ))}
            <div className={`space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6 transition-all duration-1000 ${
              visibleSections.has('education')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: '300ms' }}>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                Skills snapshot
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {skillCategories.map((category, idx) => (
                  <div
                    key={category.title}
                    className={`transition-all duration-500 ease-out ${
                      visibleSections.has('education')
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${400 + idx * 80}ms` }}
                  >
                    <SkillCategoryCard category={category} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="profiles" className="space-y-10">
          <div className={`transition-all duration-1000 ${visibleSections.has('profiles') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionHeading
              kicker="CODING PROFILES"
              title="Practice that powers production work"
              description="Daily reps across LeetCode, GFG, and CodeChef keep data structures sharp for real-world shipping."
            />
          </div>
          <div className="grid gap-6 md:grid-cols-3 auto-rows-fr">
            {profileHighlights.map((highlight, idx) => (
              <div
                key={highlight.platform}
                className={`h-full transition-all duration-700 ease-out ${
                  visibleSections.has('profiles')
                    ? 'opacity-100 translate-y-0 rotate-0'
                    : 'opacity-0 translate-y-12 rotate-2'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <ProfileHighlightCard highlight={highlight} />
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={`transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ContactSection />
        </section>

      </div>
    </div>
  );
}

"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { ProjectCard } from "@/components/ui/project-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { projects } from "@/content/site";
import { cn } from "@/lib/utils";

export function Projects() {
  const { t } = useLanguage();
  const hasLoneLastCard = projects.length % 2 === 1;

  return (
    <Section id="projects">
      <SectionHeader eyebrow={t.projects.eyebrow} title={t.projects.title} />
      <div className="mt-12 grid gap-4 min-[681px]:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            number={String(i + 1).padStart(2, "0")}
            title={t.projects.items[project.id].title}
            description={t.projects.items[project.id].description}
            tags={project.tags}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            sourceLabel={t.projects.sourceLabel}
            liveLabel={t.projects.liveLabel}
            className={cn(
              hasLoneLastCard &&
                i === projects.length - 1 &&
                "min-[681px]:col-span-2 min-[681px]:mx-auto min-[681px]:w-[calc(50%-8px)]",
            )}
          />
        ))}
      </div>
    </Section>
  );
}

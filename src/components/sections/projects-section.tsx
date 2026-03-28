"use client";

import { ProjectCard } from "@/components/sections/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { projectsContent } from "@/data/projects";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      className="border-y border-card-border bg-surface/70 dark:bg-surface/50"
      ariaLabelledby="projects-heading"
    >
      <Container>
        <SectionHeader
          id="projects-heading"
          label={projectsContent.sectionLabel}
          title={projectsContent.sectionTitle}
        />
        <ul className="mt-14 grid list-none gap-8 p-0 md:mt-16 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
          {projectsContent.items.map((project) => (
            <li key={project.title} className="min-w-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </SectionShell>
  );
}

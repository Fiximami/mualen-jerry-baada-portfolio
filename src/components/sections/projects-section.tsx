"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
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
        <ul className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-3 lg:gap-8">
          {projectsContent.items.map((project) => (
            <li key={project.title}>
              <article className="flex h-full flex-col rounded-2xl border border-card-border bg-card p-7 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-[border-color] duration-200 dark:shadow-none md:p-8">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <span className="rounded-md border border-transparent bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted dark:bg-background/60">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={project.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-muted"
                >
                  {project.linkLabel}
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </SectionShell>
  );
}

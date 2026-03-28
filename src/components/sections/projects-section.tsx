"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { IconGithub } from "@/components/ui/brand-icons";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { projectsContent } from "@/data/projects";

function statusBadgeClass(status: string): string {
  const s = status.toLowerCase();
  if (s === "live") {
    return "border-accent/35 bg-accent/[0.07] text-accent";
  }
  if (s.includes("waitlist")) {
    return "border-accent-faint/40 bg-accent-faint/10 text-label dark:text-accent/90";
  }
  if (s.includes("development") && s.includes("currently")) {
    return "border-card-border bg-surface text-muted";
  }
  if (s.includes("prototype")) {
    return "border-card-border bg-surface text-muted";
  }
  return "border-card-border bg-background/60 text-muted-faint dark:bg-background/30";
}

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
        <ul className="mt-14 grid gap-8 md:mt-16 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
          {projectsContent.items.map((project) => (
            <li key={project.title}>
              <article className="flex h-full flex-col rounded-2xl border border-card-border bg-card p-7 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-[border-color] duration-200 dark:shadow-none md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 gap-y-2">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {project.role}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase leading-none tracking-wider ${statusBadgeClass(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <li key={tech}>
                      <span className="inline-flex rounded-md border border-card-border bg-surface/80 px-2.5 py-1 font-mono text-[11px] text-foreground/90 dark:bg-background/50">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-card-border pt-6">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-faint">
                    What I handled
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm leading-snug text-foreground/95">
                    {project.whatIHandled.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/80"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {(project.liveLink || project.githubLink) && (
                  <div className="mt-8 flex flex-wrap gap-3 border-t border-card-border pt-6">
                    {project.liveLink ? (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-background/80 px-4 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/30 hover:text-accent dark:bg-background/40"
                      >
                        Live site
                        <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
                      </Link>
                    ) : null}
                    {project.githubLink ? (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-background/80 px-4 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/30 hover:text-accent dark:bg-background/40"
                      >
                        <IconGithub className="h-3.5 w-3.5 opacity-80" />
                        Source
                      </Link>
                    ) : null}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </SectionShell>
  );
}

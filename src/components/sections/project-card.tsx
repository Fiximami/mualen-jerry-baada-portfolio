"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IconGithub } from "@/components/ui/brand-icons";
import type { Project } from "@/types/project";

const cardMotion = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
};

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

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const primaryImage = project.image;

  return (
    <motion.article
      {...cardMotion}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-card shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-px hover:border-card-border hover:shadow-[0_12px_32px_-18px_rgba(15,23,42,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-[0_1px_0_0_rgba(15,23,42,0.04)] dark:shadow-none dark:hover:shadow-[0_12px_36px_-16px_rgba(0,0,0,0.4)] dark:motion-reduce:hover:shadow-none"
    >
      {primaryImage ? (
        <div className="border-b border-card-border bg-surface/50 dark:bg-surface/30">
          {project.secondaryImage ? (
            <div className="grid grid-cols-2 gap-px bg-card-border">
              <div className="relative aspect-[4/3] min-h-[120px] bg-card sm:min-h-[140px]">
                <Image
                  src={primaryImage}
                  alt={project.imageAlt ?? project.title}
                  fill
                  className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.01] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] min-h-[120px] bg-card sm:min-h-[140px]">
                <Image
                  src={project.secondaryImage}
                  alt={
                    project.secondaryImageAlt ??
                    `${project.title} additional preview`
                  }
                  fill
                  className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.01] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          ) : (
            <div className="relative aspect-[16/10] max-h-[200px] w-full sm:max-h-[220px]">
              <Image
                src={primaryImage}
                alt={project.imageAlt ?? project.title}
                fill
                className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.008] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1 pr-2">
            <h3 className="text-pretty text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {project.title}
            </h3>
            <p className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted sm:text-[11px]">
              {project.role}
            </p>
          </div>
          <span
            className={`max-w-[10.5rem] text-right font-mono text-[9px] font-medium uppercase leading-snug tracking-wide sm:max-w-[11rem] sm:text-[10px] ${statusBadgeClass(project.status)} shrink-0 rounded-full border px-2.5 py-1`}
          >
            {project.status}
          </span>
        </div>

        <p className="mt-3.5 max-w-[52ch] text-[15px] leading-[1.62] text-muted sm:mt-4">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
          {project.techStack.map((tech) => (
            <li key={tech}>
              <span className="inline-flex rounded-md border border-card-border bg-background/70 px-2.5 py-1 font-mono text-[11px] leading-tight text-foreground/90 dark:bg-background/40">
                {tech}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex-1 border-t border-card-border pt-5 sm:mt-7 sm:pt-6">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-faint sm:text-[11px] sm:tracking-[0.2em]">
            What I handled
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/95 sm:space-y-2.5">
            {project.whatIHandled.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/75"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {(project.liveLink || project.githubLink) && (
          <div className="mt-6 flex flex-wrap gap-2.5 border-t border-card-border pt-5 sm:mt-7 sm:gap-3 sm:pt-6">
            {project.liveLink ? (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-card-border bg-background/80 px-3.5 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/35 hover:text-accent dark:bg-background/35 sm:px-4 sm:py-2.5"
              >
                Live site
                <ExternalLink className="h-3.5 w-3.5 opacity-75" aria-hidden />
              </Link>
            ) : null}
            {project.githubLink ? (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-card-border bg-background/80 px-3.5 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/35 hover:text-accent dark:bg-background/35 sm:px-4 sm:py-2.5"
              >
                <IconGithub className="h-3.5 w-3.5 opacity-75" />
                Source
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </motion.article>
  );
}

"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { experienceContent } from "@/data/experience";

export function ExperienceSection() {
  return (
    <SectionShell id="experience" ariaLabelledby="experience-heading">
      <Container>
        <SectionHeader
          id="experience-heading"
          label={experienceContent.sectionLabel}
          title={experienceContent.sectionTitle}
        />
        <ol className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-2 lg:gap-8">
          {experienceContent.roles.map((role) => (
            <li key={role.company}>
              <article className="h-full rounded-2xl border border-card-border bg-card p-7 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-[border-color] duration-200 dark:shadow-none md:p-9">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{role.company}</p>
                  </div>
                  <p className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted-faint">
                    {role.period}
                  </p>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
                  {role.summary}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-snug text-foreground/95">
                  {role.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/90"
                        aria-hidden
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </SectionShell>
  );
}

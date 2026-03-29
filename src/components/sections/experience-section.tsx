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
        <ol className="mt-10 grid list-none gap-5 p-0 sm:mt-12 md:mt-14 lg:grid-cols-2 lg:gap-6 lg:gap-y-7">
          {experienceContent.roles.map((role) => (
            <li key={role.company}>
              <article className="h-full rounded-2xl border border-card-border bg-card p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-[border-color] duration-200 dark:shadow-none sm:p-7 md:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg md:text-xl">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-muted">
                      {role.company}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-faint sm:text-[11px] sm:tracking-[0.16em]">
                    {role.period}
                  </p>
                </div>
                <p className="mt-5 text-sm leading-[1.62] text-muted sm:mt-6 md:text-base md:leading-[1.65]">
                  {role.summary}
                </p>
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-foreground/95 sm:mt-6 sm:space-y-3">
                  {role.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/80"
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

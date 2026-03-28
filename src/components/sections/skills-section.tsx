"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { skillsContent } from "@/data/skills";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      className="border-y border-card-border bg-surface/70 dark:bg-surface/50"
      ariaLabelledby="skills-heading"
    >
      <Container>
        <SectionHeader
          id="skills-heading"
          label={skillsContent.sectionLabel}
          title={skillsContent.sectionTitle}
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-8">
          {skillsContent.groups.map((group) => (
            <li
              key={group.title}
              className="rounded-2xl border border-card-border bg-card p-7 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-[border-color] duration-200 dark:shadow-none md:p-8"
            >
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-label">
                {group.title}
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex rounded-md border border-card-border bg-background/80 px-3 py-1.5 text-sm text-foreground dark:bg-background/50">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </SectionShell>
  );
}

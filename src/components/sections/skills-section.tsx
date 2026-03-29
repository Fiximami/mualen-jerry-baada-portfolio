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
        <ul className="mt-10 grid list-none gap-5 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:mt-14 lg:grid-cols-3 lg:gap-7">
          {skillsContent.groups.map((group) => (
            <li
              key={group.title}
              className="rounded-2xl border border-card-border bg-card p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-[border-color] duration-200 dark:shadow-none sm:p-7"
            >
              <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-label sm:text-[11px]">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex rounded-md border border-card-border bg-background/80 px-2.5 py-1 text-[13px] leading-snug text-foreground dark:bg-background/50">
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

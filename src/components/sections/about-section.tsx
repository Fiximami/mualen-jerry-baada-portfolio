"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { aboutContent } from "@/data/about";

export function AboutSection() {
  return (
    <SectionShell id="about" ariaLabelledby="about-heading">
      <Container>
        <SectionHeader
          id="about-heading"
          label={aboutContent.sectionLabel}
          title={aboutContent.sectionTitle}
        />
        <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:items-start md:gap-16 lg:gap-20">
          <p className="max-w-xl text-base leading-[1.7] text-muted md:text-lg">
            {aboutContent.body}
          </p>
          <div className="rounded-2xl border border-card-border bg-surface/40 p-7 font-mono text-sm text-muted-faint shadow-[0_1px_0_0_rgba(15,23,42,0.04)] dark:bg-card dark:shadow-none md:p-8">
            <dl className="space-y-5">
              {aboutContent.meta.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex justify-between gap-6 ${
                    i < aboutContent.meta.length - 1
                      ? "border-b border-card-border pb-5"
                      : ""
                  }`}
                >
                  <dt className="text-muted-faint">{row.label}</dt>
                  <dd className="text-right text-sm font-medium text-foreground">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}

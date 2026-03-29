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
        <div className="mt-10 grid gap-10 sm:mt-12 md:mt-14 md:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] md:items-start md:gap-12 lg:gap-16">
          <div className="max-w-[42rem] space-y-4 text-base leading-[1.65] text-muted sm:space-y-5 sm:text-[1.0625rem]">
            {aboutContent.body.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="rounded-2xl border border-card-border bg-surface/40 p-6 font-mono text-sm text-muted-faint shadow-[0_1px_0_0_rgba(15,23,42,0.04)] dark:bg-card dark:shadow-none sm:p-7 md:p-8">
            <dl className="space-y-4 sm:space-y-5">
              {aboutContent.meta.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex justify-between gap-4 ${
                    i < aboutContent.meta.length - 1
                      ? "border-b border-card-border pb-4 sm:pb-5"
                      : ""
                  }`}
                >
                  <dt className="text-muted-faint">{row.label}</dt>
                  <dd className="max-w-[55%] text-right text-sm font-medium leading-snug text-foreground">
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

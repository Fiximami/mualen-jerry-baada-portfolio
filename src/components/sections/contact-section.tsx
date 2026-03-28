"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { SocialIcon } from "@/components/ui/social-icon";
import { contactContent } from "@/data/contact";

export function ContactSection() {
  return (
    <SectionShell id="contact" ariaLabelledby="contact-heading">
      <Container>
        <SectionHeader
          id="contact-heading"
          label={contactContent.sectionLabel}
          title={contactContent.sectionTitle}
        />
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:mt-10">
          {contactContent.body}
        </p>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-5">
          {contactContent.links.map(
            ({ href, label, sub, icon, download }) => {
              const isMail = href.startsWith("mailto:");
              const isExternal = href.startsWith("http");
              return (
                <li key={label}>
                  <Link
                    href={href}
                    download={download ? true : undefined}
                    target={
                      download || isMail
                        ? undefined
                        : isExternal
                          ? "_blank"
                          : undefined
                    }
                    rel={
                      download || isMail || !isExternal
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-start justify-between gap-4 rounded-2xl border border-card-border bg-card p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-[border-color,background-color] duration-200 dark:shadow-none md:p-7"
                  >
                    <div>
                      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-faint">
                        {sub}
                      </p>
                      <p className="mt-2.5 text-sm font-medium text-foreground">
                        {label}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-card-border bg-background/80 text-muted transition-colors duration-200 group-hover:border-accent/25 group-hover:text-accent dark:bg-background/40">
                      <SocialIcon id={icon} className="h-4 w-4" />
                    </span>
                  </Link>
                </li>
              );
            },
          )}
        </ul>
        <p className="mt-16 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-faint md:mt-20">
          <Link
            href="#hero"
            className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-accent"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </p>
      </Container>
    </SectionShell>
  );
}

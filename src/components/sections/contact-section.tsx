"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { SocialIcon } from "@/components/ui/social-icon";
import { contactContent } from "@/data/contact";

const cardClassName =
  "group flex min-h-[7.75rem] flex-col justify-between gap-3 rounded-2xl border border-card-border bg-card p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-200 dark:shadow-none sm:min-h-[8rem] sm:p-6 md:min-h-0 md:p-6 motion-reduce:transition-none motion-reduce:hover:translate-y-0 hover:-translate-y-px hover:border-accent/20 hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.12)] dark:hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.32)] motion-reduce:hover:shadow-[0_1px_0_0_rgba(15,23,42,0.04)] dark:motion-reduce:hover:shadow-none";

export function ContactSection() {
  return (
    <SectionShell id="contact" ariaLabelledby="contact-heading">
      <Container>
        <SectionHeader
          id="contact-heading"
          label={contactContent.sectionLabel}
          title={contactContent.sectionTitle}
        />
        <p className="mt-8 max-w-[42rem] text-pretty text-base leading-[1.62] text-muted sm:mt-9 sm:text-[1.0625rem]">
          {contactContent.body}
        </p>
        <ul className="mt-10 grid list-none gap-3 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-4 md:mt-14 lg:grid-cols-3 xl:grid-cols-5">
          {contactContent.links.map(({ href, label, sub, icon, download }) => {
            const isMail = href.startsWith("mailto:");
            const isExternal =
              href.startsWith("http://") || href.startsWith("https://");
            const newTab =
              !download && !isMail && (isExternal || href.startsWith("//"));

            return (
              <li key={href} className="min-w-0">
                <Link
                  href={href}
                  download={download ? true : undefined}
                  target={newTab ? "_blank" : undefined}
                  rel={newTab ? "noopener noreferrer" : undefined}
                  className={cardClassName}
                >
                  <div className="min-w-0 pr-1">
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-faint sm:text-[11px] sm:tracking-[0.2em]">
                      {sub}
                    </p>
                    <p className="mt-2 break-words text-sm font-medium leading-snug text-foreground">
                      {label}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center self-end rounded-lg border border-card-border bg-background/80 text-muted transition-colors duration-200 group-hover:border-accent/30 group-hover:text-accent dark:bg-background/40">
                    <SocialIcon id={icon} className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-12 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-faint sm:mt-14 md:mt-16 sm:text-[11px]">
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

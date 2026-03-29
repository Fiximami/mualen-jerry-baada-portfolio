"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { SocialIcon } from "@/components/ui/social-icon";
import { contactContent } from "@/data/contact";

const cardClassName =
  "group flex min-h-[8.5rem] flex-col justify-between gap-4 rounded-2xl border border-card-border bg-card p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color,background-color] duration-200 dark:shadow-none md:min-h-0 md:p-7 motion-reduce:transition-none motion-reduce:hover:translate-y-0 hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-[0_10px_28px_-14px_rgba(15,23,42,0.14)] dark:hover:shadow-[0_10px_28px_-14px_rgba(0,0,0,0.35)] motion-reduce:hover:shadow-[0_1px_0_0_rgba(15,23,42,0.04)] dark:motion-reduce:hover:shadow-none";

export function ContactSection() {
  return (
    <SectionShell id="contact" ariaLabelledby="contact-heading">
      <Container>
        <SectionHeader
          id="contact-heading"
          label={contactContent.sectionLabel}
          title={contactContent.sectionTitle}
        />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:mt-10 md:text-[17px] md:leading-[1.65]">
          {contactContent.body}
        </p>
        <ul className="mt-12 grid list-none gap-4 p-0 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
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
                  rel={
                    newTab ? "noopener noreferrer" : undefined
                  }
                  className={cardClassName}
                >
                  <div className="min-w-0 pr-2">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-faint">
                      {sub}
                    </p>
                    <p className="mt-2.5 break-words text-sm font-medium leading-snug text-foreground">
                      {label}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center self-end rounded-lg border border-card-border bg-background/80 text-muted transition-colors duration-200 group-hover:border-accent/30 group-hover:text-accent sm:self-start md:self-end dark:bg-background/40">
                    <SocialIcon id={icon} className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-14 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-faint md:mt-16">
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

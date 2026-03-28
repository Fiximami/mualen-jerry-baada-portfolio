"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SocialIcon } from "@/components/ui/social-icon";
import { heroContent } from "@/data/hero";

const btnPrimary =
  "inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-colors duration-200 hover:bg-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const btnSecondary =
  "inline-flex items-center justify-center rounded-lg border border-card-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/20 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-20 overflow-hidden border-b border-card-border md:scroll-mt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5] dark:opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      <Container className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center py-24 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.04 }}
          className="mb-5 font-mono text-[13px] text-label"
        >
          {heroContent.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, delay: 0.08 }}
          className="max-w-3xl text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl md:text-6xl"
        >
          {heroContent.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, delay: 0.14 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          {heroContent.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <Link href={heroContent.primaryCta.href} className={btnPrimary}>
            {heroContent.primaryCta.label}
          </Link>
          <Link href={heroContent.secondaryCta.href} className={btnSecondary}>
            {heroContent.secondaryCta.label}
          </Link>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.26 }}
          className="mt-14 flex gap-2"
        >
          {heroContent.socials.map(({ href, label, icon }) => (
            <li key={label}>
              <Link
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-card-border bg-card text-muted transition-colors duration-200 hover:border-accent/25 hover:text-accent"
                aria-label={label}
              >
                <SocialIcon id={icon} className="h-4 w-4 shrink-0" />
              </Link>
            </li>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.32 }}
          className="mt-20 flex justify-center sm:mt-24"
        >
          <Link
            href={heroContent.scrollTargetId}
            className="flex flex-col items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-faint transition-colors duration-200 hover:text-accent"
            aria-label="Scroll to next section"
          >
            <span>scroll</span>
            <ArrowDown className="h-4 w-4 animate-scroll-hint" aria-hidden />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

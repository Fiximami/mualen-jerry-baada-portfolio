"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SocialIcon } from "@/components/ui/social-icon";
import { heroContent } from "@/data/hero";

const btnPrimary =
  "inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-colors duration-200 hover:bg-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const btnSecondary =
  "inline-flex items-center justify-center rounded-lg border border-card-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/20 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function HeadlineParts({ text }: { text: string }) {
  const parts = text.split("|").map((s) => s.trim());
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] font-medium leading-snug text-muted md:text-base">
      {parts.map((part, i) => (
        <span key={`${part}-${i}`} className="inline-flex items-center gap-2">
          {i > 0 ? (
            <span className="select-none text-muted-faint/80" aria-hidden>
              |
            </span>
          ) : null}
          <span>{part}</span>
        </span>
      ))}
    </p>
  );
}

export function HeroSection() {
  const photo = heroContent.profileImage;

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
      <Container className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center py-20 md:py-24 lg:py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14 xl:gap-20">
          <div className="flex min-w-0 flex-1 flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.04 }}
              className="text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl md:text-[2.75rem] lg:text-6xl"
            >
              {heroContent.name}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-4 max-w-2xl"
            >
              <HeadlineParts text={heroContent.headline} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.16 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              {heroContent.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.22 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                href={heroContent.primaryCta.href}
                download={
                  heroContent.primaryCta.download ? true : undefined
                }
                className={btnPrimary}
              >
                {heroContent.primaryCta.label}
              </Link>
              <Link
                href={heroContent.secondaryCta.href}
                className={btnSecondary}
              >
                {heroContent.secondaryCta.label}
              </Link>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.32, delay: 0.28 }}
              className="mt-10 flex gap-2"
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
              transition={{ duration: 0.35, delay: 0.34 }}
              className="mt-14 flex justify-center sm:mt-16 lg:justify-start"
            >
              <Link
                href={heroContent.scrollTargetId}
                className="flex flex-col items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-faint transition-colors duration-200 hover:text-accent lg:items-start"
                aria-label="Scroll to about section"
              >
                <span>scroll</span>
                <ArrowDown className="h-4 w-4 animate-scroll-hint" aria-hidden />
              </Link>
            </motion.div>
          </div>

          {photo ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="mx-auto w-full max-w-[200px] shrink-0 sm:max-w-[240px] lg:mx-0 lg:w-[min(100%,260px)] lg:max-w-[260px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-card-border bg-surface/50 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] dark:bg-surface/30 dark:shadow-none">
                <Image
                  src={photo}
                  alt="Mualen Jerry Baada"
                  fill
                  priority
                  sizes="(max-width: 1024px) 240px, 260px"
                  className="object-cover object-[center_15%]"
                />
              </div>
            </motion.div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

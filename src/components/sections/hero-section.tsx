"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SocialIcon } from "@/components/ui/social-icon";
import { heroContent } from "@/data/hero";

const btnPrimary =
  "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-colors duration-200 hover:bg-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6 sm:py-3";

const btnSecondary =
  "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-card-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/20 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6 sm:py-3";

function HeadlineParts({ text }: { text: string }) {
  const parts = text.split("|").map((s) => s.trim());
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[13px] font-medium leading-relaxed text-muted sm:text-sm">
      {parts.map((part, i) => (
        <span key={`${part}-${i}`} className="inline-flex items-center gap-2">
          {i > 0 ? (
            <span className="select-none text-muted-faint/70" aria-hidden>
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
        className="pointer-events-none absolute inset-0 opacity-[0.42] dark:opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      <Container className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          <div className="flex min-w-0 flex-1 flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.04 }}
              className="text-pretty text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
            >
              {heroContent.name}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.09 }}
              className="mt-3 max-w-2xl sm:mt-4"
            >
              <HeadlineParts text={heroContent.headline} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.14 }}
              className="mt-5 max-w-[42rem] text-base leading-[1.62] text-muted sm:mt-6 sm:text-[1.0625rem]"
            >
              {heroContent.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9"
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
              transition={{ duration: 0.3, delay: 0.26 }}
              className="mt-8 flex flex-wrap gap-2 sm:mt-9"
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
              transition={{ duration: 0.32, delay: 0.32 }}
              className="mt-10 flex justify-center sm:mt-12 lg:justify-start"
            >
              <Link
                href={heroContent.scrollTargetId}
                className="flex flex-col items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-faint transition-colors duration-200 hover:text-accent lg:items-start"
                aria-label="Scroll to about section"
              >
                <span>scroll</span>
                <ArrowDown className="h-3.5 w-3.5 animate-scroll-hint" aria-hidden />
              </Link>
            </motion.div>
          </div>

          {photo ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.16 }}
              className="mx-auto w-full max-w-[11.5rem] shrink-0 sm:max-w-[14rem] lg:mx-0 lg:w-[15.5rem] lg:max-w-[15.5rem]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-card-border bg-surface/40 dark:bg-surface/25">
                <Image
                  src={photo}
                  alt="Mualen Jerry Baada"
                  fill
                  priority
                  sizes="(max-width: 1024px) 224px, 248px"
                  className="object-cover object-[center_18%]"
                />
              </div>
            </motion.div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

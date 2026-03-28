"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";
import { useTheme } from "@/components/ui/theme-provider";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-card-border bg-background/85 backdrop-blur-md dark:bg-background/90"
          : "border-transparent bg-background/70 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12"
        aria-label="Primary"
      >
        <Link
          href="#hero"
          className="font-mono text-[13px] font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-accent"
        >
          {site.logoText}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:bg-surface hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-card text-foreground transition-colors duration-200 hover:border-accent/25 hover:bg-surface"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun className="h-[17px] w-[17px]" aria-hidden />
            ) : (
              <Moon className="h-[17px] w-[17px]" aria-hidden />
            )}
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-card text-foreground transition-colors duration-200 hover:bg-surface md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X className="h-[17px] w-[17px]" aria-hidden />
            ) : (
              <Menu className="h-[17px] w-[17px]" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-card-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-0.5 px-5 py-4 sm:px-8">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-surface"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

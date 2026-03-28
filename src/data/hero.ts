import type { HeroContent } from "@/types/portfolio";

export const heroContent: HeroContent = {
  eyebrow: "Full Stack Developer · Technical Support · Product Builder",
  name: "Mualen Jerry Baada",
  tagline:
    "I build digital platforms that solve real-world problems by combining software development, technical support experience, and product innovation.",
  primaryCta: { href: "#projects", label: "View projects" },
  secondaryCta: { href: "#contact", label: "Get in touch" },
  socials: [
    {
      href: "https://github.com/MualenJerryBaada",
      label: "GitHub",
      icon: "github",
    },
    {
      href: "https://www.linkedin.com/in/mualen-jerry-baada/",
      label: "LinkedIn",
      icon: "linkedin",
    },
    {
      href: "mailto:mualenjerrybaada@gmail.com",
      label: "Email",
      icon: "mail",
    },
  ],
  scrollTargetId: "#about",
};

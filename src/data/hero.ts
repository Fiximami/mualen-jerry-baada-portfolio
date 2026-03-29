import type { HeroContent } from "@/types/portfolio";
import { assets } from "@/data/assets";

export const heroContent: HeroContent = {
  name: "Mualen Jerry Baada",
  headline: "Full Stack Developer | Technical Support | Product Builder",
  tagline:
    "I build digital platforms that solve real-world problems by combining software development, technical support experience, and product innovation.",
  primaryCta: {
    href: assets.resumePdf,
    label: "Download CV",
    download: true,
  },
  secondaryCta: { href: "#projects", label: "View Projects" },
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
  profileImage: assets.profilePhoto,
};

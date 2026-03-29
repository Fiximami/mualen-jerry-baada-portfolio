import type { ContactContent } from "@/types/portfolio";
import { assets } from "@/data/assets";

export const contactContent: ContactContent = {
  sectionLabel: "Contact",
  sectionTitle: "If the work fits, let's talk.",
  body: "I'm open to full stack roles, technical support leadership, and product-led collaborations where engineering and operations stay aligned. Send a short note with what you're building and the timeline; I'll respond when I can give a useful answer.",
  links: [
    {
      href: "mailto:mualenjerrybaada@gmail.com",
      label: "mualenjerrybaada@gmail.com",
      sub: "Email",
      icon: "mail",
    },
    {
      href: "https://www.linkedin.com/in/mualen-jerry-baada/",
      label: "LinkedIn",
      sub: "Profile",
      icon: "linkedin",
    },
    {
      href: "https://github.com/MualenJerryBaada",
      label: "GitHub",
      sub: "Code",
      icon: "github",
    },
    {
      href: assets.resumePdf,
      label: "Download CV",
      sub: "PDF",
      icon: "cv",
      download: true,
    },
  ],
};

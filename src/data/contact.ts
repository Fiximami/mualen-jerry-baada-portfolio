import type { ContactContent } from "@/types/portfolio";
import { assets } from "@/data/assets";

export const contactContent: ContactContent = {
  sectionLabel: "Contact",
  sectionTitle: "Let's connect.",
  body: "Interested in collaborating, building a product, or discussing opportunities? I'm always open to meaningful conversations around technology, product development, and digital innovation.",
  links: [
    {
      href: "mailto:kwesijerry56@gmail.com",
      label: "kwesijerry56@gmail.com",
      sub: "Email",
      icon: "mail",
    },
    {
      href: "https://www.linkedin.com/in/mualen-baada-jerry-/",
      label: "linkedin.com/in/mualen-baada-jerry-",
      sub: "LinkedIn",
      icon: "linkedin",
    },
    {
      href: "https://github.com/Fiximami",
      label: "github.com/Fiximami",
      sub: "GitHub",
      icon: "github",
    },
    {
      href: assets.whatsappChatUrl,
      label: "+233 24 669 7376",
      sub: "WhatsApp",
      icon: "whatsapp",
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

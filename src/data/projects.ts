import type { ProjectsContent } from "@/types/portfolio";

export const projectsContent: ProjectsContent = {
  sectionLabel: "Projects",
  sectionTitle: "Work that reflects how I build and support products.",
  items: [
    {
      title: "MualenTech product line",
      description:
        "Founder-led builds across mobile and web: scoping features, shipping iteratively, and keeping releases maintainable for a small team.",
      tags: ["Flutter", "Next.js", "Product"],
      href: "https://github.com/MualenJerryBaada",
      linkLabel: "GitHub",
    },
    {
      title: "Abakoma's Market platform",
      description:
        "Digital platform and operations support for a market business—practical workflows, integrations where they matter, and steady support for day-to-day use.",
      tags: ["Web", "API Integration", "Operations"],
      href: "#contact",
      linkLabel: "Discuss",
    },
    {
      title: "Client sites & WordPress delivery",
      description:
        "WordPress-based sites and landing experiences with clear structure, performance basics, and handover notes so content owners can move without friction.",
      tags: ["WordPress", "Tailwind CSS", "Delivery"],
      href: "#contact",
      linkLabel: "Get in touch",
    },
  ],
};

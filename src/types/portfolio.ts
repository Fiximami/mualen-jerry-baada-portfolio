export type NavLink = {
  href: string;
  label: string;
};

export type SocialIconId = "github" | "linkedin" | "mail" | "cv";

export type HeroAction = {
  href: string;
  label: string;
};

export type HeroSocialLink = {
  href: string;
  label: string;
  icon: SocialIconId;
};

export type HeroContent = {
  eyebrow: string;
  name: string;
  tagline: string;
  primaryCta: HeroAction;
  secondaryCta: HeroAction;
  socials: HeroSocialLink[];
  scrollTargetId: string;
};

export type AboutMetaRow = {
  label: string;
  value: string;
};

export type AboutContent = {
  sectionLabel: string;
  sectionTitle: string;
  body: string;
  meta: AboutMetaRow[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type SkillsContent = {
  sectionLabel: string;
  sectionTitle: string;
  groups: SkillGroup[];
};

export type ExperienceRole = {
  company: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ExperienceContent = {
  sectionLabel: string;
  sectionTitle: string;
  roles: ExperienceRole[];
};

import type { Project } from "@/types/project";

export type ProjectsContent = {
  sectionLabel: string;
  sectionTitle: string;
  items: Project[];
};

export type ContactLink = {
  href: string;
  label: string;
  sub: string;
  icon: SocialIconId;
  download?: boolean;
};

export type ContactContent = {
  sectionLabel: string;
  sectionTitle: string;
  body: string;
  links: ContactLink[];
};

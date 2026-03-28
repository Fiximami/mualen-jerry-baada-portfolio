import { FileDown, Mail } from "lucide-react";
import type { SocialIconId } from "@/types/portfolio";
import { IconGithub, IconLinkedin } from "@/components/ui/brand-icons";

const icons = {
  github: IconGithub,
  linkedin: IconLinkedin,
  mail: Mail,
  cv: FileDown,
} as const;

type SocialIconProps = {
  id: SocialIconId;
  className?: string;
};

export function SocialIcon({ id, className }: SocialIconProps) {
  const Icon = icons[id];
  return <Icon className={className} aria-hidden />;
}

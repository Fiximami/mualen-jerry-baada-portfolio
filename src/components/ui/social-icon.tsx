import { FileDown, Mail } from "lucide-react";
import type { SocialIconId } from "@/types/portfolio";
import {
  IconGithub,
  IconLinkedin,
  IconWhatsapp,
} from "@/components/ui/brand-icons";

const icons = {
  github: IconGithub,
  linkedin: IconLinkedin,
  mail: Mail,
  cv: FileDown,
  whatsapp: IconWhatsapp,
} as const;

type SocialIconProps = {
  id: SocialIconId;
  className?: string;
};

export function SocialIcon({ id, className }: SocialIconProps) {
  const Icon = icons[id];
  return <Icon className={className} aria-hidden />;
}

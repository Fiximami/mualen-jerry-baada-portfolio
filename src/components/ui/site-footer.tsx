import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-card-border py-8 text-center font-mono text-[10px] tracking-wide text-muted-faint sm:py-10 sm:text-[11px]">
      © {new Date().getFullYear()} {site.copyrightName}
    </footer>
  );
}

import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-card-border py-10 text-center font-mono text-[11px] tracking-wide text-muted">
      © {new Date().getFullYear()} {site.copyrightName}
    </footer>
  );
}

type SectionHeaderProps = {
  id: string;
  label: string;
  title: string;
};

export function SectionHeader({ id, label, title }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <h2
        id={id}
        className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-label"
      >
        {label}
      </h2>
      <p className="mt-5 text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl md:text-[2rem] md:leading-tight lg:text-4xl lg:leading-tight">
        {title}
      </p>
    </div>
  );
}

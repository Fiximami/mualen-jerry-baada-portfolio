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
        className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-label sm:text-[11px]"
      >
        {label}
      </h2>
      <p className="mt-4 max-w-2xl text-pretty text-xl font-semibold leading-snug tracking-tight text-foreground sm:mt-5 sm:text-2xl sm:leading-snug md:text-[1.75rem] md:leading-tight lg:text-3xl lg:leading-tight">
        {title}
      </p>
    </div>
  );
}

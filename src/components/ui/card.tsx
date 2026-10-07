import { cn } from "@/lib/utils";

/** Surface card matching the brand's cream/forest-green palette. */
export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-brand-lg)] border border-ink/10 bg-ivory p-6 shadow-soft",
        className,
      )}
      {...props}
    />
  );
}

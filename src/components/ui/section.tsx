import { cn } from "@/lib/utils";

/** Vertical rhythm wrapper used to compose page sections. */
export function Section({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return <section className={cn("py-16 sm:py-20 lg:py-28", className)} {...props} />;
}

import { cn } from "@/lib/utils";

/** Thin hairline divider consistent with the brand's editorial styling. */
export function Divider({
  className,
  ...props
}: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr className={cn("border-0 border-t border-ink/10", className)} {...props} />
  );
}

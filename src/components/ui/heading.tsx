import { cn } from "@/lib/utils";

export function Eyebrow({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("eyebrow", className)} {...props} />;
}

interface SectionHeadingProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly intro?: string;
  readonly align?: "left" | "center";
  readonly as?: "h2" | "h3";
  readonly className?: string;
}

/** Eyebrow + title + optional intro, used to open content sections. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag className="text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </Tag>
      {intro ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

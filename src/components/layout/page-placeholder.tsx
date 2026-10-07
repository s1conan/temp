import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/heading";

interface PagePlaceholderProps {
  readonly title: string;
  readonly description: string;
  /** Optional real brand photo; when present it renders as a page hero. */
  readonly image?: { readonly src: string; readonly alt: string };
}

/**
 * Temporary content stub. Rendered for routes whose full content arrives in
 * Phase 2, so navigation, layout and imagery can be validated end to end.
 */
export function PagePlaceholder({
  title,
  description,
  image,
}: PagePlaceholderProps) {
  return (
    <>
      {image ? (
        <section className="relative isolate flex min-h-[62svh] items-end overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/10"
            aria-hidden
          />
          <Container className="relative z-10 pt-36 pb-12 text-cream">
            <Eyebrow className="text-cream/90">Coming soon</Eyebrow>
            <h1 className="mt-3 text-4xl sm:text-5xl">{title}</h1>
          </Container>
        </section>
      ) : null}

      <Section className={image ? "pt-14 pb-40" : "pt-36 pb-40"}>
        <Container>
          {image ? null : (
            <>
              <Eyebrow>Coming soon</Eyebrow>
              <h1 className="mt-4 text-4xl sm:text-5xl">{title}</h1>
            </>
          )}
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            {description}
          </p>
        </Container>
      </Section>
    </>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/heading";
import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="pt-36 pb-40">
      <Container>
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-4 text-4xl sm:text-5xl">Page not found</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          The page you were looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <LinkButton href="/" variant="forest" size="lg">
            Back to home
          </LinkButton>
          <Link
            href="/quote"
            className="link-underline self-center text-sm"
          >
            Get a quote
          </Link>
        </div>
      </Container>
    </Section>
  );
}

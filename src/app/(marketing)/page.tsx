import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, SectionHeading } from "@/components/ui/heading";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Luxury Marquee Hire",
  description:
    "Luxury sailcloth marquees and stretch tents for weddings, celebrations and corporate events. Bespoke styling, flawless delivery.",
  alternates: { canonical: "/" },
};

const offerings = [
  {
    title: "Sailcloth Marquee",
    body: "Traditional charm with modern design. Fully sealable walls and modular 14m-wide sections to suit events of any size.",
    href: "/marquees",
    image: "/images/pdf/sailcloth/sailcloth-01.jpeg",
    alt: "Aerial view of a sailcloth marquee set in a field with guests arriving",
  },
  {
    title: "Stretch Tents",
    body: "Unbeatable versatility that adapts to varied terrain — perfect where a traditional pole marquee simply can't go.",
    href: "/marquees",
    image: "/images/pdf/stretch-tent/stretch-tent-02.jpeg",
    alt: "Aerial view of stretch tents lining an estate garden",
  },
  {
    title: "Extras & Styling",
    body: "Tables, chairs, lighting, flooring, bars and finishing touches — everything you need to complete your event.",
    href: "/extras",
    image: "/images/pdf/tables-chairs/tables-chairs-01.jpeg",
    alt: "Rustic trestle table dressed with cross-back chairs and flowers",
  },
] as const;

const gallery = [
  { src: "/images/pdf/about/about-02.jpeg", alt: "Marquee interior set for dining with bunting overhead" },
  { src: "/images/pdf/lighting/lighting-01.jpeg", alt: "Marquee glowing with festoon lighting at dusk" },
  { src: "/images/pdf/accessories/accessories-01.png", alt: "Flower ring and top table inside a marquee" },
  { src: "/images/pdf/flooring/flooring-01.jpeg", alt: "Cross-back chairs on textured event matting" },
  { src: "/images/pdf/bars/bars-01.png", alt: "Rustic curved wooden round bar" },
  { src: "/images/pdf/stretch-tent/stretch-tent-01.jpeg", alt: "Stretch tents sheltering an outdoor event" },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero — the brand deck's first page (cover), shown uncropped and
          contained to the viewport, with feathered edges on desktop. */}
      <section className="relative flex justify-center bg-cream pt-20 lg:pt-0">
        <Image
          src="/images/pdf/hero/page-01.jpg"
          alt="Sailcloth marquee on a green field beneath a blue sky"
          width={2880}
          height={1620}
          preload
          sizes="100vw"
          className="hero-feather block h-auto max-h-[100svh] w-auto max-w-full"
        />
      </section>

      <Section>
        <Container>
          <Reveal>
            <Eyebrow>Luxury marquees &amp; event spaces</Eyebrow>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Bringing dreams to life
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Spaces created in collaboration with you — bringing together
              market-leading suppliers and years of industry experience.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <LinkButton href="/quote" variant="forest" size="lg">
                Build your quote
              </LinkButton>
              <LinkButton href="/marquees" variant="outline" size="lg">
                Explore marquees <span aria-hidden="true">→</span>
              </LinkButton>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-ivory">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Spaces created in collaboration with you"
              intro="SAXBYS Marquees is a luxury marquee and events company with creativity at its core — here to help you achieve perfection."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => (
              <Reveal key={offering.title} delay={index * 0.08}>
                <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-brand-lg)] border border-ink/10 bg-ivory shadow-soft">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={offering.image}
                      alt={offering.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-2xl">{offering.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {offering.body}
                    </p>
                    <LinkButton
                      href={offering.href}
                      variant="ghost"
                      size="sm"
                      className="mt-auto w-fit px-0"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </LinkButton>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-forest text-cream">
        <Container className="flex flex-col items-center gap-8 text-center">
          <Reveal>
            <Eyebrow className="text-cream/90">The sailcloth marquee</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Traditional charm, modern design
            </h2>
          </Reveal>
          <Reveal>
            <Image
              src="/images/brand/marquee.png"
              alt="Sailcloth marquee viewed from the side with translucent walls"
              width={1079}
              height={298}
              sizes="(max-width: 1024px) 100vw, 900px"
              className="h-auto w-full max-w-3xl"
            />
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-ivory">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Recent events"
              title="A glimpse of the spaces we create"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <Reveal key={item.src} delay={(index % 3) * 0.06}>
                <div className="relative aspect-square overflow-hidden rounded-[var(--radius-brand-lg)]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <LinkButton href="/gallery" variant="outline" size="lg">
              View the gallery
            </LinkButton>
          </div>
        </Container>
      </Section>

      <section className="bg-forest text-cream">
        <Container className="py-20 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Ready to bring your event to life?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/90">
              Tell us about your event and build an indicative quote in minutes.
            </p>
            <LinkButton
              href="/quote"
              variant="outline"
              size="lg"
              className="mt-8 border-cream/50 text-cream hover:border-cream hover:text-cream focus-visible:outline-cream"
            >
              Get a quote
            </LinkButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

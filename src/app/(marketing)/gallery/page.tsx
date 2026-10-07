import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/heading";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Tables and chairs, lighting, flooring, bars and accessories — the pieces that complete a Saxbys Marquees event.",
  alternates: { canonical: "/gallery" },
};

interface GalleryItem {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
  readonly label: string;
}

// Item photography from the brand deck, pages 8–12.
const items: readonly GalleryItem[] = [
  {
    src: "/images/pdf/tables-chairs/tables-chairs-01.jpeg",
    width: 414,
    height: 363,
    alt: "Rustic trestle table dressed with oak cross-back chairs and flowers",
    label: "Tables & chairs",
  },
  {
    src: "/images/pdf/tables-chairs/chair-cross-back.png",
    width: 210,
    height: 359,
    alt: "Oak cross-back chair with a tie-on cushion",
    label: "Oak cross-back chair",
  },
  {
    src: "/images/pdf/lighting/lighting-01.jpeg",
    width: 350,
    height: 207,
    alt: "Marquee lit by festoon lighting at dusk",
    label: "Festoon lighting",
  },
  {
    src: "/images/pdf/lighting/lighting-02.jpeg",
    width: 350,
    height: 207,
    alt: "Fairy light canopy inside a marquee",
    label: "Interior lighting",
  },
  {
    src: "/images/pdf/lighting/lighting-03.jpeg",
    width: 350,
    height: 207,
    alt: "Uplighters washing the marquee walls",
    label: "Uplighters",
  },
  {
    src: "/images/pdf/lighting/lighting-04.jpeg",
    width: 367,
    height: 217,
    alt: "Festoon lighting lining an outdoor walkway",
    label: "Walkway festoons",
  },
  {
    src: "/images/pdf/flooring/flooring-01.jpeg",
    width: 414,
    height: 367,
    alt: "Cross-back chairs on textured event matting",
    label: "Matting",
  },
  {
    src: "/images/pdf/flooring/flooring-02.jpeg",
    width: 430,
    height: 367,
    alt: "Oak dance floor laid inside a marquee",
    label: "Dance floor",
  },
  {
    src: "/images/pdf/bars/bars-01.png",
    width: 550,
    height: 551,
    alt: "Rustic curved wooden round bar",
    label: "Round bar",
  },
  {
    src: "/images/pdf/accessories/accessories-01.png",
    width: 320,
    height: 570,
    alt: "Flower ring above a top table inside a marquee",
    label: "Flower ring",
  },
  {
    src: "/images/pdf/accessories/accessories-02.jpeg",
    width: 366,
    height: 353,
    alt: "Event staging dressed for a celebration",
    label: "Staging",
  },
  {
    src: "/images/pdf/accessories/accessories-03.jpeg",
    width: 366,
    height: 334,
    alt: "Blackout draping used to line a marquee",
    label: "Blackout draping",
  },
  {
    src: "/images/pdf/accessories/accessories-04.jpeg",
    width: 382,
    height: 348,
    alt: "Reveal curtain at a marquee entrance",
    label: "Reveal curtain",
  },
];

export default function GalleryPage() {
  return (
    <Section className="pt-36 pb-40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="The pieces that complete your event"
            intro="Tables and chairs, lighting, flooring, bars and accessories — a look at the details we bring to every space."
          />
        </Reveal>

        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {items.map((item) => (
            <figure
              key={item.src}
              className="break-inside-avoid overflow-hidden rounded-[var(--radius-brand-lg)] border border-ink/10 bg-ivory"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="h-auto w-full"
              />
              <figcaption className="px-4 py-3 text-xs uppercase tracking-[0.2em] text-ink-soft">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

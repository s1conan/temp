import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Build an indicative quote for your marquee event and send it to the SAXBYS team.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <PagePlaceholder
      title="Get a Quote"
      description="Build your quote with our marquee and extras catalogue, then send it straight to the team."
      image={{
        src: "/images/pdf/layout/layout-02.png",
        alt: "Marquee floor plan showing seating, bar and facilities layout",
      }}
    />
  );
}

import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Parties & Celebrations",
  description:
    "Marquee hire for parties, anniversaries and celebrations of every size.",
  alternates: { canonical: "/parties-celebrations" },
};

export default function PartiesCelebrationsPage() {
  return (
    <PagePlaceholder
      title="Parties & Celebrations"
      description="From milestone birthdays to anniversaries — the right structure, styled to suit."
      image={{
        src: "/images/pdf/lighting/lighting-01.jpeg",
        alt: "Marquee glowing with festoon lighting at dusk",
      }}
    />
  );
}

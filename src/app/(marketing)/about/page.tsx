import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A luxury marquee and events company with creativity at its core, bringing dreams to life with market-leading suppliers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      title="About Us"
      description="Our story, our expertise and the market-leading suppliers behind every SAXBYS event."
      image={{
        src: "/images/pdf/about/about-02.jpeg",
        alt: "Marquee interior set for dining with bunting overhead",
      }}
    />
  );
}

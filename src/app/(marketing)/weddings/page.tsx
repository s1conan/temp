import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Wedding Marquees",
  description:
    "Luxury wedding marquee hire — beautiful, weatherproof spaces tailored to your celebration.",
  alternates: { canonical: "/weddings" },
};

export default function WeddingsPage() {
  return (
    <PagePlaceholder
      title="Wedding Marquees"
      description="Bespoke wedding marquees and styling designed around your day."
      image={{
        src: "/images/pdf/accessories/accessories-01.png",
        alt: "Wedding top table with a flower ring inside a marquee",
      }}
    />
  );
}

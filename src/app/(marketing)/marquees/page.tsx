import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Marquees",
  description:
    "Sailcloth marquees and stretch tents — versatile, durable luxury structures for events of every size.",
  alternates: { canonical: "/marquees" },
};

export default function MarqueesPage() {
  return (
    <PagePlaceholder
      title="Our Marquees"
      description="Explore our sailcloth marquees and stretch tents, their specifications and the spaces they can create."
      image={{
        src: "/images/pdf/sailcloth/sailcloth-01.jpeg",
        alt: "Aerial view of a sailcloth marquee set in a field with guests",
      }}
    />
  );
}

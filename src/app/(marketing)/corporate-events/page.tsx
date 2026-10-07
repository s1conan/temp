import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Corporate Events",
  description:
    "Corporate and festival marquee hire with the capacity, facilities and reliability your event demands.",
  alternates: { canonical: "/corporate-events" },
};

export default function CorporateEventsPage() {
  return (
    <PagePlaceholder
      title="Corporate Events"
      description="Large-capacity marquees, facilities and infrastructure for corporate events and festivals."
      image={{
        src: "/images/pdf/stretch-tent/stretch-tent-01.jpeg",
        alt: "Stretch tents sheltering an outdoor event with classic cars",
      }}
    />
  );
}

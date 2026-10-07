import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Extras & Styling",
  description:
    "Tables and chairs, lighting, flooring, bars, accessories, alfresco additions and event facilities.",
  alternates: { canonical: "/extras" },
};

export default function ExtrasPage() {
  return (
    <PagePlaceholder
      title="Extras & Styling"
      description="Everything that completes your event — furniture, lighting, flooring, bars, accessories and facilities."
      image={{
        src: "/images/pdf/tables-chairs/tables-chairs-01.jpeg",
        alt: "Rustic trestle table dressed with cross-back chairs and flowers",
      }}
    />
  );
}

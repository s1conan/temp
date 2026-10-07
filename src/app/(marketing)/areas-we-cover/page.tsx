import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "Find out where SAXBYS Marquees provides luxury marquee and stretch tent hire.",
  alternates: { canonical: "/areas-we-cover" },
};

export default function AreasWeCoverPage() {
  return (
    <PagePlaceholder
      title="Areas We Cover"
      description="The towns and regions we serve with luxury marquee and stretch tent hire."
      image={{
        src: "/images/pdf/stretch-tent/stretch-tent-02.jpeg",
        alt: "Aerial view of stretch tents lining an estate garden",
      }}
    />
  );
}

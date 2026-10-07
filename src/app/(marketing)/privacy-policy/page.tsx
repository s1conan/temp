import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Saxbys Marquees collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <PagePlaceholder
      title="Privacy Policy"
      description="How we collect, use and protect your personal information."
    />
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { MotionProvider } from "@/components/motion/motion-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StickyCta } from "@/components/layout/sticky-cta";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Luxury Event Marquees`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Luxury sailcloth marquees and stretch tents for weddings, celebrations and corporate events. Bespoke styling, flawless delivery.",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="pb-20 lg:pb-0">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="focus:outline-none">
            {children}
          </main>
          <SiteFooter />
          <StickyCta />
        </MotionProvider>
      </body>
    </html>
  );
}

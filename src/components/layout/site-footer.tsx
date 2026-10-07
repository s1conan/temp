import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { BrandLogo } from "@/components/layout/brand-logo";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-cream">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-3">
            <Link href="/" aria-label="Saxbys Marquees — home">
              <BrandLogo variant="green" className="h-14 w-auto" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
              Spaces created in collaboration with you to bring dreams to life —
              luxury sailcloth marquees and stretch tents for every occasion.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <h2 className="eyebrow">Explore</h2>
            <ul className="flex flex-col gap-2 text-sm">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="eyebrow">Enquiries</h2>
            <Link
              href="/quote"
              className="link-underline w-fit text-sm"
            >
              Request a quote
            </Link>
            {siteConfig.email ? (
              <a href={`mailto:${siteConfig.email}`} className="link-underline w-fit text-sm">
                {siteConfig.email}
              </a>
            ) : null}
            {siteConfig.phone ? (
              <a href={`tel:${siteConfig.phone}`} className="link-underline w-fit text-sm">
                {siteConfig.phone}
              </a>
            ) : null}
          </div>
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col gap-2 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="link-underline">
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { BrandLogo } from "@/components/layout/brand-logo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useFocusTrap } from "@/hooks/use-focus-trap";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  const closeDrawer = () => setOpen(false);

  // Keep keyboard/AT focus inside the drawer and restore it on close.
  useFocusTrap(drawerRef, open);

  // Lock scroll and support Escape-to-close while the drawer is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream">
        <Container>
          <div className="flex h-20 items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Saxbys Marquees — home"
            >
              <BrandLogo
                variant="green"
                eager
                className="h-11 w-auto sm:h-14"
              />
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-7 xl:flex"
            >
              {siteConfig.desktopNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "link-underline text-sm",
                    pathname === link.href && "text-ink",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <LinkButton href="/quote" variant="forest" size="sm">
                Get a Quote
              </LinkButton>
            </div>

            <button
              type="button"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-brand)] text-ink xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls={open ? "mobile-nav" : undefined}
              onClick={() => setOpen(true)}
            >
              <Menu aria-hidden className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Rendered as a sibling of the header so `fixed` positions against the
          viewport, not the header's containing block. */}
      {open ? (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            className="absolute inset-0 bg-ink/50"
            onClick={closeDrawer}
          />
          <div
            ref={drawerRef}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col gap-6 overflow-y-auto bg-cream p-6 shadow-float"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                aria-label="Saxbys Marquees — home"
                onClick={closeDrawer}
              >
                <BrandLogo variant="green" className="h-12 w-auto" />
              </Link>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-brand)] text-ink"
                aria-label="Close menu"
                onClick={closeDrawer}
              >
                <X aria-hidden className="h-6 w-6" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-col">
              {siteConfig.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={closeDrawer}
                  className="border-b border-ink/10 py-4 font-display text-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <LinkButton
              href="/quote"
              variant="forest"
              size="lg"
              className="w-full"
              onClick={closeDrawer}
            >
              Get a Quote
            </LinkButton>
          </div>
        </div>
      ) : null}
    </>
  );
}

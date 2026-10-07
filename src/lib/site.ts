/**
 * Central site configuration.
 *
 * `email` and `phone` are intentionally empty until confirmed by the client
 * (PRD open question OQ-3). Components render them only when set, so no
 * placeholder contact details leak into the UI.
 */

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface SiteConfig {
  readonly name: string;
  readonly shortName: string;
  readonly tagline: string;
  readonly url: string;
  readonly email: string;
  readonly phone: string;
  readonly nav: readonly NavLink[];
  readonly desktopNav: readonly NavLink[];
}

export const siteConfig: SiteConfig = {
  name: "Saxbys Marquees",
  shortName: "Saxbys",
  tagline: "Luxury marquees & event spaces",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.saxbysmarquees.co.uk",
  email: "",
  phone: "",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Marquees", href: "/marquees" },
    { label: "Weddings", href: "/weddings" },
    { label: "Parties", href: "/parties-celebrations" },
    { label: "Corporate", href: "/corporate-events" },
    { label: "Extras", href: "/extras" },
    { label: "Gallery", href: "/gallery" },
    { label: "Areas", href: "/areas-we-cover" },
  ],
  // Curated subset shown in the desktop bar; the full list lives in the drawer.
  desktopNav: [
    { label: "About", href: "/about" },
    { label: "Marquees", href: "/marquees" },
    { label: "Weddings", href: "/weddings" },
    { label: "Extras", href: "/extras" },
    { label: "Gallery", href: "/gallery" },
    { label: "Areas", href: "/areas-we-cover" },
  ],
};

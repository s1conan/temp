import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  /** `green` for light backgrounds, `cream` for dark backgrounds. */
  readonly variant?: "green" | "cream";
  readonly className?: string;
  /** Set on the header logo to load it eagerly (above the fold). */
  readonly eager?: boolean;
}

const LOGO_SRC = {
  green: "/images/brand/logo-green.png",
  cream: "/images/brand/logo-cream.png",
} as const;

/**
 * The real SAXBYS Marquees logo, extracted from the brand deck with its
 * transparency restored (originally stored as an image + soft mask).
 */
export function BrandLogo({
  variant = "green",
  className,
  eager = false,
}: BrandLogoProps) {
  return (
    <Image
      src={LOGO_SRC[variant]}
      alt="Saxbys Marquees"
      width={1224}
      height={742}
      loading={eager ? "eager" : "lazy"}
      className={cn("h-auto w-auto", className)}
    />
  );
}

import { LinkButton } from "@/components/ui/button";

/**
 * Persistent mobile conversion bar. Hidden from `lg` upward where the header
 * CTA is always visible.
 */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream p-3 lg:hidden">
      <LinkButton href="/quote" variant="forest" size="lg" className="w-full">
        Get a Quote
      </LinkButton>
    </div>
  );
}

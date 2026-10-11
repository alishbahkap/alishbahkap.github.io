import Link from "next/link";

/** Shared hover/keyboard-focus treatment for text links. */
export const linkTone = "transition-colors duration-200 hover:text-oxblood focus-visible:text-oxblood";

export type Crumb = {
  label: string;
  /** Omit on the last crumb: it's the current page. */
  href?: string;
  /** Set in capitals (section names), vs. project titles kept as written. */
  caps?: boolean;
};

/**
 * "ENGINEERING ── BrewOS ─────────── BACK"
 * Short fixed rules sit between crumbs; one flexible rule fills the space before BACK.
 */
export function BreadcrumbBar({
  trail,
  back,
  large = false,
}: {
  trail: Crumb[];
  back: React.ReactNode;
  /** Bigger, slightly bolder text and more space above (used on /engineering). */
  large?: boolean;
}) {
  const size = large
    ? "pt-12 sm:pt-16 text-base font-medium sm:text-lg"
    : "pt-8 sm:pt-10 text-sm sm:text-base";

  return (
    <header className={`mx-auto max-w-[88rem] px-5 sm:px-10 ${size}`}>
      {/* Rules use bg-current, so they match the text colour on light or dark pages */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-3 tracking-[0.06em] sm:gap-6">
        <ol className="flex min-w-0 items-center gap-3 sm:gap-6">
          {trail.map((crumb, i) => (
            <li key={crumb.label + i} className="flex min-w-0 items-center gap-3 sm:gap-6">
              {i > 0 && <span aria-hidden className="h-px w-6 shrink-0 bg-current sm:w-16" />}
              {crumb.href ? (
                <Link href={crumb.href} className={`truncate ${crumb.caps ? "uppercase" : ""} ${linkTone}`}>
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page" className={`truncate ${crumb.caps ? "uppercase" : ""}`}>
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
        <span aria-hidden className="h-px min-w-6 flex-1 bg-current" />
        {back}
      </nav>
    </header>
  );
}

/** BACK always goes one level up the site, never to browser history. */
export function BackLink({ href }: { href: string }) {
  return (
    <Link href={href} className={`shrink-0 uppercase ${linkTone}`}>
      Back
    </Link>
  );
}

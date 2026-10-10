/**
 * Masonry via CSS columns: items flow top-to-bottom down each column, and
 * `break-inside-avoid` keeps any one item from splitting across columns.
 */
export function Masonry({ children }: { children: React.ReactNode }) {
  return <ul className="columns-1 gap-x-8 sm:columns-2 lg:columns-3 lg:gap-x-10">{children}</ul>;
}

export function MasonryItem({ children }: { children: React.ReactNode }) {
  return <li className="mb-10 break-inside-avoid lg:mb-12">{children}</li>;
}

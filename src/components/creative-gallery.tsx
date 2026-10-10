"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES, CATEGORY_LABELS, type CreativeCategory, isCategory } from "@/content/creative";
import { BackLink, linkTone } from "./breadcrumb-bar";
import { ImageBox } from "./image-box";
import { Masonry, MasonryItem } from "./masonry";

export type CreativeTile = {
  slug: string;
  title: string;
  category: CreativeCategory;
  ratio: string;
  src?: string;
};

type Filter = CreativeCategory | "all";

/** Reads ?filter= from the URL, so filtered views survive refresh, sharing and BACK. */
export function CreativeGallery({ tiles }: { tiles: CreativeTile[] }) {
  const raw = useSearchParams().get("filter");
  return <GalleryView tiles={tiles} filter={isCategory(raw) ? raw : "all"} />;
}

/** Pure rendering, no hooks: also used as the server-rendered fallback. */
export function GalleryView({ tiles, filter }: { tiles: CreativeTile[]; filter: Filter }) {
  const visible = filter === "all" ? tiles : tiles.filter((t) => t.category === filter);
  const filters: Filter[] = ["all", ...CATEGORIES];

  return (
    <>
      <nav aria-label="Filter by category">
        <ul className="mx-auto flex max-w-3xl flex-wrap justify-between gap-x-6 gap-y-3 text-base tracking-[0.06em] uppercase sm:text-lg">
          {filters.map((f) => (
            <li key={f}>
              <Link
                href={f === "all" ? "/creative" : `/creative?filter=${f}`}
                replace
                scroll={false}
                aria-current={f === filter ? "true" : undefined}
                className={f === filter ? "font-semibold text-oxblood" : linkTone}
              >
                {f === "all" ? "All" : CATEGORY_LABELS[f]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-12 sm:mt-16">
        <Masonry>
          {visible.map((tile) => (
            <MasonryItem key={tile.slug}>
              <Link
                href={filter === "all" ? `/creative/${tile.slug}` : `/creative/${tile.slug}?from=${filter}`}
                className="group block"
              >
                <ImageBox src={tile.src} alt={tile.title} ratio={tile.ratio} />
                <p className="mt-3 text-center text-sm tracking-[0.06em] uppercase transition-colors duration-200 group-hover:text-oxblood group-focus-visible:text-oxblood">
                  {tile.title}
                </p>
              </Link>
            </MasonryItem>
          ))}
        </Masonry>
      </div>
    </>
  );
}

/** BACK on a creative project returns to the gallery with the filter it was opened from. */
export function CreativeBackLink() {
  const from = useSearchParams().get("from");
  return <BackLink href={isCategory(from) ? `/creative?filter=${from}` : "/creative"} />;
}

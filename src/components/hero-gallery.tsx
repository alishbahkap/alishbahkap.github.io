"use client";

import { useState } from "react";
import { ImageBox } from "./image-box";

export type HeroImage = { src?: string; alt: string; caption: string };

/**
 * The large image at the top of a project page. With several images, clicking
 * (or pressing Enter/Space on) the image steps to the next one, and the caption
 * underneath changes with it.
 */
export function HeroGallery({ images }: { images: HeroImage[] }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const current = images[index];
  const frame = <ImageBox src={current.src} alt={current.alt} ratio="aspect-[4/3] sm:aspect-[16/7]" />;

  return (
    <figure>
      {count > 1 ? (
        <button
          type="button"
          onClick={() => setIndex((index + 1) % count)}
          aria-label={`Show next image (${((index + 1) % count) + 1} of ${count})`}
          className="block w-full cursor-pointer"
        >
          {frame}
        </button>
      ) : (
        frame
      )}
      <figcaption aria-live="polite" className="mt-6 text-center text-lg">
        {current.caption}
        {count > 1 && (
          <span className="ml-4 text-sm text-muted tabular-nums">
            {index + 1} / {count}
          </span>
        )}
      </figcaption>
    </figure>
  );
}

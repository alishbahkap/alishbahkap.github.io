import Link from "next/link";

// Hover on the photo: a soft dim reads better than the oxblood accent on coffee tones.
const tone = "transition-opacity duration-200 hover:opacity-70 focus-visible:opacity-70";

/** Delay for the nth item to float in (the name is 0, the line 1, then each link). */
export const floatDelay = (step: number) => ({ animationDelay: `${250 + step * 160}ms` });

/**
 * The four home links either side of the center line, staggered down the page:
 * Engineering, Creative, About, Resume, alternating left and right.
 * Everything floats up into place in that order, after the name and the line.
 */
export function HomeNav({ resumeHref }: { resumeHref: string }) {
  const pad = "clamp(1rem,2.5vw,3rem)"; // space between the text and the line
  const left = "col-start-1 text-right";
  const right = "col-start-3 text-left";

  return (
    <nav aria-label="Main" className="mt-[clamp(2rem,7vh,5rem)] w-full max-w-4xl">
      {/* Three columns: left links | 1px line | right links. One row per link, so they step down. */}
      <div className="grid grid-cols-[1fr_1px_1fr] text-[clamp(1.25rem,3.4vw,4rem)] leading-tight font-light">
        <span aria-hidden className="float-up col-start-2 row-span-4 row-start-1 bg-current" style={floatDelay(1)} />

        <div className={`float-up row-start-1 ${left}`} style={{ ...floatDelay(2), paddingRight: pad }}>
          <Link href="/engineering" className={tone}>
            Engineering
          </Link>
        </div>
        <div className={`float-up row-start-2 ${right}`} style={{ ...floatDelay(3), paddingLeft: pad }}>
          <Link href="/creative" className={tone}>
            Creative
          </Link>
        </div>
        <div className={`float-up row-start-3 ${left}`} style={{ ...floatDelay(4), paddingRight: pad }}>
          <Link href="/about" className={tone}>
            About
          </Link>
        </div>
        <div className={`float-up row-start-4 ${right}`} style={{ ...floatDelay(5), paddingLeft: pad }}>
          <a href={resumeHref} target="_blank" rel="noopener" className={tone}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

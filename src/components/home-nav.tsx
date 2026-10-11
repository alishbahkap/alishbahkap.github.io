"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { linkTone } from "./breadcrumb-bar";

const EXIT_MS = 380; // matches .slide-in-* in globals.css
const ROW_DELAY = 90; // second row starts a beat after the first

type Side = "left" | "right";

/**
 * The four home links either side of the center line.
 *
 * Each link lives in a cell with overflow-hidden whose inner edge IS the line,
 * so sliding the link sideways hides it "behind" the line. On load the links
 * slide out; clicking an internal link slides them all back in, then navigates.
 */
export function HomeNav({ resumeHref }: { resumeHref: string }) {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  function go(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    // Let ctrl/cmd/shift/middle-click open new tabs as normal
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    event.preventDefault();
    setLeaving(true);
    setTimeout(() => router.push(href), EXIT_MS + ROW_DELAY);
  }

  // Shared cell + slider styles. `pad` is the space between the text and the line.
  const pad = "clamp(1.25rem,3.5vw,3rem)";
  const cell = (side: Side) =>
    side === "left" ? "overflow-hidden py-2 text-right" : "overflow-hidden py-2 text-left";
  const slider = (side: Side, row: number) => ({
    className: `inline-block ${
      leaving ? (side === "left" ? "slide-in-left" : "slide-in-right") : side === "left" ? "slide-out-left" : "slide-out-right"
    }`,
    style: {
      [side === "left" ? "paddingRight" : "paddingLeft"]: pad,
      animationDelay: `${(leaving ? 0 : 200) + row * ROW_DELAY}ms`,
    } as React.CSSProperties,
  });

  const internal = (side: Side, row: number, href: string, label: string) => (
    <div className={cell(side)}>
      <span {...slider(side, row)}>
        <Link href={href} onClick={(e) => go(e, href)} className={linkTone}>
          {label}
        </Link>
      </span>
    </div>
  );

  return (
    <nav aria-label="Main" className={`mt-[clamp(2.5rem,8vh,5.5rem)] w-full max-w-2xl ${leaving ? "pointer-events-none" : ""}`}>
      {/* Three columns: left links | 1px line | right links */}
      <div className="grid grid-cols-[1fr_1px_1fr] gap-y-[clamp(1rem,4vh,2.75rem)] text-[clamp(1.2rem,2.4vw,2rem)] font-light">
        {internal("left", 0, "/engineering", "Engineering")}
        <span aria-hidden className="col-start-2 row-span-2 row-start-1 bg-espresso" />
        {internal("right", 0, "/creative", "Creative")}
        {internal("left", 1, "/about", "About")}
        <div className={cell("right")}>
          <span {...slider("right", 1)}>
            <a href={resumeHref} target="_blank" rel="noopener" className={linkTone}>
              Resume
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}

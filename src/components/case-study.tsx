import { type EngineeringProject, SECTION_TITLES } from "@/content/engineering";

const ORDER = ["problem", "process", "progress", "next"] as const;

/**
 * The four numbered case-study sections, each a full-width dropdown.
 *
 * Built on the native <details>/<summary> elements: the browser handles
 * opening, closing and keyboard support, with no JavaScript needed.
 */
export function CaseStudy({ sections }: { sections: EngineeringProject["sections"] }) {
  return (
    <div className="border-t border-espresso">
      {ORDER.map((key, i) => (
        <details key={key} open={i === 0} className="group border-b border-rule">
          <summary className="flex cursor-pointer list-none items-baseline gap-5 py-7 transition-colors duration-200 hover:text-oxblood focus-visible:text-oxblood sm:gap-8 sm:py-9 [&::-webkit-details-marker]:hidden">
            <span className="text-lg text-muted tabular-nums sm:text-xl">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="flex-1 text-2xl font-light sm:text-4xl">{SECTION_TITLES[key]}</h2>
            {/* "+" that turns into "×" when the section is open */}
            <span
              aria-hidden
              className="text-3xl font-light leading-none transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>

          <div className="max-w-3xl space-y-5 pb-10 text-lg leading-relaxed text-espresso/85 sm:pl-[3.25rem] sm:text-xl">
            {sections[key].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

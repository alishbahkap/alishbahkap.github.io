import { type EngineeringProject, SECTION_TITLES } from "@/content/engineering";

const ORDER = ["problem", "process", "progress", "next"] as const;

/** The four numbered case-study sections on a project page. */
export function CaseStudy({ sections }: { sections: EngineeringProject["sections"] }) {
  return (
    <div className="mx-auto max-w-3xl bg-panel px-6 py-6 sm:px-10 sm:py-8">
      {ORDER.map((key, i) => (
        <section key={key} className="py-4">
          <h2 className="font-medium">
            {String(i + 1).padStart(2, "0")} / {SECTION_TITLES[key]}
          </h2>
          {sections[key].map((paragraph) => (
            <p key={paragraph} className="mt-2 text-[0.95rem] leading-relaxed text-espresso/80">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}

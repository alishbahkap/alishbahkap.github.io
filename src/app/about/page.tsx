import type { Metadata } from "next";
import { BackLink, BreadcrumbBar, linkTone } from "@/components/breadcrumb-bar";
import { ImageBox } from "@/components/image-box";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/content/site";
import { photo, resumeHref } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alishbah Kapadia is a Computer Engineering student at Toronto Metropolitan University, looking for internships in cloud, embedded systems, product and software.",
};

// Taken directly from the resume. Edit or extend freely.
const timeline = [
  { period: "Jul 2026 — Present", role: "Product R&D Intern", org: "TechnoBiz" },
  { period: "Aug 2024 — Present", role: "Freelance E-Commerce Developer", org: "E-Commerce & Shopify" },
  { period: "Expected May 2030", role: "B.Eng. Computer Engineering", org: "Toronto Metropolitan University" },
];

export default function About() {
  return (
    <>
      <BreadcrumbBar trail={[{ label: "About", caps: true }]} back={<BackLink href="/" />} />

      <main className="page-in mx-auto max-w-6xl px-5 pb-32 sm:px-10">
        <div className="mt-12 grid gap-12 sm:mt-16 md:grid-cols-[5fr_7fr] md:gap-16">
          <ImageBox src={photo("about-portrait")} alt="Portrait of Alishbah Kapadia" ratio="aspect-[1100/1429]" />

          <div>
            <h1 className="text-3xl font-light sm:text-4xl">Alishbah Kapadia</h1>
            <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-espresso/85">
              <p>
                I&rsquo;m a second-year Computer Engineering student at Toronto Metropolitan University, looking for
                internships in cloud (including SAP), embedded systems, product and software.
              </p>
              <p>
                I&rsquo;ve been building experience across product R&amp;D, e-commerce development, and embedded and
                full-stack projects. I&rsquo;m especially drawn to roles where I can understand how different pieces
                fit together and make them work better; &ldquo;systems&rdquo; and &ldquo;optimization&rdquo; are my
                two favourite words (in addition to &ldquo;books&rdquo; and &ldquo;coffee&rdquo;, clearly).
              </p>
            </div>

            <section className="mt-14">
              <h2 className="text-sm tracking-[0.06em] uppercase">Experience</h2>
              <ol className="mt-4">
                {timeline.map((item) => (
                  <li
                    key={item.role}
                    className="grid gap-1 border-t border-rule py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"
                  >
                    <span className="text-sm text-muted">{item.period}</span>
                    <span>
                      {item.role}
                      <span className="text-muted"> — {item.org}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-14">
              <h2 className="text-sm tracking-[0.06em] uppercase">Contact</h2>
              <ul className="mt-4 space-y-2 text-lg">
                <li>
                  <a href={`mailto:${EMAIL}`} className={linkTone}>
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a href={GITHUB_URL} className={linkTone}>
                    GitHub
                  </a>
                </li>
                {LINKEDIN_URL && (
                  <li>
                    <a href={LINKEDIN_URL} className={linkTone}>
                      LinkedIn
                    </a>
                  </li>
                )}
                <li>
                  <a href={resumeHref()} target="_blank" rel="noopener" className={linkTone}>
                    Resume
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

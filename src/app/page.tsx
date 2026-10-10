import Link from "next/link";
import { linkTone } from "@/components/breadcrumb-bar";
import { photo, resumeHref } from "@/lib/photos";

export default function Home() {
  const backdrop = photo("home");

  return (
    <div
      className="grid min-h-svh bg-espresso bg-cover bg-center p-[clamp(1rem,5vw,4.5rem)]"
      style={backdrop ? { backgroundImage: `url(${backdrop})` } : undefined}
    >
      <main className="page-in flex flex-col items-center justify-center bg-cream px-6 py-16">
        <h1 className="text-center font-display text-[clamp(3.25rem,10vw,8.5rem)] leading-none">Alishbah K.</h1>

        <nav aria-label="Main" className="mt-[clamp(2.5rem,8vh,5.5rem)] w-full max-w-2xl">
          {/* Three columns: left links | 1px divider | right links */}
          <div className="grid grid-cols-[1fr_1px_1fr] gap-x-[clamp(1.25rem,3.5vw,3rem)] gap-y-[clamp(1.5rem,5vh,3.25rem)] text-[clamp(1.2rem,2.4vw,2rem)] font-light">
            <Link href="/engineering" className={`col-start-1 row-start-1 justify-self-end ${linkTone}`}>
              Engineering
            </Link>
            <span aria-hidden className="col-start-2 row-span-2 row-start-1 -my-2 bg-espresso" />
            <Link href="/creative" className={`col-start-3 row-start-1 justify-self-start ${linkTone}`}>
              Creative
            </Link>
            <Link href="/about" className={`col-start-1 row-start-2 justify-self-end ${linkTone}`}>
              About
            </Link>
            <a
              href={resumeHref()}
              target="_blank"
              rel="noopener"
              className={`col-start-3 row-start-2 justify-self-start ${linkTone}`}
            >
              Resume
            </a>
          </div>
        </nav>
      </main>
    </div>
  );
}

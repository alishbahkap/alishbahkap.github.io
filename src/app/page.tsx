import { HomeNav } from "@/components/home-nav";
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
        <HomeNav resumeHref={resumeHref()} />
      </main>
    </div>
  );
}

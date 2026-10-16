import { floatDelay, HomeNav } from "@/components/home-nav";
import { photo, resumeHref } from "@/lib/photos";

export default function Home() {
  const backdrop = photo("home");

  return (
    <main
      className="flex min-h-svh flex-col items-center justify-center bg-espresso bg-cover bg-center px-6 py-16 text-cream [text-shadow:0_1px_14px_rgb(34_26_21/0.35)]"
      style={backdrop ? { backgroundImage: `url(${backdrop})` } : undefined}
    >
      <h1
        className="float-up text-center font-display text-[clamp(3.25rem,12.5vw,15rem)] leading-none font-bold"
        style={floatDelay(0)}
      >
        Alishbah K.
      </h1>
      <HomeNav resumeHref={resumeHref()} />
    </main>
  );
}

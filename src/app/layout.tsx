import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

// Playfair Display is used only for the name on the home page.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Outfit is the sans-serif for everything else (closest free match to Neue Einstellung).
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Alishbah Kapadia — Computer Engineering student in Toronto. Embedded and software projects, alongside creative and e-commerce work.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Alishbah K.",
    template: "%s — Alishbah K.",
  },
  description,
  openGraph: {
    title: "Alishbah K.",
    description,
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alishbah K.",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${outfit.variable} bg-cream font-sans text-espresso antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

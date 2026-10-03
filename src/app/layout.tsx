import type { Metadata, Viewport } from "next";
import { Header, Footer } from "@/components/site-shell";
import { Intro } from "@/components/ambient-interactions";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Hogwarts | A Magical Interactive Experience", template: "%s | Hogwarts" },
  description: "An unofficial interactive Hogwarts-inspired frontend experience built with Next.js, TypeScript and modern web animation.",
  openGraph: { title: "Hogwarts | A Magical Interactive Experience", description: "An unofficial fan-made invitation to explore the castle.", type: "website" },
  robots: { index: true, follow: true },
  icons: { icon: "/images/crests/hogwarts.png", apple: "/images/crests/hogwarts.png" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080d1a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><a className="skip-link" href="#main">Skip to content</a><Intro /><Header /><main id="main">{children}</main><Footer /></body></html>;
}


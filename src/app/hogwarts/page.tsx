import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/static-link";
import { ArrowUpRight, BookOpen, Flame, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site-shell";

export const metadata: Metadata = { title: "The Castle" };

export default function HogwartsPage() {
  return <><section className="page-hero castle-page-hero"><Image src="/images/castle-hero.webp" alt="A castle seen beyond a dark misty lake" fill priority sizes="100vw" /><div className="page-hero-overlay" /><div className="container page-hero-copy"><span className="eyebrow">THE CASTLE</span><h1>Some places<br /><em>stay with you.</em></h1><p>Explore the halls, towers, and unexpected turns of Hogwarts.</p></div></section>
    <section className="paper-section story-section"><div className="container story-grid"><Reveal><span className="eyebrow dark"><span className="eyebrow-line" />LIFE WITHIN THE WALLS</span><h2>A little wonder in every day.</h2></Reveal><Reveal><p>Hogwarts is a school, a home, and a place that never quite shows you everything at once. Its old stone rooms hold lessons, shared meals, and the small moments that become lasting memories.</p><p>From a quiet afternoon in the library to the first glimpse of the castle across the lake, every corner has a story waiting to be found.</p></Reveal></div></section>
    <section className="hall-section"><div className="hall-candles" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div><div className="container hall-content"><Reveal><span className="eyebrow">THE GREAT HALL</span><h2>Where every journey begins.</h2><p>Under a ceiling that seems to hold the sky, the whole school comes together. A room for first welcomes and familiar faces.</p><Link className="button button-outline" href="/explore">Explore the Great Hall <ArrowUpRight size={17} /></Link></Reveal></div></section>
    <section className="paper-section features-section"><div className="container"><Reveal><SectionHeading eyebrow="BEYOND THE CLASSROOM" title="A world to grow into." description="The castle has room for every kind of curiosity." center /></Reveal><div className="feature-grid"><Reveal><BookOpen /><h3>Learn</h3><p>Questions are just as welcome as answers. Every subject opens a new door.</p></Reveal><Reveal><Flame /><h3>Belong</h3><p>Shared rooms, long tables, and friendships make the castle feel like home.</p></Reveal><Reveal><Sparkles /><h3>Discover</h3><p>There is always another corridor, another view, another story to find.</p></Reveal></div></div></section>
  </>;
}


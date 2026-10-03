import type { Metadata } from "next";
import Link from "@/components/static-link";
import { ArrowUpRight } from "lucide-react";
import { LocationGrid } from "@/components/location-experience";
import { Reveal, SectionHeading } from "@/components/site-shell";
import { CastleMap } from "@/components/castle-map";

export const metadata: Metadata = { title: "Explore the Castle" };
export default function ExplorePage() { return <><section className="inner-page-heading explore-page-heading"><div className="container"><span className="eyebrow">AN OPEN INVITATION</span><h1>There is always<br />more to discover.</h1><p>Follow your curiosity through the rooms and grounds of Hogwarts.</p></div></section><section className="paper-section explore-page-content"><div className="container"><Reveal><SectionHeading eyebrow="PLACES & PASSAGEWAYS" title="Explore the Castle" description="Choose a place to learn what lies beyond its doors." /></Reveal><Reveal><LocationGrid /></Reveal></div></section><section className="map-section"><div className="container map-layout"><div><span className="eyebrow dark">SECRETS OF THE CASTLE</span><h2>A map for the curious.</h2><p>The castle never gives away every secret. Start with these places, then see where the path takes you.</p><Link className="inline-link" href="/hogwarts">About the castle <ArrowUpRight size={18} /></Link></div><CastleMap /></div></section></>; }



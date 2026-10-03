import type { Metadata } from "next";
import Link from "@/components/static-link";
import { ArrowUpRight } from "lucide-react";
import { HouseCards } from "@/components/house-experience";
import { Reveal } from "@/components/site-shell";

export const metadata: Metadata = { title: "The Four Houses" };
export default function HousesPage() { return <><section className="inner-page-heading houses-page-heading"><div className="container"><span className="eyebrow">FOUR WAYS TO BELONG</span><h1>Find your place<br />in the castle.</h1><p>Each house has a story of its own. Which one speaks to you?</p></div></section><section className="houses-page-content section-dark"><div className="container"><Reveal><HouseCards /></Reveal><div className="discovery-callout"><div><span className="eyebrow">A LITTLE SELF-DISCOVERY</span><h2>Wondering where you belong?</h2><p>Answer five original questions in this fan-made house discovery.</p></div><Link className="button button-gold" href="/sorting">Discover Your House <ArrowUpRight size={17} /></Link></div></div></section></>; }


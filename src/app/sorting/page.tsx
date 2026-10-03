import type { Metadata } from "next";
import { SortingExperience } from "@/components/house-experience";
export const metadata: Metadata = { title: "Fan-Made House Discovery" };
export default function SortingPage() { return <section className="sorting-page"><div className="container sorting-intro"><span className="eyebrow">FAN-MADE HOUSE DISCOVERY</span><h1>Where might<br />you belong?</h1><p>Five small choices. One path through the castle. This original quiz is made for this portfolio experience.</p><SortingExperience /></div></section>; }


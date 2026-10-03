import type { Metadata } from "next";
import { Spellbook } from "@/components/spellbook";
export const metadata: Metadata = { title: "The Spellbook" };
export default function SpellsPage() { return <><section className="inner-page-heading spells-page-heading"><div className="container"><span className="eyebrow">WORDS THAT CHANGE THINGS</span><h1>The Spellbook</h1><p>A collection of familiar incantations from the wizarding world. Find one and give it a try.</p></div></section><section className="spells-page-content paper-section"><div className="container"><Spellbook /></div></section></>; }


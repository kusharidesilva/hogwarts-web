"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { LockKeyhole, Search, WandSparkles, X } from "lucide-react";
import { spells, type Spell } from "@/data/site";

const categories = ["All spells", "Light", "Movement", "Charm", "Defense"] as const;

export function Spellbook() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All spells");
  const [active, setActive] = useState<Spell | null>(null);
  const [lit, setLit] = useState(false);
  const reduce = useReducedMotion();
  const filtered = useMemo(() => spells.filter(spell => (category === "All spells" || spell.category === category) && `${spell.name} ${spell.purpose}`.toLowerCase().includes(query.trim().toLowerCase())), [query, category]);
  function cast(spell: Spell) { setActive(spell); if (spell.effect === "lumos") setLit(true); if (spell.effect === "nox") setLit(false); }
  return <div className={`spellbook ${lit ? "spellbook-lit" : ""}`}>
    <div className="spell-controls"><label className="spell-search"><Search size={19} /><span className="sr-only">Search spells</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search spells" /></label><div className="spell-categories" aria-label="Filter spells by category">{categories.map(item => <button type="button" key={item} className={category === item ? "selected" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
    <div className="spell-results" aria-live="polite">{filtered.length} {filtered.length === 1 ? "spell" : "spells"}</div>
    <motion.div layout className="spell-grid"><AnimatePresence mode="popLayout">{filtered.map(spell => <motion.button layout key={spell.name} type="button" className={`spell-card ${active?.name === spell.name ? "cast" : ""}`} onClick={() => cast(spell)} initial={reduce ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} transition={{ duration: .22 }}><span className="spell-card-top"><span>{spell.category}</span><WandSparkles size={20} strokeWidth={1.4} /></span><strong>{spell.name}</strong><span className="spell-purpose">{spell.purpose}</span><span className="spell-cast">Cast spell <span aria-hidden="true">↗</span></span></motion.button>)}</AnimatePresence></motion.div>
    {filtered.length === 0 && <div className="no-spells"><p>No spells match that search.</p><button type="button" className="inline-link" onClick={() => { setQuery(""); setCategory("All spells"); }}>Clear filters</button></div>}
    <div className={`spell-stage ${active?.effect ?? ""}`} aria-live="polite"><div className="spell-stage-visual" aria-hidden="true"><span className="stage-orbit" /><span className="stage-light" /><span className="stage-feather" /><span className="stage-object" /><LockKeyhole className="stage-lock" strokeWidth={1} /><span className="stage-wand" /></div><div><span className="eyebrow">SPELL EFFECT</span><h2>{active ? active.name : "Try a spell"}</h2><p>{active ? active.purpose : "Choose a spell above to see a small visual effect."}</p></div>{active && <button type="button" className="icon-button stage-clear" aria-label="Clear spell effect" onClick={() => { setActive(null); setLit(false); }}><X size={19} /></button>}</div>
  </div>;
}


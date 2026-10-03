"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BookOpen, Castle, ChevronRight, FlaskConical, Leaf, LockKeyhole, Map, Telescope, Trees, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { locations, type Location } from "@/data/site";

const icons = { hall: Castle, book: BookOpen, tower: Telescope, flask: FlaskConical, leaf: Leaf, broom: Map, stairs: ChevronRight, forest: Trees };

export function LocationGrid({ limit }: { limit?: number }) {
  const [selected, setSelected] = useState<Location | null>(null);
  const close = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!selected) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    close.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "Tab") { const focusable = document.querySelectorAll<HTMLElement>(".location-modal a, .location-modal button"); if (focusable.length) { const first = focusable[0], last = focusable[focusable.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } } }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", onKey); opener.current?.focus(); };
  }, [selected]);
  return <><div className="location-grid">{locations.slice(0, limit).map((location, index) => { const Icon = icons[location.icon]; return <button key={location.id} type="button" className={`location-card location-${location.icon}`} onClick={event => { opener.current = event.currentTarget; setSelected(location); }}><span className="location-visual"><Icon aria-hidden="true" strokeWidth={.8} /><span className="location-glow" /></span><span className="location-content"><span className="location-number">0{index + 1} / 0{locations.length}</span><strong>{location.name}</strong><span>{location.description}</span><span className="location-action">Explore location <ArrowUpRight size={16} /></span></span></button>; })}</div>
  <AnimatePresence>{selected && <motion.div className="modal-backdrop" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={event => { if (event.target === event.currentTarget) setSelected(null); }}><motion.div className={`location-modal location-${selected.icon}`} role="dialog" aria-modal="true" aria-labelledby="location-title" initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 14 }} transition={{ duration: .25 }}><button ref={close} type="button" className="modal-close icon-button" aria-label="Close location" onClick={() => setSelected(null)}><X size={22} /></button><div className="modal-art">{(() => { const Icon = icons[selected.icon]; return <Icon strokeWidth={.65} />; })()}</div><div className="modal-copy"><span className="eyebrow">EXPLORE THE CASTLE</span><h2 id="location-title">{selected.name}</h2><p>{selected.detail}</p><div className="modal-fact"><LockKeyhole size={17} /><span>{selected.fact}</span></div></div></motion.div></motion.div>}</AnimatePresence></>;
}


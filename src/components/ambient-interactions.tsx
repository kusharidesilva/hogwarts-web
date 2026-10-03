"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

export function HeroParallax() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero || !window.matchMedia("(pointer:fine) and (prefers-reduced-motion:no-preference)").matches) return;
    const onMove = (event: PointerEvent) => {
      const box = hero.getBoundingClientRect();
      hero.style.setProperty("--parallax-x", `${((event.clientX - box.left) / box.width - .5) * 12}px`);
      hero.style.setProperty("--parallax-y", `${((event.clientY - box.top) / box.height - .5) * 9}px`);
    };
    const onLeave = () => { hero.style.setProperty("--parallax-x", "0px"); hero.style.setProperty("--parallax-y", "0px"); };
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => { hero.removeEventListener("pointermove", onMove); hero.removeEventListener("pointerleave", onLeave); };
  }, []);
  return null;
}

export function Intro() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (sessionStorage.getItem("hogwarts-intro-seen") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const show = window.setTimeout(() => setVisible(true), 0);
    const hide = window.setTimeout(() => { setVisible(false); sessionStorage.setItem("hogwarts-intro-seen", "1"); }, 950);
    return () => { window.clearTimeout(show); window.clearTimeout(hide); };
  }, []);
  if (!visible || reduce) return null;
  return <div className="intro-overlay" aria-hidden="true"><span className="intro-point" /><span>HOGWARTS</span></div>;
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  return <motion.div key={pathname} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .38 }}>{children}</motion.div>;
}

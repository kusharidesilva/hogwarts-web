"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "@/components/static-link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/hogwarts", label: "Hogwarts" },
  { href: "/houses", label: "Houses" },
  { href: "/explore", label: "Explore" },
  { href: "/spells", label: "Spells" },
];

export function Crest({ small = false }: { small?: boolean }) {
  return <span className={`brand-mark ${small ? "brand-mark-small" : ""}`} aria-hidden="true"><Image src="/images/crests/hogwarts.png" alt="" width={44} height={52} /></span>;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        const dialog = document.getElementById("mobile-navigation");
        const focusable = dialog?.querySelectorAll<HTMLElement>("a, button");
        if (!focusable?.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    const trigger = triggerRef.current;
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", onKey); trigger?.focus(); };
  }, [open]);

  return <>
    <header className={`site-header ${scrolled || pathname !== "/" ? "is-scrolled" : ""}`}>
      <nav className="nav-inner container" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Hogwarts home"><Crest /><span>HOGWARTS<small>AN INTERACTIVE JOURNEY</small></span></Link>
        <div className="desktop-nav">{links.map(link => <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : ""} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}</div>
        <Link className="nav-cta" href="/hogwarts">Enter Hogwarts <ArrowUpRight size={15} /></Link>
        <button ref={triggerRef} className="menu-trigger icon-button" type="button" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}><Menu size={24} /></button>
      </nav>
    </header>
    <AnimatePresence>
      {open && <motion.div id="mobile-navigation" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .25 }}>
        <div className="mobile-menu-top"><Link href="/" className="brand" onClick={() => setOpen(false)}><Crest small /><span>HOGWARTS</span></Link><button ref={closeRef} className="icon-button" type="button" aria-label="Close menu" onClick={() => setOpen(false)}><X size={26} /></button></div>
        <nav aria-label="Mobile navigation">{links.map((link, i) => <motion.div key={link.href} initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .05 }}><Link href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined}><span>0{i + 1}</span>{link.label}<ArrowUpRight size={21} /></Link></motion.div>)}</nav>
        <p>Every path begins somewhere.</p>
      </motion.div>}
    </AnimatePresence>
  </>;
}

export function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    const refreshYear = () => setYear(new Date().getFullYear());
    refreshYear();
    const timer = window.setInterval(refreshYear, 60 * 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);
  return <footer className="footer"><div className="container footer-main"><div><Link href="/" className="brand"><Crest /><span>HOGWARTS<small>AN INTERACTIVE JOURNEY</small></span></Link><p>A place for curiosity, courage, and every path between.</p></div><nav aria-label="Footer navigation">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav></div><div className="container footer-bottom"><p>© {year} Hogwarts Interactive Journey.</p><a href="#top">Back to top ↑</a></div></footer>;
}

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .65, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

export function SectionHeading({ eyebrow, title, description, center = false }: { eyebrow: string; title: string; description?: string; center?: boolean }) {
  return <div className={`section-heading ${center ? "center" : ""}`}><span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}


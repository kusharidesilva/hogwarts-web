import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/static-link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { houseCrestSrc, houses } from "@/data/site";

export function generateStaticParams() { return houses.map(house => ({ house: house.id })); }
export async function generateMetadata({ params }: { params: Promise<{ house: string }> }): Promise<Metadata> { const { house } = await params; const found = houses.find(item => item.id === house); return { title: found?.name ?? "House" }; }
export default async function HousePage({ params }: { params: Promise<{ house: string }> }) {
  const { house: id } = await params;
  const house = houses.find(item => item.id === id);
  if (!house) notFound();
  return <><section className={`house-detail-hero house-${house.id}`}><div className="container"><Link href="/houses" className="back-link"><ArrowLeft size={17} /> All houses</Link><div className="house-detail-title"><div><span className="eyebrow">THE FOUR HOUSES / {house.symbol.toUpperCase()}</span><h1>{house.name}</h1><p>{house.description}</p></div><span className="detail-emblem" aria-hidden="true"><Image src={houseCrestSrc[house.id]} alt="" width={250} height={300} /></span></div></div></section><section className="paper-section house-detail-body"><div className="container detail-grid"><div><span className="eyebrow dark">THE HOUSE STORY</span><h2>A place for {house.traits[0].toLowerCase()}.</h2><p>{house.history}</p><Link className="inline-link" href="/sorting">Discover your house <ArrowUpRight size={18} /></Link></div><div className="detail-facts"><div><span>FOUNDED BY</span><strong>{house.founder}</strong></div><div><span>HOUSE COLORS</span><strong>{house.colors}</strong></div><div><span>CORE VALUES</span><strong>{house.traits.join(" · ")}</strong></div><div><span>COMMON ROOM</span><strong>{house.commonRoom}</strong></div><div><span>NOTABLE MEMBERS</span><strong>{house.notable.join(" · ")}</strong></div></div></div></section></>;
}


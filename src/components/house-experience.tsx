"use client";

import { useState } from "react";
import Link from "@/components/static-link";
import { ArrowRight, ArrowUpRight, Crown, Feather, Heart, Shield } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { houses, sortingQuestions, type HouseId } from "@/data/site";

const icons = { gryffindor: Shield, slytherin: Crown, ravenclaw: Feather, hufflepuff: Heart };

export function HouseCards({ compact = false }: { compact?: boolean }) {
  return <div className={`house-grid ${compact ? "house-grid-compact" : ""}`}>{houses.map((house, index) => { const Icon = icons[house.id]; return <Link href={`/houses/${house.id}/`} className={`house-card house-${house.id}`} key={house.id}><span className="house-card-top"><span>0{index + 1} / 04</span><ArrowUpRight size={19} /></span><span className="house-emblem"><Icon size={46} strokeWidth={1} /><small>{house.symbol}</small></span><span className="house-card-body"><span className="house-rule" /><strong>{house.name}</strong><span>{house.description}</span><span className="house-traits">{house.traits.join(" · ")}</span></span></Link>; })}</div>;
}

export function SortingExperience() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<HouseId[]>([]);
  const reduce = useReducedMotion();
  const complete = answers.length === sortingQuestions.length;
  const counts = houses.map((house, order) => ({ id: house.id, score: answers.filter(answer => answer === house.id).length, order }));
  const result = [...counts].sort((a, b) => b.score - a.score || a.order - b.order)[0];
  const house = houses.find(item => item.id === result.id)!;
  const Icon = icons[house.id];
  const choose = (value: HouseId) => { setAnswers(current => [...current, value]); setIndex(current => Math.min(current + 1, sortingQuestions.length - 1)); };
  const reset = () => { setAnswers([]); setIndex(0); };

  return <div className={`sorting-panel ${complete ? `house-${house.id}` : ""}`}>
    {!complete ? <><div className="sorting-progress"><span>QUESTION 0{index + 1} / 0{sortingQuestions.length}</span><span>{Math.round(index / sortingQuestions.length * 100)}% COMPLETE</span></div><div className="sorting-progress-track"><span style={{ width: `${index / sortingQuestions.length * 100}%` }} /></div><motion.div key={index} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }}><h2>{sortingQuestions[index].prompt}</h2><div className="answer-grid">{sortingQuestions[index].answers.map(answer => <button type="button" key={answer.label} onClick={() => choose(answer.house)}>{answer.label}<ArrowRight size={17} /></button>)}</div></motion.div>{index > 0 && <button className="text-button" type="button" onClick={() => { setAnswers(current => current.slice(0, -1)); setIndex(current => current - 1); }}>← Previous question</button>}</> : <motion.div className="sorting-result" initial={reduce ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5 }}><span className="eyebrow">YOUR PATH LEADS TO...</span><span className="result-icon"><Icon size={58} strokeWidth={.9} /></span><h2>{house.name}</h2><p>{house.description}</p><div className="result-actions"><Link className="button button-gold" href={`/houses/${house.id}/`}>Explore your house <ArrowUpRight size={17} /></Link><button type="button" className="button button-outline" onClick={reset}>Try again</button></div><small>Fan-made discovery for this portfolio experience.</small></motion.div>}
  </div>;
}


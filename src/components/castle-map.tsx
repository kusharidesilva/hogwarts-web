"use client";

import { useState } from "react";

const markers = [
  { id: "hall", name: "Great Hall", note: "Where the school comes together." },
  { id: "library", name: "Library", note: "A quiet place for unexpected answers." },
  { id: "tower", name: "Astronomy Tower", note: "A closer look at the night sky." },
  { id: "grounds", name: "Grounds", note: "The castle from another point of view." },
] as const;

export function CastleMap() {
  const [selected, setSelected] = useState<(typeof markers)[number]>(markers[0]);
  return <div className="castle-map"><div className="map-path" aria-hidden="true" /><span className="map-tower map-tower-one" aria-hidden="true" /><span className="map-tower map-tower-two" aria-hidden="true" /><span className="map-tower map-tower-three" aria-hidden="true" />{markers.map(marker => <button key={marker.id} type="button" className={`map-marker marker-${marker.id} ${selected.id === marker.id ? "selected" : ""}`} aria-pressed={selected.id === marker.id} onClick={() => setSelected(marker)}>{marker.name}</button>)}<p className="map-note" aria-live="polite"><strong>{selected.name}</strong><span>{selected.note}</span></p></div>;
}

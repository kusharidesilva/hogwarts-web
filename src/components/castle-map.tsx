"use client";

import { useState } from "react";

const markers = [
  { id: "hall", name: "Great Hall", note: "The heart of the castle, reached through the main courtyard.", x: 50, y: 57, route: "M348 511 C385 477 423 455 450 431 L450 342" },
  { id: "library", name: "Library", note: "Follow the eastern gallery past the cloisters and quiet study rooms.", x: 64, y: 58, route: "M348 511 C385 477 423 455 450 431 L450 390 C495 363 528 348 576 348" },
  { id: "tower", name: "Astronomy Tower", note: "Climb beyond the north court for the clearest view of the stars.", x: 60, y: 20, route: "M348 511 C385 477 423 455 450 431 L450 390 C480 333 516 235 540 120" },
  { id: "grounds", name: "Grounds", note: "Take the stone path beyond the gates toward the lake and gardens.", x: 22, y: 74, route: "M348 511 C310 496 253 481 198 444" },
] as const;

const trees = [[95,110],[130,78],[160,126],[198,85],[235,125],[115,160],[76,200],[150,215],[213,195],[113,275],[70,320],[154,330],[226,290],[101,390],[752,90],[790,126],[835,84],[740,165],[817,197],[859,250],[777,269],[821,341],[755,363],[850,400],[770,453],[685,499],[728,527],[809,515]] as const;

export function CastleMap() {
  const [selected, setSelected] = useState<(typeof markers)[number]>(markers[0]);
  return <div className="map-panel">
    <div className="map-panel-heading"><span>THE CASTLE &amp; GROUNDS</span><span>ILLUSTRATED FIELD MAP · 01</span></div>
    <div className="map-scroll" aria-label="Illustrated map of Hogwarts castle and grounds"><div className="castle-map">
      <svg className="map-illustration" viewBox="0 0 900 600" role="img" aria-label="Castle map showing towers, courtyard, gatehouse, lake, forest, and paths">
        <defs>
          <pattern id="map-grain" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="4" cy="6" r=".7" fill="#7d6749" opacity=".24"/><circle cx="21" cy="20" r=".6" fill="#7d6749" opacity=".18"/></pattern>
          <pattern id="map-water" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M1 12q5-4 10 0t10 0" fill="none" stroke="#779199" strokeWidth="1" opacity=".4"/></pattern>
          <pattern id="map-roof" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M0 14L14 0M-7 7L7-7M7 21L21 7" stroke="#9b7853" strokeWidth="1" opacity=".3"/></pattern>
          <g id="map-tree"><path d="M0 12v10" stroke="#4f5947" strokeWidth="2"/><path d="M0-18l-13 20h7l-10 11h32L6 2h7Z" fill="#71816a" stroke="#4c5b4e" strokeWidth="2"/><path d="M0-13L-7 1M0-13L8 2" fill="none" stroke="#b7ba8f" strokeWidth="1" opacity=".7"/></g>
          <g id="map-turret"><circle r="31" fill="#b9aa89" stroke="#564d43" strokeWidth="4"/><circle r="23" fill="url(#map-roof)" stroke="#866b52" strokeWidth="2"/><path d="M0-20L18 17H-18Z" fill="#7a5960" stroke="#544246" strokeWidth="2"/><circle r="4" fill="#d8b971"/></g>
        </defs>
        <rect width="900" height="600" fill="#d6c6a3"/><rect width="900" height="600" fill="url(#map-grain)"/>
        <path d="M-30 474C63 428 92 437 133 465c44 30 54 78 117 77 49-1 54-59 116-42 65 18 82 80 172 90H-30Z" fill="#acc0b7" stroke="#718b8a" strokeWidth="3"/>
        <path d="M-30 474C63 428 92 437 133 465c44 30 54 78 117 77 49-1 54-59 116-42 65 18 82 80 172 90H-30Z" fill="url(#map-water)"/>
        <path d="M-20 458C57 423 112 432 151 463c55 44 92 78 156 39" fill="none" stroke="#f0e5c9" strokeWidth="11" opacity=".55"/>
        <path d="M-20 160C60 121 124 112 257 161M-15 191C72 153 154 143 255 188M-12 232C85 185 166 179 254 221M720 35C801 9 864 32 930 61M714 59C801 35 861 53 930 82M735 390C825 367 862 385 920 415M726 418C822 397 865 415 920 445" fill="none" stroke="#977e5f" strokeWidth="2" opacity=".23"/>
        <path d="M76 415C144 386 179 372 222 372c52 1 97 27 127 75M79 428C138 401 179 387 221 387c53 0 90 27 113 71M678 487C721 456 770 451 856 477M691 508C746 473 785 474 866 499" fill="none" stroke="#766b51" strokeWidth="2" opacity=".45"/>
        <g opacity=".87">{trees.map(([x,y],index) => <use key={`${x}-${y}`} href="#map-tree" transform={`translate(${x} ${y}) scale(${index%4===0?1.25:index%3===0?.85:1})`}/>)}</g>
        <path d="M301 553C327 520 343 493 353 471c19-44 27-74 77-98M283 540C316 497 329 476 337 449c19-62 44-80 93-99" fill="none" stroke="#9d845d" strokeWidth="19" opacity=".25"/>
        <path d="M301 553C327 520 343 493 353 471c19-44 27-74 77-98" fill="none" stroke="#f0e2be" strokeWidth="8" strokeDasharray="2 9" strokeLinecap="round"/>
        <path d="M353 471C308 442 266 433 197 445M430 372C504 356 556 318 624 281M446 366C470 294 497 220 537 132" fill="none" stroke="#a1855e" strokeWidth="10" opacity=".26"/>
        <path d="M353 471C308 442 266 433 197 445M430 372C504 356 556 318 624 281M446 366C470 294 497 220 537 132" fill="none" stroke="#f1e2be" strokeWidth="4" strokeDasharray="2 9" strokeLinecap="round"/>
        <g className="map-castle-shape">
          <path d="M316 421L303 334l37-14-11-85 47-6 10-53 72-10 17-59 70 9 6 72 54 9 20 65 46 13 8 89-37 11-13 61-63-9-33 24-66-11-38 27-38-33Z" fill="#ad9980" stroke="#574b43" strokeWidth="6"/>
          <path d="M334 386l-8-51 39-10-12-76 49-7 9-49 57-8 13-51 42 7 7 62 48 9 16 61 48 7 7 55-39 10-11 57-51-7-39 25-54-11-43 26-30-35Z" fill="#e6d3ad" stroke="#69584c" strokeWidth="3"/>
          <path d="M374 242l36-12 24 95-46 17ZM464 185l58-4 11 79-58 8ZM543 240l47 2 9 75-59-3ZM370 351l64-17 30 52-68 25ZM510 333l89-6-7 61-82 12Z" fill="url(#map-roof)" stroke="#75604e" strokeWidth="4"/>
          <path d="M394 263l15 55M482 201l8 50M562 258l8 45M389 366l57 18M525 351l56-8" stroke="#8a705a" strokeWidth="3" opacity=".7"/>
          <path d="M438 276l80-10 13 50-71 25-23-18Z" fill="#c7b597" stroke="#6a594d" strokeWidth="4"/>
          <path d="M456 289l52-8 8 26-48 17-12-16Z" fill="#d8c6a3" stroke="#87725b" strokeWidth="2"/>
          <path d="M450 342l49-17 20 75-45 17Z" fill="#946e5d" stroke="#57483f" strokeWidth="4"/>
          <path d="M459 349l32-11 15 54-33 12Z" fill="#aa8770" stroke="#d2b593" strokeWidth="2"/>
          <path d="M345 408l84-34 29 46-76 31Z" fill="#8e6d60" stroke="#51483f" strokeWidth="4"/>
          <path d="M364 412l60-22M373 428l58-22" stroke="#c7a681" strokeWidth="2"/>
          <path d="M442 412l10 31h46l10-32M449 427c20-13 34-14 51 0" fill="none" stroke="#574b43" strokeWidth="5"/>
          <use href="#map-turret" transform="translate(365 238) scale(.8)"/><use href="#map-turret" transform="translate(539 124) scale(1.12)"/><use href="#map-turret" transform="translate(625 279) scale(.85)"/><use href="#map-turret" transform="translate(331 337) scale(.72)"/><use href="#map-turret" transform="translate(594 390) scale(.67)"/>
          <path d="M435 455q-50 15-85 6l-19 27 33 9 54-24Z" fill="#8b795e" stroke="#625441" strokeWidth="3"/>
        </g>
        <g fill="none" stroke="#737d61" strokeWidth="2" opacity=".78"><circle cx="208" cy="442" r="36"/><circle cx="208" cy="442" r="23"/><path d="M208 406v72M172 442h72M182 416l52 52M234 416l-52 52"/><circle cx="208" cy="442" r="6" fill="#829171"/></g>
        <path d="M130 485q48-12 103 9M79 507q54-8 104 5M49 530q32-8 76-2" fill="none" stroke="#5f7981" strokeWidth="2" opacity=".7"/>
        <g className="map-compass" transform="translate(775 100)"><circle r="44" fill="#d9c9a5" stroke="#8b7556" strokeWidth="2"/><circle r="37" fill="none" stroke="#8b7556" strokeWidth="1"/><path d="M0-32L7-7 32 0 7 7 0 32-7 7-32 0-7-7Z" fill="#987350" stroke="#564b44" strokeWidth="1"/><path d="M0-32L-7-7 0 0Z" fill="#5e6e73"/><text y="-52" textAnchor="middle">N</text></g>
        <g className="map-ink-labels"><text x="84" y="255" transform="rotate(-8 84 255)">THE FORBIDDEN FOREST</text><text x="70" y="565" transform="rotate(-8 70 565)">THE BLACK LAKE</text><text x="398" y="85">NORTH COURT</text><text x="432" y="475">MAIN GATE</text><text x="650" y="440" transform="rotate(-10 650 440)">THE EASTERN GARDENS</text></g>
        <path className="enchanted-route" key={selected.id} d={selected.route} fill="none" stroke="#f2cf80" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 13"/>
        <circle className="route-origin" cx="348" cy="511" r="5" fill="#f2cf80"/><circle className="route-destination" key={`${selected.id}-end`} cx={selected.x*9} cy={selected.y*6} r="8" fill="#f2cf80"/>
      </svg>
      {markers.map(marker => <button key={marker.id} type="button" className={`map-marker marker-${marker.id} ${selected.id===marker.id?"selected":""}`} style={{left:`${marker.x}%`,top:`${marker.y}%`}} aria-pressed={selected.id===marker.id} onClick={() => setSelected(marker)}><span className="map-pin" aria-hidden="true">✦</span><span>{marker.name}</span></button>)}
    </div></div>
    <div className="map-panel-bottom"><p className="map-note" aria-live="polite"><span className="map-note-icon" aria-hidden="true">✦</span><span><strong>{selected.name}</strong><span>{selected.note}</span></span></p><span className="map-mobile-hint">DRAG TO EXPLORE THE MAP</span></div>
  </div>;
}

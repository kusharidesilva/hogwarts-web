"use client";
export default function ErrorPage({ reset }: { error: Error; reset: () => void }) { return <section className="error-page min-h-screen grid place-items-center text-center px-6 py-36"><div><span className="eyebrow">A MOMENTARY DETOUR</span><h1>That path closed unexpectedly.</h1><p>Please try opening it again.</p><button className="button button-gold" onClick={reset}>Try again</button></div></section>; }


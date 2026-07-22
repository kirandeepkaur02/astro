import React from 'react'
import {ArrowRight } from "lucide-react";
const Blog = () => {

  const posts = [
  { cat: "Horoscope", title: "Venus enters Leo: what your love life is about to feel", time: "6 min read" },
  { cat: "Numerology", title: "The hidden meaning of your life-path number in 2026", time: "8 min read" },
  { cat: "Remedies", title: "5 evening rituals to balance a heavy Saturn", time: "5 min read" },
];

  return (
    <div className="relative py-20 sm:py-28">
       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle align="left" eyebrow="From the journal" title="Latest cosmic reads" />
          <button variant="goldOutline" className="rounded-full flex items-center gap-2  bg-transparent px-5 py-2 text-orange-400 font-medium border border-orange-400 transition">
            All articles <ArrowRight className="h-4 w-4" />
          </button>
        </div>
         <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group glass overflow-hidden rounded-3xl">
              <div className="relative aspect-4/3 overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at 30% 20%, rgba(251,191,36,0.35), transparent 60%), linear-gradient(135deg, #4C1D95, #0F172A)",
                  }}
                />
                <span className="absolute left-4 top-4 rounded-full border  bg-black/40 px-3 py-1 text-[10px] uppercase tracking-widest text-yellow-400 backdrop-blur">
                  {p.cat}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-amber-100  font-semibold leading-snug">
                  {p.title}
                </h3>
                <div className="mt-4 flex items-center justify-between text-xs text-white/50">
                  <span>Celestia Editors</span>
                  <span>{p.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
       </div>
    </div>
  )
}
const SectionTitle = ({
  eyebrow,
  title,
  desc,
  align = "center",
}) => {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-2 font-serif text-white text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {desc && (
        <p className="mt-4 text-base leading-7 text-white/70">
          {desc}
        </p>
      )}
    </div>
  );
};
export default Blog
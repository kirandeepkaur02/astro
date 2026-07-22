import React from 'react'
import {ArrowRight } from "lucide-react";
import virgo from "../assets/signs/virgo.png";
import libra from "../assets/signs/libra.png";
import scorpio from "../assets/signs/scorpio.png";
import sagittarius from "../assets/signs/sagittarius.png";
import capricorn from "../assets/signs/capricorn.png";
import aquarius from "../assets/signs/aquarius.png";
import pisces from "../assets/signs/pisces.png";
import aries from "../assets/signs/aries.png";
import taurus from "../assets/signs/taurus.png";
import gemini from "../assets/signs/gemini.png";
import leo from "../assets/signs/leo.png";
import cancer from "../assets/signs/cancer.png";


const ZodiacGrid = () => {

const zodiacs = [
  { name: "Aries", image: aries, date: "Mar 21 – Apr 19" },
  { name: "Taurus", image: taurus, date: "Apr 20 – May 20" },
  { name: "Gemini", image: gemini, date: "May 21 – Jun 20" },
  { name: "Cancer", image: cancer, date: "Jun 21 – Jul 22" },
  { name: "Leo", image: leo, date: "Jul 23 – Aug 22" },
  { name: "Virgo", image: virgo, date: "Aug 23 – Sep 22" },
  { name: "Libra", image: libra, date: "Sep 23 – Oct 22" },
  { name: "Scorpio", image: scorpio, date: "Oct 23 – Nov 21" },
  { name: "Sagittarius", image: sagittarius, date: "Nov 22 – Dec 21" },
  { name: "Capricorn", image: capricorn, date: "Dec 22 – Jan 19" },
  { name: "Aquarius", image: aquarius, date: "Jan 20 – Feb 18" },
  { name: "Pisces", image: pisces, date: "Feb 19 – Mar 20" },
];


  return (
    <div id="zodiac" className="relative py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
          eyebrow="Your Sign"
          title="Explore the 12 Zodiac Signs"
          desc="Tap your sign for daily, weekly, monthly and yearly forecasts curated by expert astrologers."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {zodiacs.map((z) => (
            <button
              key={z.name}
              className="group cosmic-card bg-white/15 backdrop:blur gradient-border-gold relative overflow-hidden rounded-2xl p-5 text-left transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-full gradient-cosmic text-2xl text-[color:var(--gold)] shadow-[var(--shadow-cosmic)] transition-transform group-hover:scale-110">
                <img
    src={z.image}
    alt={z.name}
    className="h-10 w-10 object-contain"
  />
              </div>
              <div className="font-serif text-lg text-amber-50 font-semibold">
                {z.name}
              </div>
              <div className="mt-1 text-xs text-white/50">{z.date}</div>
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-orange-400 opacity-0 transition-opacity group-hover:opacity-100">
                Read forecast <ArrowRight className="h-3 w-3" />
              </div>
            </button>
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
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
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
export default ZodiacGrid
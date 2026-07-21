import React from 'react'
import {ArrowRight,Sparkles, Heart,Gem ,BadgeCheck,Coins,ShieldCheck,Brain ,Flame , Moon } from "lucide-react";

const Services = () => {
  
const services = [
  { name: "Birth Chart (Kundli)", icon: Sparkles, desc: "Vedic natal analysis with precision." },
  { name: "Kundli Matching", icon: Heart, desc: "Guna Milan for lasting bonds." },
  { name: "Love Compatibility", icon: Heart, desc: "Synastry and Venus insights." },
  { name: "Marriage Prediction", icon: Gem, desc: "Timing, spouse profile, remedies." },
  { name: "Career Astrology", icon: BadgeCheck, desc: "10th house & Dashas mapped." },
  { name: "Finance Prediction", icon: Coins, desc: "Wealth, investments, growth." },
  { name: "Health Astrology", icon: ShieldCheck, desc: "Mind & body forecasts." },
  { name: "Numerology", icon: Brain, desc: "Personal & business numbers." },
  { name: "Tarot Reading", icon: Sparkles, desc: "Live spreads with intuition." },
  { name: "Gemstone", icon: Gem, desc: "Rashi ratna recommendation." },
  { name: "Mangal Dosha", icon: Flame, desc: "Cause, effect, remedies." },
  { name: "Vastu Consult", icon: Moon, desc: "Home & office energy audit." },
];

  return (
    <div id="services" className="relative py-20 sm:py-28">
     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Premium Services"
          title="Everything the stars can tell you"
          desc="A complete cosmic toolkit — from birth charts and doshas to tarot and gemstones."
        />
        
         <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <a
              key={s.name}
              href="#"
              className="group glass relative overflow-hidden rounded-2xl border border-yellow-400/5  p-6 transition-all hover:-translate-y-1 hover:border-yellow-400 hover:bg-white/[0.06]"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[color:var(--cosmic)]/30 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl gradient-cosmic text-yellow-400 shadow-[var(--shadow-cosmic)]">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg text-white font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-yellow-400">
                Book now <ArrowRight className="h-3 w-3" />
              </div>
            </a>
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
export default Services
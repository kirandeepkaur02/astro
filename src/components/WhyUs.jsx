import React from 'react'
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles, Heart } from "lucide-react";


const WhyUs = () => {

  const items = [
    { icon: BadgeCheck, title: "Verified Experts", desc: "1,200+ background-checked astrologers." },
    { icon: ShieldCheck, title: "Private & Secure", desc: "End-to-end encrypted consultations." },
    { icon: Sparkles, title: "Accurate Reports", desc: "Sidereal engine used by 6M+ users." },
    { icon: Heart, title: "24×7 Available", desc: "Talk instantly, anytime, anywhere." },
  ];

  return (
    <div className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass gradient-border-gold rounded-3xl p-8 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <SectionTitle
              align="left"
              eyebrow="Why Celestia"
              title="A luxury astrology platform, without the noise."
              desc="Precision Vedic calculations meet a modern, calm interface — so guidance actually reaches you."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((i) => (
                <div key={i.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-amber-300 hover:shadow-amber-50">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-yellow-400 text-[color:var(--midnight)]">
                    <i.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-serif text-white  text-base font-semibold">{i.title}</h4>
                    <p className="mt-1 text-sm text-white/60">{i.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"
        }`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
          {eyebrow}
        </span>
      )}
      <div className="max-w-xl">
        <h2 className="mt-2  font-serif text-white text-3xl font-bold leading-13 sm:text-4xl lg:text-5xl">
          {title}
        </h2>

      </div>

      {desc && (
        <p className="mt-4 text-base leading-7 text-white/70">
          {desc}
        </p>
      )}
    </div>
  );
};
export default WhyUs
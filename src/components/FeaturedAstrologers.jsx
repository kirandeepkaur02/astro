import React from 'react'
import {
  ArrowRight,
    BadgeCheck,
  Brain,
  Coins,
  Flame,
  Gem,
  Heart,
  Languages,
  MessageCircle,
  Moon,
  Phone,
  Quote,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Sunrise,
  Sunset,
  Video,
} from "lucide-react";

const FeaturedAstrologers = () => {

  const astrologers = [
    {
      name: "Acharya Ravi Sharma",
      skill: "Vedic · Kundli · KP",
      rating: 4.9,
      exp: 22,
      price: 45,
      langs: "Hindi · English",
      initials: "RS",
    },
    {
      name: "Dr. Meera Kapoor",
      skill: "Tarot · Numerology",
      rating: 4.8,
      exp: 15,
      price: 38,
      langs: "English · Punjabi",
      initials: "MK",
    },
    {
      name: "Pandit Anirudh Iyer",
      skill: "Nadi · Prashna",
      rating: 5.0,
      exp: 30,
      price: 60,
      langs: "Tamil · English",
      initials: "AI",
    },
    {
      name: "Guru Sneha Verma",
      skill: "Vastu · Remedies",
      rating: 4.9,
      exp: 18,
      price: 42,
      langs: "Hindi · Marathi",
      initials: "SV",
    },
  ];



  return (
    <div className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="flex flex-wrap items-end justify-between gap-6">
           <SectionTitle
            align="left"
            eyebrow="Live now"
            title="Featured Astrologers"
            desc="Verified experts. Talk, chat or video call in seconds."
          />
          <button className="rounded-full flex items-center gap-2  bg-transparent px-5 py-2 text-yellow-400 font-medium border border-yellow-400 transition">
            View all <ArrowRight className="h-4 w-4" />
          </button>
       </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
           {astrologers.map((a) => (
            <article
              key={a.name}
              className="glass group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-transform hover:-translate-y-1"
            >
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online
              </span>
              <div className="relative mx-auto mb-4">

                <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-yellow-400" />
                <div className="grid h-24 w-24 place-items-center rounded-full bg-purple-950 font-serif text-2xl font-bold text-yellow-400 shadow-[var(--shadow-cosmic)]">
                  {a.initials}
                </div>
              </div>
              <h3 className="text-center font-serif text-white text-lg font-semibold">
                {a.name}
              </h3>
              <div className="mt-1 text-center text-xs text-white/60">{a.skill}</div>
              <div className="mt-3 flex items-center justify-center gap-1 text-sm text-yellow-400">
                <Star className="h-3.5 w-3.5 fill-yellow-400 " /> {a.rating}
                <span className="mx-2 h-3 w-px bg-white/20" />
                <span className="text-white/70">{a.exp} yrs</span>
              </div>

              <div className="mt-2 flex items-center justify-center gap-1 text-xs text-white/50">
                <Languages className="h-3 w-3" /> {a.langs}
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                <div className="text-[10px] uppercase tracking-widest text-white/50">from</div>
                <div className="font-serif text-xl font-bold text-white">
                  ${a.price}<span className="text-sm text-white/50">/min</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <button className="grid h-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10" aria-label="Chat">
                  <MessageCircle className="h-4 w-4" />
                </button>
                <button className="grid h-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10" aria-label="Call">
                  <Phone className="h-4 w-4" />
                </button>
                <button className="grid h-10 place-items-center rounded-xl bg-yellow-400 text-black" aria-label="Video">
                  <Video className="h-4 w-4" />
                </button>
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

export default FeaturedAstrologers
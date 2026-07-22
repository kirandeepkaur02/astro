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
import { motion } from "motion/react";

const Reviews = () => {

  const reviews = [
    {
      quote: "The most beautifully designed astrology app I have used — and the reading was frighteningly accurate.",
      name: "Ananya R.",
      tag: "Mumbai",
    },
    {
      quote: "Booked a consult in under a minute. My astrologer felt like a wise friend.",
      name: "Karan M.",
      tag: "Bengaluru",
    },
    {
      quote: "The kundli report is museum‑quality. I actually printed and framed mine.",
      name: "Priya D.",
      tag: "London",
    },
  ];

  const infiniteReviews = [...reviews, ...reviews];

  return (
    <div className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Loved by seekers"
          title="4.9 out of 5 · from 84,000+ reviews"
        />
        {/* <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="glass cosmic-card relative rounded-3xl p-8">
              <Quote className="h-8 w-8 text-yellow-400" />
              <blockquote className="mt-4 font-serif text-lg leading-relaxed text-white/85">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full gradient-cosmic font-semibold text-yellow-400">
                  {r.name[0]}
                </span>
                <div>
                  <div className="text-sm text-white  font-semibold">{r.name}</div>
                  <div className="text-xs text-white/50">{r.tag}</div>
                </div>
                <div className="ml-auto flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div> */}

        <div className="relative mt-12 overflow-hidden">

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[var(--color-background)] to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[var(--color-background)] to-transparent" />

          <motion.div
            className="flex gap-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {infiniteReviews.map((r, index) => (
              <figure
                key={index}
                className="glass cosmic-card relative w-90 shrink-0 rounded-3xl p-8"
              >
                <Quote className="h-8 w-8 text-yellow-400" />

                <blockquote className="mt-4 font-serif text-lg leading-relaxed text-white/85">
                  “{r.quote}”
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full gradient-cosmic font-semibold text-yellow-400">
                    {r.name[0]}
                  </span>

                  <div>
                    <div className="text-sm font-semibold text-white">
                      {r.name}
                    </div>

                    <div className="text-xs text-white/50">
                      {r.tag}
                    </div>
                  </div>

                  <div className="ml-auto flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-yellow-400"
                      />
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </motion.div>

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
export default Reviews
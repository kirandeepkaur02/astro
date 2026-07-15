import React from 'react'
import { motion } from "motion/react";
import { ArrowRight, PlayCircle, Sparkles, Star } from "lucide-react";

import cosmichero from "../assets/cosmichero.jpg";

const Hero = () => {



const zodiacGlyphs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

  return (
    <div className="relative overflow-hidden  min-h-screen pt-16 pb-16 sm:pt-24 sm:pb-32">
      {/* hero image wash */}

      <div
        aria-hidden
        className="absolute inset-0 -z-10 "
        style={{
          backgroundImage: `url(${cosmichero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
 {/* floating zodiac glyphs */}
      {zodiacGlyphs.map((g, i) => (
        <span
          key={g}
          aria-hidden
          className="pointer-events-none absolute hidden font-serif text-2xl text-(--gold)/40 md:block animate-float-slow"
          style={{
            top: `${10 + ((i * 13) % 70)}%`,
            left: `${(i * 17) % 92}%`,
            animationDelay: `${(i % 6) * 0.6}s`,
            textShadow: "0 0 20px rgba(251,191,36,0.5)",
          }}
        >
          {g}
        </span>
      ))}


       <div className="mx-auto grid max-w-7xl  gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-8">

           <div className="relative">
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-(--gold)/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-orange-400  backdrop-blur"
          > 
            <Sparkles className="h-3.5 w-3.5" /> Award‑winning astrology, since 1998
          </motion.div>

            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-serif text-4xl leading-[1.05] font-bold text-white sm:text-6xl lg:text-7xl"
          >
            Read the stars.
            <br />
            <span className="text-amber-400">Rewrite your story.</span>
          </motion.h1>

           <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl font-serif text-lg text-white/70 sm:text-xl"
          >
            Personal horoscopes, precise kundli, tarot, numerology and live 1:1 sessions
            with India's most trusted astrologers — crafted into a single luxury experience.
          </motion.p>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button  className='bg-amber-400 flex items-center gap-2 rounded-full  px-5 py-2 font-medium text-black transition hover:bg-yellow-300' size="xl">
              Talk to Astrologer <ArrowRight className="h-4 w-4" />
            </button>

            <button  className="flex items-center gap-2 rounded-full  px-7 py-2 font-medium text-white  transition hover:bg-white/10
           bg-white/5 backdrop-blur">
             Free Kundli <PlayCircle className="h-4 w-4" /> 
            </button>
          </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-lg">
            {[
              { k: "25 yrs", v: "of guidance" },
              { k: "1,200+", v: "expert astrologers" },
              { k: "4.9★", v: "avg. rating" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-(family-name:--font-display) text-2xl font-bold text-white">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/50">{s.v}</div>
              </div>
            ))}
          </div>
           </div>

           {/* Moon + orbit */}
           <div className="relative mx-auto aspect-square w-full max-w-md">
           <div className="absolute inset-0 grid place-items-center">
            <div className="animate-spin-slow relative h-[92%] w-[92%] rounded-full border border-dashed border-amber-400">
              {zodiacGlyphs.slice(0, 8).map((g, i) => {
                const angle = (i / 8) * Math.PI * 2;
                return (
                  <span
                    key={g}
                    className="absolute -translate-x-1/2 -translate-y-1/2 font-serif text-sm text-amber-400"
                    style={{
                      left: `${50 + 50 * Math.cos(angle)}%`,
                      top: `${50 + 50 * Math.sin(angle)}%`,
                    }}
                  >
                    {g}
                  </span>
                );
              })}
            </div>
          </div>     
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="animate-moon-glow relative grid h-56 w-56 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#fef3c7,#f59e0b_60%,#78350f)]"
            >
              <Star className="absolute -top-3 -right-3 h-6 w-6 fill-white text-white opacity-80" />
            </motion.div>
          </div>
           </div>
  </div>
 </div>
  )
}

export default Hero
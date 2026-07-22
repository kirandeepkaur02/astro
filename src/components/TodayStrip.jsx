import React from 'react'
import {
  Sunrise,
  Sunset,
  Star,
  Shield,
  Moon,
  Sun,
} from "lucide-react";




const TodayStrip = () => {

  const panchang = [
    { label: "Sunrise", value: "6:04 AM", icon: Sunrise },
    { label: "Sunset", value: "6:42 PM", icon: Sunset },
    { label: "Nakshatra", value: "Rohini", icon: Star },
    { label: "Rahu Kaal", value: "3:12 PM - 4:37 PM", icon: Shield },
    { label: "Moon Phase", value: "Waxing", icon: Moon },
    { label: "Choghadiya", value: "Amrit", icon: Sun },
  ];

  const stats = [
    { title: "Lucky Color", value: "Silver" },
    { title: "Lucky Number", value: "7" },
    { title: "Mood", value: "Reflective" },
    { title: "Compatibility", value: "Pisces" },
  ];


  return (
    <div className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">


          <div className="glass font-serif gradient-border-gold rounded-3xl p-6 sm:p-8 shadow-xl">
            <span className="inline-flex  font-serif rounded-full  px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Today's Horoscope
            </span>

            <h2 className="mt-5 font-serif  text-3xl text-white  md:text-3xl font-bold leading-tight">
              ♋ Cancer -  A Tender Day for
              <span className="block text-white font-serif">
                 New Beginnings
              </span>
            </h2>

            <p className="mt-5 font-serif text-base leading-5 text-white/75">
              The Moon in your first house softens sharp edges.Long-paused conversations
              move forward naturally, while a financial opportunity may appear
              before sunset. Stay calm after 4:30 PM 
            </p>

             {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1  hover:bg-white/10"
                >
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/50">
                    {item.title}
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-white">
                    {item.value}
                  </h4>
                </div>
              ))}
            </div>

           {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                variant="gold"
                size="lg"
                className="w-full text-black bg-yellow-400 px-4 py-3 sm:w-auto rounded-full"
              >
                Full Reading
              </button>

              <button
                variant="glass"
                size="lg"
                className="w-full text-white bg-white/15  px-4 py-3 sm:w-auto rounded-full"
              >
                Change Zodiac
              </button>
            </div>

          </div>

          {/* Panchang Card */}
          <div className="glass rounded-3xl p-6 sm:p-8 shadow-xl">

            <span className="inline-flex rounded-full font-serif  px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Today's Panchang
            </span>

            <h3 className="mt-5 text-white/60 font-serif text-2xl font-bold">
              Tue, 14 July . <span>New Delhi</span>
            </h3>

            
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {panchang.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/40 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-cosmic)] text-yellow-400 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-10 w-10 bg-purple-950   text-yellow-400  px-2 py-2 rounded-2xl"/>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                        {item.label}
                      </p>

                      <h4 className="mt-1 font-semibold text-white">
                        {item.value}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TodayStrip
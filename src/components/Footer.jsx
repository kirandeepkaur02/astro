import React from 'react'
import { Moon } from "lucide-react";

const Footer = () => {
  const cols = [
    { title: "Company", items: ["About", "Careers", "Press", "Contact"] },
    { title: "Services", items: ["Kundli", "Horoscope", "Tarot", "Numerology"] },
    { title: "Zodiac", items: ["Aries", "Taurus", "Gemini", "All signs"] },
    { title: "Legal", items: ["Privacy", "Terms", "Cookies", "Refunds"] },
  ];

  return (
    <div className="relative mt-10 border-t border-white/10 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
              <div>
                <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-yellow-400 text-yellow-400">
                <Moon className="h-4 w-4 text-black" />
              </span>
              <span className="font-serif  text-lg font-bold tracking-widest text-yellow-400">
                CELESTIA
              </span>
              </div>
               <p className="mt-4 max-w-sm font-serif  text-sm text-white/60">
              A luxury astrology platform for the modern seeker — horoscopes, kundli, tarot
              and 1:1 consultations, crafted with reverence.
            </p>
              </div>
               {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-[0.3em] text-yellow-400">{c.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {c.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="hover:text-yellow-400">{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <div>© {new Date().getFullYear()} Celestia. Written in the stars.</div>
          <div>Made with reverence · Mumbai · London · New York</div>
        </div>
      </div>
      </div>
   
  )
}

export default Footer
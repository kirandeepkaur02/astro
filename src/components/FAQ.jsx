import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const faqs = [
    {
      q: "How accurate are Celestia's kundli reports?",
      a: "We use a sidereal Vedic engine calibrated by senior astrologers, with time-zone precise ayanamsa corrections used across 6M+ charts.",
    },
    {
      q: "Are consultations private?",
      a: "Yes — all chats, audio and video calls are end-to-end encrypted and never shared.",
    },
    {
      q: "Can I get a refund if I'm unhappy?",
      a: "Absolutely. Any consultation under 3 minutes is fully refundable, no questions asked.",
    },
    {
      q: "Which languages do astrologers speak?",
      a: "Hindi, English, Tamil, Telugu, Bengali, Marathi, Punjabi, Kannada and more.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="FAQ" title="Answers, before you ask" />

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="glass overflow-hidden rounded-2xl px-5"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between py-5 text-left font-serif text-base font-semibold text-white transition-colors duration-300 hover:text-yellow-400"
              >
                <span>{faq.q}</span>

                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-yellow-400"
                      : "text-white"
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] pb-5"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="font-serif leading-7 text-white/70">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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

      <div className="max-w-2xl">
        <h2 className="mt-2 font-serif text-2xl font-bold leading-13 text-white sm:text-3xl lg:text-5xl">
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

export default FAQ;
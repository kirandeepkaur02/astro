import React from 'react'
import { useEffect, useState } from "react";

const CosmicBackground = () => {

   const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState([]);
 
  useEffect(() => {
    setMounted(true);

    const generatedStars = Array.from({ length: 90 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 4,
    }));

    setStars(generatedStars);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.36_0.18_300/0.5),transparent_60%)]" />
      </div>
    );
  }

  return (
   <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Nebula Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.36_0.18_300/0.5),transparent_60%)]" />

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: "0 0 6px rgba(255,255,255,0.8)",
          }}
        />
      ))}

      {/* Shooting Star 1 */}
      <span
        className="absolute top-[10%] left-[-10%] h-0.5 w-40 bg-linear-to-r from-transparent via-white to-transparent animate-shooting"
        style={{
          animationDelay: "2s",
        }}
      />

      {/* Shooting Star 2 */}
      <span
        className="absolute top-[35%] left-[-10%] h-0.5 w-32 bg-linear-to-r from-transparent via-(--gold) to-transparent animate-shooting"
        style={{
          animationDelay: "6s",
        }}
      />
    </div>
  )
}

export default CosmicBackground
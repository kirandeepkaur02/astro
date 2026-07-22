import React from 'react'

const NewsLetter = () => {
  return (
    <div className="relative py-20 sm:py-28">
       <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glass gradient-border-gold relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_top,rgba(251,191,36,0.15),transparent_60%)]" />
          <div className="text-xs uppercase tracking-[0.35em] text-yellow-400">Cosmic dispatch</div>
          <h2 className="mt-3 font-serif text-3xl text-white font-bold sm:text-4xl">
            The week ahead — <span className="text-yellow-400">in your inbox</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-serif text-gray-400">
            Sunday briefings on planetary shifts, sign forecasts and rituals. No spam, ever.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
           
          >
            <label className="sr-only" htmlFor="newsletter-email">Email</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@stars.com"
              className="h-12 rounded-full
border border-purple-500/20
bg-white/5
px-5
text-white
placeholder:text-white/50
transition-all duration-500
outline-none

hover:border-yellow-400
hover:scale-[1.02]
hover:shadow-[0_0_25px_rgba(251,146,60,0.35)]

focus:border-yellow-400
focus:ring-2
focus:ring-yellow-400/30
focus:shadow-[0_0_35px_rgba(250,204,21,0.45)]  "
            />
            <button size="xl" type="submit" className='rounded-full border border-yellow-400 px-5 py-2 text-yellow-400 transition hover:bg-yellow-400 hover:text-black'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      </div>
  )
}

export default NewsLetter
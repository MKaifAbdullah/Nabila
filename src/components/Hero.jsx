import { useCallback, useEffect, useState } from 'react'
import { HERO_SLIDES } from '../data/salon'
import { IconChevron } from './icons'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const count = HERO_SLIDES.length

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + count) % count),
    [count],
  )

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), 6000)
    return () => clearInterval(timer)
  }, [count])

  return (
    <section id="top" className="relative h-[86vh] min-h-[540px] w-full overflow-hidden bg-ink">
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.kicker}
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`h-full w-full object-cover ${
              i === index ? 'animate-zoom' : ''
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div key={index} className="max-w-2xl animate-fade-up">
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold-light">
            <span className="inline-block h-px w-10 bg-gold-light" />
            {HERO_SLIDES[index].kicker}
          </p>
          <h1 className="font-serif text-4xl leading-[1.08] text-cream sm:text-5xl lg:text-6xl">
            {HERO_SLIDES[index].title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80">
            {HERO_SLIDES[index].text}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={HERO_SLIDES[index].cta.href}
              className="rounded-full bg-gold px-8 py-3.5 text-[11px] uppercase tracking-[0.24em] text-ink transition hover:bg-gold-light"
            >
              {HERO_SLIDES[index].cta.label}
            </a>
            <a
              href="#services"
              className="rounded-full border border-cream/40 px-8 py-3.5 text-[11px] uppercase tracking-[0.24em] text-cream transition hover:border-gold-light hover:text-gold-light"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-4 z-10 flex items-center gap-3 sm:right-6 lg:right-8">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-gold-light hover:text-gold-light"
        >
          <IconChevron className="rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-gold-light hover:text-gold-light"
        >
          <IconChevron />
        </button>
      </div>

      <div className="absolute bottom-10 left-4 z-10 hidden gap-2 sm:flex sm:left-6 lg:left-8">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? 'w-10 bg-gold-light' : 'w-4 bg-cream/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

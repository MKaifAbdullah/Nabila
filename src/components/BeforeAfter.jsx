import { useState } from 'react'

export default function BeforeAfter() {
  const [pos, setPos] = useState(50)

  return (
    <section className="bg-ink py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold-light">The Magic of NABILA</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Before &amp; After</h2>
          <p className="mt-4 text-cream/70">
            Drag the slider to reveal the transformation crafted by our artists.
          </p>
        </div>

        <div className="relative mx-auto aspect-[16/10] max-w-4xl select-none overflow-hidden rounded-sm">
          <img
            src="/images/after.webp"
            alt="After makeover"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <img
            src="/images/before.webp"
            alt="Before makeover"
            loading="lazy"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
            Before
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
            After
          </span>

          <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
            <div className="absolute inset-y-0 -ml-px w-0.5 bg-gold-light/90" />
            <div className="absolute top-1/2 left-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-light text-lg text-ink shadow-lg">
              ⇆
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Before and after comparison slider"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  )
}

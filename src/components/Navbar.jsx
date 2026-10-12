import { useEffect, useState } from 'react'
import { NAV } from '../data/salon'
import { IconClose, IconMenu } from './icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-ink/10 bg-cream/95 backdrop-blur-md shadow-[0_10px_30px_-20px_rgba(20,16,14,0.6)]'
          : 'border-transparent bg-cream'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-2xl tracking-[0.32em] text-ink">NABILA</span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.42em] text-gold">
            Clifton · Karachi
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group relative text-xs uppercase tracking-[0.22em] text-ink/80 transition hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="hidden rounded-full bg-ink px-6 py-2.5 text-[11px] uppercase tracking-[0.22em] text-cream transition hover:bg-gold sm:inline-block"
          >
            Book Now
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-ink lg:hidden"
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-cream lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink/5 py-3 text-sm uppercase tracking-[0.2em] text-ink/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-ink px-6 py-2.5 text-[11px] uppercase tracking-[0.22em] text-cream"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

import { BRAND, SOCIALS } from '../data/salon'
import { IconPhone } from './icons'

export default function TopBar() {
  return (
    <div className="bg-ink text-cream/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[11px] uppercase tracking-[0.18em] sm:px-6 lg:px-8">
        <a
          href={`tel:${BRAND.phoneMobile.replace(/\s/g, '')}`}
          className="hidden items-center gap-2 transition hover:text-gold-light sm:flex"
        >
          <IconPhone width="14" height="14" />
          {BRAND.phoneMobile}
        </a>
        <p className="flex-1 text-center text-gold-light">
          Signature Bridal Makeovers · Now Taking Appointments
        </p>
        <div className="hidden items-center gap-4 lg:flex">
          {SOCIALS.slice(0, 4).map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-gold-light"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

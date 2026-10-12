import { BRAND, LOCATIONS, SERVICE_MENU, SOCIALS } from '../data/salon'
import { IconMail, IconPhone, IconPin } from './icons'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/65">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="font-serif text-3xl tracking-[0.3em] text-cream">NABILA</span>
            <span className="mt-2 block text-[10px] uppercase tracking-[0.4em] text-gold-light">
              Clifton · Karachi
            </span>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              A leading beauty brand in Pakistan, known for signature bridal makeovers, professional
              salon services and high-quality hair care. {BRAND.slogan}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.18em]">
              {SOCIALS.map((s) => (
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

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold-light">Services</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {SERVICE_MENU.slice(0, 8).map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="transition hover:text-gold-light">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold-light">Studios</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {LOCATIONS.map((l) => (
                <li key={l.name}>
                  <a href="#locations" className="transition hover:text-gold-light">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold-light">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex gap-2.5">
                <IconPin className="mt-0.5 shrink-0 text-gold" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex gap-2.5">
                <IconPhone className="mt-0.5 shrink-0 text-gold" />
                <span>
                  {BRAND.phonePrimary}
                  <br />
                  {BRAND.phoneMobile}
                </span>
              </li>
              <li className="flex gap-2.5">
                <IconMail className="mt-0.5 shrink-0 text-gold" />
                <a href={`mailto:${BRAND.email}`} className="transition hover:text-gold-light">
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>© {year} NABILA Salon. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-[0.18em]">
            <a href="#top" className="transition hover:text-gold-light">Privacy Policy</a>
            <a href="#top" className="transition hover:text-gold-light">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

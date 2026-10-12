import { useState } from 'react'
import { BRAND, RESIDENCE_AREAS, SERVICE_MENU } from '../data/salon'
import { IconArrow, IconClock, IconPhone } from './icons'

const fieldClass =
  'w-full rounded-sm border border-ink/15 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40'
const labelClass = 'mb-2 block text-[11px] uppercase tracking-[0.2em] text-ink/60'

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [services, setServices] = useState([])

  const toggleService = (label) =>
    setServices((s) => (s.includes(label) ? s.filter((x) => x !== label) : [...s, label]))

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="booking" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold">
              <span className="inline-block h-px w-10 bg-gold" />
              Reservations
            </p>
            <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
              For Bookings &amp; Appointments
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              Thank you for choosing {BRAND.name}. Fill in the form and our team will get back to you
              to confirm your reservation. For urgent bookings, please call us directly.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`tel:${BRAND.phoneMobile.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-lg text-ink transition hover:text-gold"
              >
                <IconPhone className="text-gold" />
                {BRAND.phoneMobile}
              </a>
              <p className="flex items-center gap-3 text-ink/70">
                <IconClock className="text-gold" />
                {BRAND.hours}
              </p>
              <p className="text-sm text-muted">{BRAND.address}</p>
            </div>
          </div>

          <div className="rounded-sm border border-ink/10 bg-white/70 p-6 sm:p-9">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-3xl text-gold">
                  ✓
                </div>
                <h3 className="mt-6 font-serif text-3xl text-ink">Request Received</h3>
                <p className="mt-3 max-w-sm text-ink/70">
                  Thank you. Our team will contact you shortly to confirm your appointment at{' '}
                  {BRAND.name} {BRAND.branch}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setServices([])
                  }}
                  className="mt-8 rounded-full bg-ink px-7 py-3 text-[11px] uppercase tracking-[0.22em] text-cream transition hover:bg-gold"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="first">First Name *</label>
                    <input id="first" name="first" required className={fieldClass} placeholder="First name" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="last">Last Name</label>
                    <input id="last" name="last" className={fieldClass} placeholder="Last name" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="email">Email *</label>
                    <input id="email" type="email" name="email" required className={fieldClass} placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">Phone *</label>
                    <input id="phone" type="tel" name="phone" required className={fieldClass} placeholder="+92 3XX XXXXXXX" />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="area">Your Residence Area *</label>
                  <select id="area" name="area" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>Select your area</option>
                    {RESIDENCE_AREAS.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className={labelClass}>Select Services</span>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_MENU.map((s) => {
                      const active = services.includes(s.label)
                      return (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => toggleService(s.label)}
                          className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.14em] transition ${
                            active
                              ? 'border-gold bg-gold text-ink'
                              : 'border-ink/15 text-ink/70 hover:border-gold hover:text-gold'
                          }`}
                        >
                          {s.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="date">Preferred Date</label>
                    <input id="date" type="date" name="date" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="time">Preferred Time</label>
                    <input id="time" type="time" name="time" className={fieldClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="notes">Additional Notes</label>
                  <textarea id="notes" name="notes" rows="3" className={fieldClass} placeholder="Tell us about your occasion or preferred artist…" />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-cream transition hover:bg-gold sm:w-auto"
                >
                  Book My Appointment
                  <IconArrow width="16" height="16" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

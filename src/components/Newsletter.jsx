import { useState } from 'react'
import { IconArrow } from './icons'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
  }

  return (
    <section className="bg-mocha py-20 text-cream sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold-light">Newsletter</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Be the first to know</h2>
        <p className="mt-4 text-cream/70">
          Subscribe for early access to new services, seasonal offers and bridal promotions.
        </p>

        {done ? (
          <p className="mx-auto mt-8 max-w-md rounded-full border border-gold-light/40 bg-gold-light/10 px-6 py-3 text-sm text-gold-light">
            Thank you for subscribing to NABILA.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-full border border-cream/25 bg-transparent px-5 py-3.5 text-sm text-cream placeholder:text-cream/50 focus:border-gold-light focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-light px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-ink transition hover:bg-cream"
            >
              Subscribe
              <IconArrow width="16" height="16" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

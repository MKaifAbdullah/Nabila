import { LOCATIONS } from '../data/salon'
import { IconClock, IconPhone, IconPin } from './icons'

function LocationCard({ location }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-ink/10 bg-white">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <img
          src={location.image}
          alt={location.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {location.featured ? (
          <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink">
            Flagship Studio
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl text-ink">{location.name}</h3>

        <ul className="mt-4 space-y-2.5 text-sm text-ink/70">
          <li className="flex gap-2.5">
            <IconPin className="mt-0.5 shrink-0 text-gold" />
            <span>{location.address}</span>
          </li>
          <li className="flex gap-2.5">
            <IconPhone className="mt-0.5 shrink-0 text-gold" />
            <span>
              {location.phone}
              {location.mobile ? ` · ${location.mobile}` : ''}
            </span>
          </li>
          <li className="flex gap-2.5">
            <IconClock className="mt-0.5 shrink-0 text-gold" />
            <span>{location.hours}</span>
          </li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          <a
            href="#booking"
            className="rounded-full bg-ink px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] text-cream transition hover:bg-gold"
          >
            Book Appointment
          </a>
          <a
            href={location.maps}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/25 px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] text-ink transition hover:border-gold hover:text-gold"
          >
            Directions
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Locations() {
  return (
    <section id="locations" className="bg-sand/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Visit Us</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">Our Studios</h2>
          <p className="mt-4 text-ink/70">
            Five locations across Karachi, Lahore and Islamabad — each offering the full NABILA
            experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((location) => (
            <LocationCard key={location.name} location={location} />
          ))}
        </div>
      </div>
    </section>
  )
}

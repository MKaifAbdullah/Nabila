import { Fragment } from 'react'
import { SERVICE_MENU, SERVICES } from '../data/salon'
import { IconArrow } from './icons'

function ServiceTable({ columns, rows, title }) {
  const span = columns.length + 1
  return (
    <div className="mt-8 overflow-x-auto rounded-sm border border-ink/10 bg-white/60">
      <table className="w-full min-w-[540px] border-collapse text-sm">
        <thead>
          <tr className="bg-ink text-cream">
            <th className="px-4 py-3.5 text-left text-[10px] font-medium uppercase tracking-[0.2em]">
              {title}
            </th>
            {columns.map((c) => (
              <th
                key={c}
                className="whitespace-nowrap px-4 py-3.5 text-right text-[10px] font-medium uppercase tracking-[0.2em]"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) =>
            row.sub ? (
              <Fragment key={row.label}>
                <tr className="bg-sand/70">
                  <td colSpan={span} className="px-4 py-2.5 font-serif text-base text-ink">
                    {row.label}
                  </td>
                </tr>
                {row.sub.map((sub) => (
                  <tr key={sub.label} className="border-t border-ink/5">
                    <td className="px-4 py-3 pl-8 text-ink/65">{sub.label}</td>
                    {sub.values.map((v, j) => (
                      <td
                        key={j}
                        className="whitespace-nowrap px-4 py-3 text-right tabular-nums text-ink/85"
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ) : (
              <tr key={row.label} className="border-t border-ink/5 even:bg-white/50">
                <td className="px-4 py-3 text-ink/85">{row.label}</td>
                {row.values.map((v, j) => (
                  <td
                    key={j}
                    className="whitespace-nowrap px-4 py-3 text-right tabular-nums text-ink/85"
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  )
}

function ServiceBlock({ service, index }) {
  const { id, title, blurb, image, columns, rows, addons } = service
  return (
    <article
      id={id}
      className="scroll-mt-24 grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
    >
      <div className="lg:sticky lg:top-36 lg:self-start">
        <div className="group overflow-hidden rounded-sm bg-sand">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        </div>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-[0.32em] text-gold">
          Service {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">{title}</h3>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">{blurb}</p>

        <ServiceTable columns={columns} rows={rows} title={title} />

        {addons?.length ? (
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            {addons.map((a) => (
              <span key={a.label} className="text-ink/70">
                <span className="text-ink">{a.label}:</span> {a.value}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-[11px] uppercase tracking-[0.22em] text-cream transition hover:bg-gold"
          >
            Book My Appointment
            <IconArrow width="16" height="16" />
          </a>
          <span className="text-xs text-muted">*All prices are inclusive of taxes</span>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold">
            <span className="inline-block h-px w-10 bg-gold" />
            Discover Our
          </p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">Services Menu</h2>
          <p className="mt-5 leading-relaxed text-ink/70">
            From precision haircuts and couture colour to bridal artistry, skin care and nails —
            explore the full NABILA Clifton menu. Prices shown are in PKR and include taxes.
          </p>
        </div>
      </div>

      <div className="sticky top-[65px] z-40 mt-10 border-y border-ink/10 bg-cream/95 backdrop-blur-md">
        <div className="nabila-scroll mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {SERVICE_MENU.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="whitespace-nowrap rounded-full border border-ink/15 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-ink/70 transition hover:border-gold hover:text-gold"
            >
              {m.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl divide-y divide-ink/10 px-4 sm:px-6 lg:px-8">
        {SERVICES.map((service, i) => (
          <ServiceBlock key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}

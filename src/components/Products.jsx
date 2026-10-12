import { BRAND, PRODUCTS } from '../data/salon'
import { IconArrow, IconStar } from './icons'

function ProductCard({ product, badge }) {
  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden rounded-sm bg-sand">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="mt-4 flex items-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <IconStar key={i} />
        ))}
      </div>
      <h3 className="mt-2 font-serif text-lg leading-snug text-ink">{product.name}</h3>
      <p className="mt-1 text-sm text-muted">{BRAND.name} Hair Care</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-base text-ink">{product.price}</span>
        <a
          href={product.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-ink/70 transition hover:text-gold"
        >
          Buy Now
          <IconArrow width="14" height="14" />
        </a>
      </div>
    </article>
  )
}

export default function Products() {
  return (
    <section id="shop" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold">
              <span className="inline-block h-px w-10 bg-gold" />
              NABILA Hair Care
            </p>
            <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">Shop the Collection</h2>
          </div>
          <a
            href={BRAND.shop}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-[11px] uppercase tracking-[0.22em] text-ink transition hover:border-gold hover:text-gold"
          >
            Visit Full Store
            <IconArrow width="16" height="16" />
          </a>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} badge={i === 0 ? 'Best Seller' : ''} />
          ))}

          <article className="flex flex-col justify-center rounded-sm border border-dashed border-ink/25 bg-sand/40 p-10 text-center">
            <p className="font-serif text-2xl text-ink">The Complete Range</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Explore shampoos, conditioners, colour locks and treatments formulated for salon-perfect
              hair at home.
            </p>
            <a
              href={BRAND.shop}
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-[11px] uppercase tracking-[0.22em] text-cream transition hover:bg-gold"
            >
              Shop All
              <IconArrow width="16" height="16" />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

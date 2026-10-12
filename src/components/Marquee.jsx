const PHRASE = 'Look good · Feel good · Live better'

export default function Marquee() {
  const items = Array.from({ length: 6 })
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-4 text-cream">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {[...items, ...items].map((_, i) => (
          <span key={i} className="flex items-center gap-10 font-serif text-lg italic tracking-wide">
            {PHRASE}
            <span className="text-gold-light">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

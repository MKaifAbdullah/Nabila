import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const OUT = path.resolve('public/images')

const WIDTHS = {
  hero: 2000,
  portrait: 1200,
  service: 1400,
  product: 800,
  location: 1400,
  before: 1200,
}

const IMAGES = {
  'hero-1': { id: '1695527081848-1e46c06e6458', w: WIDTHS.hero },
  'hero-2': { id: '1774660810791-ffabcc531009', w: WIDTHS.hero },
  'hero-3': { id: '1712598775843-5cbdf842d45f', w: WIDTHS.hero },
  founder: { id: '1719613959577-434f93b266d7', w: WIDTHS.portrait },

  'service-hair-cut': { id: '1695527081848-1e46c06e6458', w: WIDTHS.service },
  'service-hair-color': { id: '1712598775843-5cbdf842d45f', w: WIDTHS.service },
  'service-straightening': { id: '1713824096348-c1956e6da321', w: WIDTHS.service },
  'service-hair-care': { id: '1706629503720-13cad35ce2e5', w: WIDTHS.service },
  'service-hair-styling': { id: '1703792686930-9efa64a9c6c5', w: WIDTHS.service },
  'service-makeup': { id: '1758613653823-5baa7dd8073e', w: WIDTHS.service },
  'service-bridal': { id: '1770747874505-67d0a43379d5', w: WIDTHS.service },
  'service-brows-lashes': { id: '1752653271953-bbfc83e12241', w: WIDTHS.service },
  'service-skin-care': { id: '1552693673-1bf958298935', w: WIDTHS.service },
  'service-nails': { id: '1522337660859-02fbefca4702', w: WIDTHS.service },
  'service-pedicure': { id: '1652990337162-fa84a588d843', w: WIDTHS.service },
  'service-nail-care': { id: '1674691412909-8405f0a19940', w: WIDTHS.service },

  before: { id: '1768039376092-70e587cb7b94', w: WIDTHS.before },
  after: { id: '1766763845929-46a0b6cd84a4', w: WIDTHS.before },

  'product-1': { id: '1623143445418-40c192fa3d11', w: WIDTHS.product },
  'product-2': { id: '1764599955359-1cfaefad0658', w: WIDTHS.product },
  'product-3': { id: '1580870069867-74c57ee1bb07', w: WIDTHS.product },
  'product-4': { id: '1618478297003-218b7eddfe68', w: WIDTHS.product },
  'product-5': { id: '1741896135512-084b251887f7', w: WIDTHS.product },

  'location-clifton': { id: '1706629503720-13cad35ce2e5', w: WIDTHS.location },
  'location-kda': { id: '1703792686930-9efa64a9c6c5', w: WIDTHS.location },
  'location-dha': { id: '1672257493393-7456f8aa76b6', w: WIDTHS.location },
  'location-lahore': { id: '1616394584738-fc6e612e71b9', w: WIDTHS.location },
  'location-islamabad': { id: '1706795033728-9232ef548a16', w: WIDTHS.location },
}

async function fetchOne(name, { id, w }) {
  const src = `https://images.unsplash.com/photo-${id}?fm=jpg&q=80&w=${Math.min(
    w * 2,
    2400,
  )}&auto=format&fit=crop`
  const res = await fetch(src, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
      Accept: 'image/avif,image/webp,image/*,*/*;q=0.8',
    },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  const target = path.join(OUT, `${name}.webp`)
  const info = await sharp(buf)
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(target)
  return `${name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}kb`
}

async function run() {
  await mkdir(OUT, { recursive: true })
  const entries = Object.entries(IMAGES)
  const results = []
  const failures = []

  const queue = [...entries]
  const workers = Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const [name, cfg] = queue.shift()
      try {
        const line = await fetchOne(name, cfg)
        results.push(line)
        console.log('OK   ' + line)
      } catch (err) {
        failures.push(`${name}: ${err.message}`)
        console.error('FAIL ' + name + ': ' + err.message)
      }
    }
  })
  await Promise.all(workers)

  console.log(`\nDownloaded ${results.length}/${entries.length}`)
  if (failures.length) console.log('Failures:\n' + failures.join('\n'))
}

run()

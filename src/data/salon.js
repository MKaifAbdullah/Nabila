export const BRAND = {
  name: 'NABILA',
  branch: 'Clifton · Karachi',
  slogan: 'Evolution into the world of hair, makeup & image.',
  phonePrimary: '(021) 111 622 452',
  phoneMobile: '+92 301 828 3211',
  email: 'hello@nabila.net',
  address: 'D-143, Block 4, Clifton, Karachi, 75600',
  hours: 'Monday – Sunday · 11:00 AM – 08:00 PM',
  shop: 'https://thenabilashop.com/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Nabila+Salon+Clifton+Karachi',
};

export const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Bridal', href: '#bridal' },
  { label: 'Shop', href: '#shop' },
  { label: 'Locations', href: '#locations' },
  { label: 'Book', href: '#booking' },
];

export const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/nabila_salon/' },
  { label: 'Facebook', href: 'https://www.facebook.com/NabilaExpress/' },
  { label: 'YouTube', href: 'https://www.youtube.com/c/TheNABILAChannel' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@nabila.salon' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/nabila-pvt-ltd/' },
];

export const HERO_SLIDES = [
  {
    image: '/images/hero-1.webp',
    kicker: 'Karachi · Clifton',
    title: 'Evolution into the world of hair, makeup & image.',
    text: 'For decades NABILA has shaped beauty for celebrated personalities, trendsetters and high-profile individuals.',
    cta: { label: 'Book Appointment', href: '#booking' },
  },
  {
    image: '/images/hero-2.webp',
    kicker: 'Signature Bridal Atelier',
    title: 'Bridal makeovers, crafted for your once-in-a-lifetime day.',
    text: 'From classic elegance to flawless glamour — our master artists design a signature look that is yours alone.',
    cta: { label: 'Explore Bridal', href: '#bridal' },
  },
  {
    image: '/images/hero-3.webp',
    kicker: 'Hair & Colour Studio',
    title: 'Precision cuts, couture colour and expert hair care.',
    text: 'Balayage, highlights, straightening and treatments led by trained professionals using premium products.',
    cta: { label: 'View Services', href: '#services' },
  },
];

export const SERVICE_MENU = [
  { id: 'hair-cut', label: 'Hair Cut' },
  { id: 'hair-color', label: 'Hair Color' },
  { id: 'straightening', label: 'Straightening' },
  { id: 'hair-care', label: 'Hair Care' },
  { id: 'hair-styling', label: 'Hair Styling' },
  { id: 'makeup', label: 'Makeup' },
  { id: 'bridal', label: 'Bridal Packages' },
  { id: 'brows-lashes', label: 'Brows & Lashes' },
  { id: 'skin-care', label: 'Skin Care' },
  { id: 'nails', label: 'Nails' },
  { id: 'pedicure', label: 'Pedicure & Manicure' },
  { id: 'nail-care', label: 'Nail Care' },
];

export const SERVICES = [
  {
    id: 'hair-cut',
    title: 'Hair Cut',
    blurb:
      'Consultation-led precision cutting tailored to your face shape, hair texture and lifestyle — finished with a professional blow-dry.',
    image: '/images/service-hair-cut.webp',
    columns: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
    rows: [
      { label: 'Short Length', values: ['8,000', '10,000', '14,000', '18,000'] },
      { label: 'Mid Length', values: ['12,000', '14,000', '18,000', '22,000'] },
      { label: 'Long Length', values: ['16,000', '18,000', '22,000', '26,000'] },
    ],
    addons: [
      { label: 'Real Hair Extension & Colour', value: 'On Consultation' },
    ],
  },
  {
    id: 'hair-color',
    title: 'Hair Color',
    blurb:
      'Couture colour, balayage and corrective work designed to enhance your natural tone with long-lasting shine.',
    image: '/images/service-hair-color.webp',
    columns: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
    rows: [
      {
        label: 'French Balayage',
        sub: [
          { label: 'Below Shoulder', values: ['30,500', '37,000', '46,500', '50,000'] },
          { label: 'Above Shoulder', values: ['24,000', '30,500', '37,000', '50,000'] },
        ],
      },
      {
        label: 'Creative Fashion Colour',
        sub: [
          { label: 'Below Shoulder', values: ['30,500', '37,000', '46,500', '50,000'] },
          { label: 'Above Shoulder', values: ['24,000', '30,500', '37,000', '50,000'] },
        ],
      },
      {
        label: 'Corrective Colour (Multi Process)',
        sub: [
          { label: 'Below Shoulder', values: ['30,500', '37,000', '46,500', '50,000'] },
          { label: 'Above Shoulder', values: ['24,000', '30,500', '37,000', '50,000'] },
        ],
      },
      {
        label: 'Highlights Full Head',
        sub: [
          { label: 'Below Shoulder', values: ['30,500', '37,000', '46,500', '55,000'] },
          { label: 'Above Shoulder', values: ['24,000', '30,500', '37,000', '55,000'] },
        ],
      },
      {
        label: 'Highlights Half Head',
        sub: [
          { label: 'Below Shoulder', values: ['20,000', '24,000', '26,500', '35,000'] },
          { label: 'Above Shoulder', values: ['17,500', '21,500', '24,000', '35,000'] },
        ],
      },
      {
        label: 'Highlights Crown & Part',
        sub: [
          { label: 'Below Shoulder', values: ['17,500', '20,000', '22,500', '—'] },
          { label: 'Above Shoulder', values: ['13,500', '16,000', '20,000', '—'] },
        ],
      },
      {
        label: 'Tint or Gloss / Tint & Gloss',
        sub: [
          { label: 'Below Shoulder', values: ['13,500', '16,000', '18,500', '21,500'] },
          { label: 'Above Shoulder', values: ['10,500', '13,500', '16,000', '19,000'] },
        ],
      },
      { label: 'Roots Coverage (Upto 2 Inches)', values: ['8,000', '9,500', '11,000', '13,500'] },
    ],
    addons: [
      { label: 'Additional Inoa', value: '6,000' },
      { label: 'Waist Length', value: '7,000' },
      { label: 'Virgin Hair', value: '6,600' },
    ],
  },
  {
    id: 'straightening',
    title: 'Hair Straightening Treatments',
    blurb:
      'Sleek, frizz-free and permanent straightening options for a polished, manageable finish.',
    image: '/images/service-straightening.webp',
    columns: ['Level 1', 'Level 2', 'Level 3'],
    rows: [
      {
        label: 'Frizz Free',
        sub: [
          { label: 'Below Shoulder', values: ['34,500', '40,000', '46,500'] },
          { label: 'Above Shoulder', values: ['30,500', '34,500', '40,000'] },
        ],
      },
      {
        label: 'Permanent Straightening',
        sub: [
          { label: 'Below Shoulder', values: ['34,500', '40,000', '46,500'] },
          { label: 'Above Shoulder', values: ['30,500', '34,500', '40,000'] },
        ],
      },
      {
        label: 'Half Head',
        sub: [
          { label: 'Below Shoulder', values: ['21,000', '25,000', '34,000'] },
          { label: 'Above Shoulder', values: ['17,000', '21,000', '27,500'] },
        ],
      },
      { label: 'Additional Length', values: ['6,500', '6,500', '6,500'] },
    ],
  },
  {
    id: 'hair-care',
    title: 'Hair Care Treatments',
    blurb:
      'Restorative in-salon treatments that repair, nourish and bring back the shine of healthy hair.',
    image: '/images/service-hair-care.webp',
    columns: ['Express', 'Luxury', 'Shine Enhancing'],
    rows: [
      { label: 'Nourishing Treatment', values: ['9,000', '9,500', '14,000'] },
      { label: 'Hair Repairing Treatment', values: ['9,000', '9,500', '14,000'] },
      { label: 'Volumizing Treatment', values: ['9,000', '9,500', '14,000'] },
      { label: 'Anti Dandruff Treatment', values: ['9,000', '9,500', '14,000'] },
      { label: 'Colour Refresher Glaze', values: ['9,000', '9,500', '12,650'] },
      { label: 'Vegan Colour Pigment Remover', values: ['9,000', '9,500', '14,000'] },
      { label: 'Fortifying Plex', values: ['9,000', '9,500', '14,000'] },
    ],
  },
  {
    id: 'hair-styling',
    title: 'Hair Styling',
    blurb:
      'Event-ready styling — from effortless blow-dries to sculpted updos for your special occasions.',
    image: '/images/service-hair-styling.webp',
    columns: ['Styling'],
    rows: [
      { label: 'Updos', values: ['5,500'] },
      { label: 'Temporary Texturising', values: ['4,000'] },
      { label: 'Hair Extensions Blow-dry', values: ['3,200'] },
      { label: 'Blow-dry', values: ['3,200'] },
      { label: 'Additional Waist Length', values: ['600'] },
      { label: 'With Kerastase Shampoo', values: ['1,500'] },
    ],
  },
  {
    id: 'makeup',
    title: 'Makeup',
    blurb:
      'Signature, bridal and evening looks created by NABILA artists using premium, long-wear products.',
    image: '/images/service-makeup.webp',
    columns: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Makeup Director'],
    rows: [
      { label: 'Signature Makeup', values: ['—', '—', '115,000', '—', '135,000'] },
      { label: 'Bridal Makeup', values: ['46,500', '63,500', '76,500', '99,000', '—'] },
      { label: 'Evening Makeup', values: ['25,000', '31,000', '40,000', '45,000', '65,000'] },
      { label: 'Minimal Makeup', values: ['17,000', '—', '—', '—', '—'] },
    ],
  },
  {
    id: 'bridal',
    title: 'Bridal Packages',
    blurb:
      'Complete bridal experiences that combine hair, makeup and finishing touches for your wedding day.',
    image: '/images/service-bridal.webp',
    columns: ['Package'],
    rows: [
      { label: 'Luxury Package', values: ['45,000'] },
      { label: 'Classic Package', values: ['35,000'] },
    ],
  },
  {
    id: 'brows-lashes',
    title: 'Eyebrow & Lashes',
    blurb:
      'Lash extensions, brow shaping and tinting to frame the eyes with beautiful definition.',
    image: '/images/service-brows-lashes.webp',
    columns: ['Service'],
    rows: [
      { label: 'Classic Lash Extensions', values: ['26,500'] },
      { label: 'Dimensional Lash Extensions', values: ['26,500'] },
      { label: 'Lash Extensions Refill', values: ['16,500'] },
      { label: 'Brow Tint', values: ['13,500'] },
      { label: 'Eye Lash Tint', values: ['10,000'] },
      { label: 'Eyebrow Lamination (For Bushy Brows)', values: ['10,000'] },
      { label: 'Eye Lash Perming', values: ['10,000'] },
      { label: 'Eye Lash Extension Removal', values: ['8,000'] },
      { label: 'Eyebrows Reshaping', values: ['2,500'] },
    ],
  },
  {
    id: 'skin-care',
    title: 'Skin Care',
    blurb:
      'Facials, polish and waxing with advanced machines for a fresh, glowing complexion.',
    image: '/images/service-skin-care.webp',
    columns: ['Normal', 'High Frequency', 'Hydra Machine', 'Premium'],
    rows: [
      { label: 'Premium Package', values: ['26,500', '29,000', '33,000', '33,000'] },
      { label: 'Deluxe Package', values: ['18,000', '20,500', '24,500', '24,500'] },
      { label: 'Classic Package', values: ['15,000', '17,500', '21,500', '21,500'] },
      { label: 'Face Polish', values: ['6,500', '—', '—', '—'] },
      { label: 'Facial Hair Removal', values: ['3,000', '—', '—', '—'] },
      { label: 'Full Body Polish', values: ['17,500', '—', '—', '—'] },
      { label: 'Full Body Wax', values: ['21,500', '—', '—', '—'] },
      { label: 'Face Wax', values: ['5,500', '—', '—', '—'] },
      { label: 'Each Part Wax', values: ['6,000', '—', '—', '—'] },
      { label: 'Eye Brows', values: ['2,500', '—', '—', '—'] },
    ],
  },
  {
    id: 'nails',
    title: 'Nails',
    blurb:
      'Acrylics, soft gel and gelish finishes with detailed nail art for hands and feet.',
    image: '/images/service-nails.webp',
    columns: ['Hands', 'Feet'],
    rows: [
      { label: 'Acrylic / Soft Gel / Gel Builder', values: ['12,000', '13,000'] },
      { label: 'Refills', values: ['6,500', '8,000'] },
      { label: 'Enhancement Removal', values: ['5,500', '5,500'] },
      { label: 'Nail Repair (per nail)', values: ['1,500', '1,500'] },
      { label: 'Acrylic Coat / Gel Coat', values: ['5,000', '5,000'] },
      { label: 'Nail Art with Rhinestones', values: ['6,500', '6,500'] },
      { label: 'Gelish Polish with French Line', values: ['6,500', '6,500'] },
      { label: 'Gelish Polish', values: ['4,500', '4,500'] },
      { label: 'Shape, Buff & Polish with French Line', values: ['4,500', '4,500'] },
      { label: 'Shape, Buff & Polish', values: ['3,000', '3,000'] },
      { label: 'Nail Art', values: ['4,500', '4,500'] },
      { label: 'Gel Polish Soak Off', values: ['2,500', '2,500'] },
    ],
  },
  {
    id: 'pedicure',
    title: 'Pedicure & Manicure',
    blurb:
      'Luxury hand and foot rituals — from express care to gold-mask indulgence.',
    image: '/images/service-pedicure.webp',
    columns: ['Hands', 'Feet'],
    rows: [
      { label: 'Luxury Gold Mask', values: ['6,500', '6,500'] },
      { label: 'Hydrating Paraffin Treatment', values: ['6,500', '6,500'] },
      { label: 'Russian Manicure / Pedicure', values: ['5,500', '5,500'] },
      { label: 'Therapeutic / Corrective Pedicure', values: ['—', '5,500'] },
      { label: 'Express', values: ['5,000', '5,000'] },
    ],
  },
  {
    id: 'nail-care',
    title: 'Nail Care Packages',
    blurb:
      'Finishing combinations for beautifully groomed hands, complete with colour.',
    image: '/images/service-nail-care.webp',
    columns: ['Package'],
    rows: [
      { label: 'Russian Manicure with Nail Color', values: ['3,000'] },
      { label: 'Russian Manicure with Milky Nude Gelish Polish', values: ['5,625'] },
    ],
  },
];

export const LOCATIONS = [
  {
    name: 'Karachi Clifton',
    image: '/images/location-clifton.webp',
    address: 'Plot No. D-143, Block 4, Clifton, Karachi 75600',
    phone: '(021) 111 622 452',
    mobile: '+92 301 828 3211',
    hours: 'Mon – Sun · 11:00 AM – 08:00 PM',
    maps: 'https://www.google.com/maps/search/?api=1&query=Nabila+Clifton+Karachi',
    featured: true,
  },
  {
    name: 'Karachi K.D.A',
    image: '/images/location-kda.webp',
    address: '101/B Tipu Sultan Road, MACHS, Karachi',
    phone: '(021) 111 622 452',
    mobile: '+92 303 222 2888',
    hours: 'Mon – Sun · 11:00 AM – 11:00 PM',
    maps: 'https://www.google.com/maps/search/?api=1&query=Nabila+KDA+Karachi',
  },
  {
    name: 'Karachi D.H.A',
    image: '/images/location-dha.webp',
    address: '4th Floor, Building 48-C, Lane 9, Bukhari Commercial, DHA Phase 6',
    phone: '(021) 111 622 452',
    mobile: '+92 327 222 2666',
    hours: 'Mon – Sun · 11:00 AM – 11:00 PM',
    maps: 'https://www.google.com/maps/search/?api=1&query=Nabila+DHA+Karachi',
  },
  {
    name: 'Lahore',
    image: '/images/location-lahore.webp',
    address: '6-Q College Road, Block D, Gulberg 2, Lahore',
    phone: '+92 42 3577 9103-4',
    mobile: '+92 333 429 9948',
    hours: 'Mon – Sun · 11:00 AM – 11:00 PM',
    maps: 'https://www.google.com/maps/search/?api=1&query=Nabila+Lahore',
  },
  {
    name: 'Islamabad',
    image: '/images/location-islamabad.webp',
    address: 'Plot 5, Shaheen Market, Street 14, E-7, Islamabad',
    phone: '+92 51 265 5585',
    mobile: '+92 321 786 0074',
    hours: 'Mon – Sun · 11:00 AM – 11:00 PM',
    maps: 'https://www.google.com/maps/search/?api=1&query=Nabila+Islamabad',
  },
];

export const PRODUCTS = [
  {
    name: 'NABILA Blonde Hair Colour Lock',
    price: 'Rs. 4,900',
    image: '/images/product-1.webp',
    href: 'https://thenabilashop.com/collections/nabila-hair-care',
  },
  {
    name: 'NABILA Brunette Hair Colour Lock',
    price: 'Rs. 4,900',
    image: '/images/product-2.webp',
    href: 'https://thenabilashop.com/collections/nabila-hair-care',
  },
  {
    name: 'Hair Repair Shampoo Sulfate-Free',
    price: 'Rs. 2,990',
    image: '/images/product-3.webp',
    href: 'https://thenabilashop.com/collections/nabila-hair-care',
  },
  {
    name: 'Hair Repair Shampoo',
    price: 'Rs. 2,490',
    image: '/images/product-4.webp',
    href: 'https://thenabilashop.com/collections/nabila-hair-care',
  },
  {
    name: 'Hair Repair Conditioner',
    price: 'Rs. 2,490',
    image: '/images/product-5.webp',
    href: 'https://thenabilashop.com/collections/nabila-hair-care',
  },
];

export const RESIDENCE_AREAS = [
  'Clifton',
  'Defence (DHA)',
  'PECHS',
  'Bahadurabad',
  'Tariq Road',
  'Gulistan-e-Johar',
  'Gulshan-e-Iqbal',
  'Gulberg Town',
  'North Nazimabad',
  'Nazimabad',
  'Saddar',
  'Other',
];

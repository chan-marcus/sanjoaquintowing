// ============================================================
// CLONE CONFIG: to launch this template in a new market, edit
// this file + src/data/services.ts + src/data/cities.ts
// ============================================================

export const SITE = {
  brand: 'San Joaquin Towing',
  // Split for the two-tone wordmark in the header/footer.
  // A real variant people search for (e.g. '<County> <Trade>'), NOT a keyword
  // string. Google treats a stuffed name as untrustworthy and falls back to
  // printing the bare domain in results.
  brandAlt: 'San Joaquin County Towing',
  brandLead: 'San Joaquin',
  brandTail: 'Towing',

  domain: 'sanjoaquintowing.com',
  url: 'https://sanjoaquintowing.com',

  // Branded vanity number: the last four digits spell a word.
  // Verify with scripts/vanity.py before shipping; every tel: link uses this.
  phone: '+12098507623',        // digits only, E.164, for tel: + schema
  phoneDisplay: '(209) 850-ROAD', // what humans read, e.g. (707) 356-ROAD
  phoneDigits: '(209) 850-7623',   // literal digits, shown small as a fallback

  city: 'Stockton',
  county: 'San Joaquin County',
  state: 'CA',

  tagline: 'Around-the-clock tow and roadside dispatch for Stockton, Lodi, Manteca and Tracy.',
  metaDescription: '24/7 towing and roadside assistance dispatch for Stockton and San Joaquin County, covering I-5, Highway 99, I-205 and Highway 120. Call (209) 850-7623.',
  serviceAreaLine: 'Stockton, Lodi, Manteca, Tracy and the I-5 and Highway 99 corridors',
  zips: ['95202', '95203', '95204', '95205', '95206', '95207', '95209', '95210', '95212', '95215', '95219', '95240', '95242', '95258', '95336', '95337', '95330', '95304', '95376', '95377', '95391'],
  areaServed: ['Stockton CA', 'Lodi CA', 'Manteca CA', 'Tracy CA', 'San Joaquin County CA'],
  footerAreas: [
    { slug: 'stockton', name: 'Stockton' },
    { slug: 'lodi', name: 'Lodi' },
    { slug: 'manteca', name: 'Manteca' },
    { slug: 'tracy', name: 'Tracy' }
  ],

  hoursLine: 'Open 24 hours, 7 days a week',
  callBarLabel: '24/7 dispatch · Tap to call',
  opens: '00:00',
  closes: '23:59',

  // schema.org type: pick the most specific match for the trade:
  // Plumber, HVACBusiness, RoofingContractor, Locksmith, Electrician,
  // MovingCompany, PestControlService, AutoRepair, AutomotiveBusiness,
  // HousePainter, GeneralContractor, or LocalBusiness as a fallback.
  schemaType: 'AutomotiveBusiness',

  // If this is a dispatch/referral service rather than the licensed provider,
  // that MUST be disclosed here. Claiming to be the licensed operator when you
  // aren't is a misrepresentation.
  legalLine:
    'San Joaquin Towing is a local dispatch and referral service. Towing and roadside services are performed by licensed independent operators in San Joaquin County.',

  // Inline SVG for the square brand mark in the header (24x24 viewBox).
  brandMarkSvg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="12.5" y="2" width="5" height="6.5" rx="2.5"/><path d="M15 8.5v7a4 4 0 0 1-8 0v-1.5"/></svg>',

  gtag: '' // GA4 / call-tracking id, add when available
};

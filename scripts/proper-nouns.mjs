// Place names and other proper nouns that must never break across lines.
// scripts/typeset.mjs wraps every match on every page in <span class="pn">,
// which is white-space: nowrap. This rule outranks line fill and balance.
//
// Add new names here when copy mentions them. Patterns below already cover
// numbered routes, most street names, the phone number and dates.

// Multi-word names the patterns below would miss. Longest wins, so list a
// longer form ("San Joaquin County") alongside its shorter one ("San Joaquin").
export const NAMES = [
  'San Joaquin County', 'San Joaquin River', 'San Joaquin Towing', 'San Joaquin',
  'Central Valley', 'Bay Area', 'East Bay', 'Rio Vista', 'Mountain House',
  'River Islands', 'Weston Ranch', 'Lincoln Village', 'Lincoln Center',
  'Spanos Park', 'Miracle Mile', 'Port of Stockton', 'International Park of Commerce',
  'University of the Pacific', 'Stockton Police Department', 'Stockton Police',
  'Stockton Arena', 'Banner Island Ballpark', 'Great Wolf Lodge', 'Bass Pro Shops',
  'Bass Pro', 'Grape Festival', 'Lodi Lake', 'Altamont Pass', 'Hutchins Street Square',
  'Weberstown Mall', 'Sherwood Mall', 'Mokelumne River', 'Google Maps',
  'Big League Dreams', 'Class 8', 'Class A', 'Class C'
];

const STREET = '(?:Road|Lane|Avenue|Boulevard|Street|Parkway|Way|Drive|Freeway|Bypass)';
const CAP = "[A-Z][A-Za-z'-]*";

export const PATTERNS = [
  // Highway 99, Highway 120 Bypass, State Route 4, Interstate 5, I-5, CA 99
  /\b(?:Highway|Interstate|State Route|Route|CA)[  ]\d+(?:[  ]Bypass)?\b/,
  /\bI-\d+\b/,
  /\b\d+[  ]Bypass\b/,
  // Two or three capitalized words ending in a street type: Grant Line Road,
  // Lower Sacramento Road, Arch-Airport Road, Mountain House Parkway
  new RegExp(`\\b(?:${CAP}[ \\u00a0]){1,3}${STREET}\\b`),
  // Phone numbers: (209) 850-ROAD, (209) 850-7623
  /\(\d{3}\)[  ]\d{3}-[0-9A-Z]{4}\b/,
  // Dates: October 8, 2026
  /\b(?:January|February|March|April|May|June|July|August|September|October|November|December)[  ]\d{1,2}(?:,[  ]\d{4})?\b/,
  // ZIP 95202
  /\bZIP[  ]\d{5}\b/
];

// Leading words a street-name match must not swallow (sentence starts and
// prepositions that happen to be capitalized at the start of a sentence).
export const NOT_PART_OF_NAME = new Set([
  'The', 'A', 'An', 'On', 'In', 'At', 'From', 'To', 'Off', 'Near', 'Past', 'Via',
  'And', 'Or', 'Add', 'Covering', 'Inside', 'North', 'South', 'East', 'West',
  'Take', 'Use', 'Avoid', 'Many', 'Most', 'Downtown'
]);

# San Joaquin Towing site

Static Astro site. Posts live in `src/content/blog/`, page data in `src/data/`,
and hand-authored SVG diagrams in `public/img/`.

## Writing rules

- **No em dashes, anywhere.** Not in posts, page copy, titles, descriptions,
  alt text, SVG labels, or code comments. Use a comma, colon, period, or
  parentheses instead. En dashes in number ranges ("20–30 minutes") are fine.
- Don't type `--` in Markdown either: the build converts two hyphens into an
  em dash.
- This is enforced: `npm run build` runs `scripts/check-em-dashes.mjs`
  afterward and fails if any em dash is found in `src/`, `public/`, or the
  built `dist/`. Run it on its own with `npm run check:dashes`.

## Blog posts

- One target search phrase per post, grounded in local roads and places.
- Title at most 45 characters (the layout appends " | San Joaquin Towing").
- Description at most 155 characters.
- Every post gets an SVG diagram in `public/img/`, embedded with descriptive
  alt text, in the same style as the other diagrams.

## Line breaks

**Proper nouns never break across lines.** Place names and other proper nouns
(San Joaquin County, Highway 99, Grant Line Road, (209) 850-ROAD) are wrapped in
`<span class="pn">` (nowrap) on every page at build time. The list and patterns
live in `scripts/proper-nouns.mjs`, so add new multi-word names there when copy
mentions them. This outranks line fill and balance: if a bound name cannot fit,
shrink or reword around it, never unbind it. The phone h1 scales so
"San Joaquin County," always fits.

House rule: text is ragged-right (never justified), with no lone last word, no
stubby last line, and no sentence starting or ending within two words of a line
edge. Three layers enforce it:

- `scripts/typeset.mjs` runs after every build and joins the three words either
  side of each sentence break, plus the last two words of each block, with
  no-break spaces.
- An inline script at the end of `src/layouts/Base.astro` re-fits each
  paragraph at the reader's width: joined or unjoined text, at tiny
  letter-spacing steps, whichever scores best.
- Short card blurbs render one sentence per line via `sentences()` in
  `src/lib/text.ts`.

When copy changes, check wraps at 1280, 768 and 375px. Fix what remains by
rewording, not by more CSS.

## Illustrations

The SVGs in `public/img/` share one vocabulary: asphalt night sky, tule fog
bands, orchard rows, flare-orange wrecker, guide-sign green labels, Interstate
and California route shields. Keep new drawings in that language.

// Differentiators shown across the site. Process claims only: everything here
// describes how a call is handled, not stats or credentials we cannot back up.
export const TRUST = [
  {
    label: 'A person answers',
    text: 'A live dispatcher picks up 24/7. There is no phone tree and no voicemail box.'
  },
  {
    label: 'Quote first',
    text: 'You hear the full quote on the call. If it does not work for you, say no and nothing is owed.'
  },
  {
    label: 'An honest ETA',
    text: 'You get a real arrival estimate based on where the nearest operator is, not a guess to keep you on the line.'
  },
  {
    label: 'Licensed operators',
    text: 'Work is done by licensed independent tow operators who drive these roads every day.'
  }
];

// ⚠️ TESTIMONIALS: READ BEFORE EDITING
// Publishing invented reviews as if they were real customers is deceptive and,
// since the FTC's 2024 rule on consumer reviews, carries real legal exposure.
// Leave this array EMPTY until the operator supplies genuine, permissioned
// quotes. The home page hides the section when it's empty, so shipping with
// nothing here is safe and honest.
export const REVIEWS: { quote: string; name: string; place: string }[] = [];

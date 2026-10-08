// Split a short blurb into sentences so each can sit on its own line. Two
// sentences sharing a short card wrap badly; one per line reads cleanly.
export function sentences(text: string): string[] {
  return text.match(/[^.?!]+[.?!]+["')]?(\s+|$)|[^.?!]+$/g)?.map((s) => s.trim()).filter(Boolean) ?? [text];
}

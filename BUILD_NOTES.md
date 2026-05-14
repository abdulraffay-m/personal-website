# BUILD_NOTES.md

A record of guesses and decisions made during the build.

---

- guessed `nextAnniversary: '2027-05-14'` — one year from now (Phase 1, content/placeholders.ts) — confirm with ibrahim
- guessed Pakistan-region map SVG positions; if places are outside Pakistan, adjust xPct/yPct in content/places.ts (Phase 10, sections/MemoryMap.tsx)
- playlist uses generic popular songs as placeholders; Ibrahim should swap all URLs in content/playlist.ts (Phase 9)
- intro envelope wax seal uses 'Z' (Zarpash's initial); change `her.initial` in content/placeholders.ts or people.ts (Phase 3)
- `metAt` is set to '2023-11-12' as a reasonable guess; Ibrahim should update in people.ts (Phase 1)
- music files (ambient.mp3, envelope-open.mp3, etc.) are expected in public/music/ — site degrades gracefully if absent (Phase 2)
- SpinVinyL on playlist rows uses a CSS class approach; on hover, the inline style overrides to spin (Phase 9)
- The secret page does not appear in site nav; only the flower in Outro routes to it (Phase 13)

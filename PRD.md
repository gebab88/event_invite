# PRD — Dinner at ours

## 1. Summary
A one-page, single-screen React invite that sets the mood for an intimate dinner. The page is static, calm, and read-only: a host opens it, sends the link to a small group of guests, and each guest sees everything they need in a single glance — no scrolling required on a typical phone, no interactions beyond tapping the address to open maps.

## 2. Goals
- Convey warmth and intimacy in the first second of viewing.
- Give guests the four facts they need (date, time, place, menu) without friction.
- Load instantly on mobile over a weak connection.
- Stay private: no analytics, no third-party scripts, no data collection.

## 3. Non-goals
- No RSVP form, login, or guest list.
- No analytics, tracking pixels, or cookies.
- No calendar integration, share buttons, or notification logic.
- No multi-page navigation, routing, or admin UI.
- No dark mode toggle, language switcher, or theming controls.

## 4. Target user
A guest invited to a small (4–10 person) home dinner, opening the link on their phone, likely while doing something else. They want to confirm logistics in under five seconds and put the phone back down.

## 5. User story
> As an invited guest, I open the link and immediately see who's hosting, when and where to come, and what we'll be eating — so I can plan my evening and tap once to get directions.

## 6. Scope — the single screen
Top to bottom, one column, centered:

1. **Small image** at the top (decorative — table setting, candle, or similar).
2. **Heading** — "Dinner at ours" in a warm serif.
3. **Host note** — one short sentence, personal tone.
4. **Date** — e.g. "Friday, 6 June".
5. **Time** — e.g. "19:30".
6. **Address** — full street address, rendered as a tappable link that opens the device's default maps app (`https://maps.apple.com/?q=...` on iOS / `https://maps.google.com/?q=...` everywhere else, or a universal `geo:` / query-encoded link).
7. **Menu** — exactly three lines (starter / main / dessert), each on its own line, no bullets.
8. **Closing thank-you** — one short sentence.

## 7. Visual & tone
- **Background**: soft cream (`#F8F1E7` or similar).
- **Headings**: warm serif (e.g. Cormorant Garamond, Playfair Display, or system serif fallback).
- **Body**: comfortable serif or humanist sans, generous line height.
- **Spacing**: large vertical rhythm; the page should feel like a printed card, not a webpage.
- **Color accents**: minimal — perhaps one muted accent for the address link.
- **No animations**, no hover effects beyond a simple link underline.

## 8. Technical
- **Framework**: React, scaffolded via Create React App.
- **Output**: a static site — `npm run build` produces a folder deployable to any static host (Netlify, Vercel static, GitHub Pages, S3).
- **Single component**: one `App.jsx` containing the entire invite; content lives in plain JSX (or a small const at the top), not a CMS.
- **Image**: a single asset in `/public`, referenced by relative path.
- **Fonts**: either system serifs (zero network cost) or one self-hosted webfont; no Google Fonts CDN (privacy).
- **No router**, no state management, no API calls.
- **No third-party scripts** of any kind.

## 9. Accessibility
- Semantic HTML (`<h1>`, `<address>`, `<a>`).
- Color contrast meets WCAG AA on the cream background.
- The maps link has clear link text (the address itself), not "click here".
- Image has descriptive `alt` text, or `alt=""` if purely decorative.
- Page is fully readable with CSS disabled.

## 10. Responsive behavior
- Mobile-first; designed for a 375px-wide viewport.
- On wider screens, content is centered in a max-width column (~480px) so it never feels stretched.
- No horizontal scroll at any width.

## 11. Performance budget
- Total page weight under 200 KB (excluding the one image).
- Time to first contentful paint under 1s on 4G.
- No render-blocking third-party requests.

## 12. Acceptance criteria
- [ ] Opening the page on a phone shows image, heading, host note, date, time, address, menu, and thank-you without scrolling (or with only a short scroll).
- [ ] Tapping the address opens the native maps app with the location pre-filled.
- [ ] No network requests to any third-party domain (verifiable in DevTools Network tab).
- [ ] No cookies set, no `localStorage` written.
- [ ] Lighthouse Accessibility score ≥ 95.
- [ ] `npm run build` produces a deployable static bundle.

## 13. Out of scope (future, if ever)
- A second page for directions or parking notes.
- An RSVP capture (would require a backend and break the privacy promise).
- Multiple invites from one codebase (templating).

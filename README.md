# TrueDeal

[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/Kegelapan-ai/black-friday-deal-finder-01/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/Kegelapan-ai/black-friday-deal-finder-01/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

**TrueDeal** is a real Black Friday deal finder: 25 deals from Amazon, Best Buy and Walmart, each checked on 27 Nov 2026 (13:25 WIB / 06:25 UTC) with its sale price, usual price, store link, the source that showed the price, and a verdict on whether it is really a deal — REAL DEAL, STRONG, GOOD, ROUTINE or WEAK, decided by a fixed rule from the discount, never by hype.

Search for a product, filter by category, store and minimum discount, sort by biggest discount, biggest saving or price, and open any deal for its full breakdown. The verdict is honest in both directions: AirPods Pro 3 at $149 (was $249, Walmart) is a REAL DEAL, while Apple TV 4K at $289 (was $299) is labelled WEAK.

## Run it

```sh
node serve.ts
```

Then open http://localhost:8080 in a desktop browser, or open `app/index.html` directly. No build step, no network request: the site is plain static files under `app/`.

## Files

- `main.ts` — the entry program: copies `app/` and `screenshots/` to the output directory and writes `dossier.json` with the vendored make.fun library.
- `app/index.html` — the site, opened in a desktop browser or on a phone.
- `app/data.js` — the 24 checked deals, with store, category, sale price, usual price, store link, source and evidence note for each.
- `app/main.js` — search, filters, sorting, list and deal-detail views.
- `app/style.css` — the whole look, desktop and phone.
- `screenshots/` — real renders of the site's own code.

## Screenshots

1. `1-deals.jpg` — all deals at desktop size.
2. `2-deal.jpg` — one deal in detail (AirPods Pro 3 at Walmart).
3. `3-filtered.jpg` — the list filtered to 40% off or more.
4. `4-phone.jpg` — the list on a phone.

---

<sub>Entered on [make.fun](https://make.fun/?ref=okok&utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01) · AI agents build software for cash rewards</sub>

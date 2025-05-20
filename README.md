# ✈️ data-snippets

A collection of useful JSON files, filters, and helper scripts — mostly related to travel (airports, countries, etc.), with a few handy utility functions mixed in. I put this together for personal projects but figured it might be useful to others too.

---

## 📁 What's Inside

### `airports/`
- `airports-full.original.json` – Full global airport list
- `airports-trimmed.commercial.json` – Trimmed list (just large & medium commercial airports with IATA codes)
- `trim-airports.js` – Script to filter and simplify the full list
- `get-airport-flag.js` – Adds a flag emoji to each airport based on country

### `countries/`
- `country-phone-codes.original.json` – Country names, dial codes, and flag emojis
- `country-emoji-map.generated.json` – Just the emoji lookup (code → emoji)
- `validate-country-emojis.js` – Checks that the emoji generation function matches known flags

### `utils/`
- `getFlagEmoji.ts` – Converts ISO country codes to flag emojis (🇺🇸 style)
- `mergeByKey.ts` – Simple helper to join two arrays of objects on a shared key
- `debounce.ts` – Lightweight debounce function for input fields

---

## ⚠️ About Licensing

This repo pulls together data from a few public sources and contributors who shared their JSON freely online. I'm sharing it in the same spirit — feel free to use, adapt, or remix anything here.

That said, I can't guarantee the original licenses of every dataset, so if you're using it for anything serious or public-facing, double-check the source data and attribution as needed.

---

## 🛠 Why This Exists

Mostly just to save myself time. I got tired of rewriting the same filter scripts or digging around for airport data. Now it’s all in one place — and if you find it useful too, awesome.

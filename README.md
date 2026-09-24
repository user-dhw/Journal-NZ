# Travel Journal · 旅行日记

A bilingual, source-controlled personal travel journal built with React, TypeScript, Vite and Tailwind CSS. Journal entries are data files rather than page components, so the upcoming plans, history timeline, archive, places index and year pages all update from one source.

## Development

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal. Open that URL in a browser.

## Production build

```bash
npm run build
```

The compiled site is written to `dist/`.

## Project structure

```text
src/
  components/       Reusable journal UI
  config/site.ts    Website name, subtitle and hero image
  data/journal/     One TypeScript file per journal entry
  hooks/            Language state and persistence
  layouts/          Shared site shell
  locales/          English and Chinese interface copy
  pages/            Route-level pages
  types/journal.ts  Journal data types
  utils/            Dates, status, search, grouping, maps and places
```

## Add a new journal entry

1. Copy `src/data/journal/example-entry.ts` or an existing entry.
2. Give the entry a unique `id` and URL-safe `slug`.
3. Update its dates, bilingual title, locations, tags and optional sections.
4. Export the entry from `src/data/journal/index.ts` and add it to `journalEntries`.

No page component needs to change. The homepage upcoming plans and history timeline, full archive, place index and yearly archive derive their content from `journalEntries`.

## Bilingual content

User-facing journal copy uses the shared `LocalizedText` type:

```ts
title: {
  en: 'Rotorua Geothermal Day',
  zh: 'Rotorua 地热温泉一日游',
}
```

Use `getLocalizedText()` when rendering bilingual data. Interface translations live in `src/locales/en.ts` and `src/locales/zh.ts`. The chosen language is stored under `travel-journal-language` in `localStorage`.

## Add days and timeline items

Add a `days` array to an entry. Each day can define its own route and timeline. Timeline items support time, location, description, duration, distance, image, tags, warning, links, featured emphasis and a flexible-time marker.

Sections with no data are not rendered, so a short memory can contain only a title, date and paragraph while a road trip can contain many days.

## Add photos

Add objects to the entry's `photos` array. Set `src` in the data file so replacing a destination reference photo with a personal photograph only requires changing that URL. Set `date` to the matching itinerary day so the photograph appears only with that Day tab. Optional `orientation` values are `wide`, `landscape` and `portrait`.

Images use a reusable fallback. A failed image remains a stable, labelled block instead of collapsing the layout.

## Add costs

Add items to `costs` with a matching itinerary `date`, currency, per-person amount and optional official `url`. Costs appear only with their Day tab, and each linked item opens its current official price.

## Add timeline links

Relevant links belong on individual timeline items so they stay beside the activity they support. Supported types are `official`, `maps`, `booking`, `weather`, `marine` and `reference`. External links automatically open in a new tab with safe link attributes.

Use `createGoogleMapsLocationUrl()` and `createGoogleMapsDirectionsUrl()` from `src/utils/maps.ts` for standard Google Maps URLs. No Maps API key is required.

## Automatic status

Do not store `upcoming`, `current` or `past` in an entry. `getJournalStatus()` compares today with `startDate` and `endDate`:

- before `startDate`: Upcoming
- from `startDate` through `endDate`: On the Road
- after `endDate`: Past Journey

When `endDate` is missing, the entry is treated as a one-day journey. Plans automatically move into the historical archive after their date; nothing is deleted or hidden.

## Timeline and yearly archives

Years and months are derived from entry dates. The homepage sorts future plans by departure date and moves completed journeys into its history timeline automatically. `/year/:year` only renders months containing entries; the legacy `/calendar` URL redirects to the homepage history section.

## Maintaining future trips

Keep one journey per file, keep all changeable content in that file, and leave page components generic. Add personal photos, actual costs and memories to the same entry after returning so the original plan remains part of the record.

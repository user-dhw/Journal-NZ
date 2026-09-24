import type { JournalEntry, JournalStatus } from '../types/journal'
import { getJournalStatus } from './status'

const placeRegions: Record<string, string> = {
  Hamilton: 'Waikato',
  Waihi: 'Bay of Plenty',
  'Homunga Bay': 'Bay of Plenty',
  Rotorua: 'Bay of Plenty',
  'Wai-O-Tapu': 'Bay of Plenty',
  'Waikite Valley': 'Bay of Plenty',
}

export type PlaceSummary = {
  name: string
  region: string
  visits: number
  firstVisit: string
  latestVisit: string
  status: Extract<JournalStatus, 'upcoming' | 'past'>
  entries: JournalEntry[]
}

export function buildPlaceSummaries(entries: JournalEntry[]) {
  const placeMap = new Map<string, JournalEntry[]>()
  entries.forEach((entry) => {
    entry.locations.forEach((place) => {
      placeMap.set(place, [...(placeMap.get(place) ?? []), entry])
    })
  })

  return Array.from(placeMap.entries())
    .map<PlaceSummary>(([name, relatedEntries]) => {
      const dates = relatedEntries.map((entry) => entry.startDate).sort()
      const hasPastVisit = relatedEntries.some((entry) => getJournalStatus(entry) === 'past')
      return {
        name,
        region: placeRegions[name] ?? 'Other',
        visits: relatedEntries.length,
        firstVisit: dates[0],
        latestVisit: dates[dates.length - 1],
        status: hasPastVisit ? 'past' : 'upcoming',
        entries: relatedEntries,
      }
    })
    .sort((a, b) => a.region.localeCompare(b.region) || a.name.localeCompare(b.name))
}

export function groupPlacesByRegion(places: PlaceSummary[]) {
  return places.reduce<Record<string, PlaceSummary[]>>((groups, place) => {
    groups[place.region] = [...(groups[place.region] ?? []), place]
    return groups
  }, {})
}

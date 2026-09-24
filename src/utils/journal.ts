import { compareAsc, compareDesc, parseISO } from 'date-fns'
import type { JournalEntry, Language } from '../types/journal'
import { getLocalizedText } from './localization'

export function sortEntries(entries: JournalEntry[], direction: 'asc' | 'desc' = 'desc') {
  return [...entries].sort((a, b) =>
    direction === 'desc'
      ? compareDesc(parseISO(a.startDate), parseISO(b.startDate))
      : compareAsc(parseISO(a.startDate), parseISO(b.startDate)),
  )
}

export function groupEntriesByYear(entries: JournalEntry[]) {
  return sortEntries(entries).reduce<Record<string, JournalEntry[]>>((groups, entry) => {
    const year = entry.startDate.slice(0, 4)
    groups[year] = [...(groups[year] ?? []), entry]
    return groups
  }, {})
}

export function groupEntriesByMonth(entries: JournalEntry[]) {
  return sortEntries(entries).reduce<Record<string, JournalEntry[]>>((groups, entry) => {
    const month = entry.startDate.slice(5, 7)
    groups[month] = [...(groups[month] ?? []), entry]
    return groups
  }, {})
}

export function getJournalYears(entries: JournalEntry[]) {
  return Array.from(new Set(entries.map((entry) => entry.startDate.slice(0, 4)))).sort(
    (a, b) => Number(b) - Number(a),
  )
}

export function getTags(entries: JournalEntry[]) {
  return Array.from(new Set(entries.flatMap((entry) => entry.tags ?? []))).sort()
}

export function getPlaces(entries: JournalEntry[]) {
  return Array.from(new Set(entries.flatMap((entry) => entry.locations))).sort()
}

export function searchEntries(entries: JournalEntry[], query: string, language: Language) {
  const normalized = query.trim().toLocaleLowerCase()
  if (!normalized) return entries
  return entries.filter((entry) => {
    const content = [
      getLocalizedText(entry.title, language),
      getLocalizedText(entry.summary, language),
      entry.startDate.slice(0, 4),
      ...entry.locations,
      ...(entry.tags ?? []),
    ]
      .join(' ')
      .toLocaleLowerCase()
    return content.includes(normalized)
  })
}

import type { JournalEntry } from '../../types/journal'
import { homungaRotorua2026 } from './homunga-rotorua-2026'

export const journalEntries: JournalEntry[] = [homungaRotorua2026]

export function getJournalEntry(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug)
}

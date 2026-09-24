import { endOfDay, isAfter, isBefore, parseISO, startOfDay } from 'date-fns'
import type { JournalEntry, JournalStatus } from '../types/journal'

export function getJournalStatus(
  entry: JournalEntry,
  today = new Date(),
): JournalStatus {
  const currentDay = startOfDay(today)
  const startDate = startOfDay(parseISO(entry.startDate))
  const endDate = endOfDay(parseISO(entry.endDate ?? entry.startDate))

  if (isBefore(currentDay, startDate)) return 'upcoming'
  if (isAfter(currentDay, endDate)) return 'past'
  return 'current'
}

import type { JournalEntry } from '../../types/journal'

/**
 * Copy this shape into a new file, complete the fields you need, then export it
 * from index.ts. Empty optional sections are automatically hidden in the UI.
 */
export const exampleEntry: JournalEntry = {
  id: 'example-entry',
  slug: 'example-entry',
  title: { en: 'Journey title', zh: '旅程标题' },
  summary: { en: 'A short journal summary.', zh: '一段简短的旅行摘要。' },
  startDate: '2027-01-01',
  type: 'journey',
  locations: ['Place'],
  tags: ['Tag'],
}

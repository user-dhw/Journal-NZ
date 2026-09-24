import type { Language, LocalizedText } from '../types/journal'

export function getLocalizedText(
  value: LocalizedText | undefined,
  language: Language,
): string {
  if (!value) return ''
  return value[language] || value.en
}

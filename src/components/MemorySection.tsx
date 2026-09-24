import { Heart, NotebookText } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import type { JournalEntry } from '../types/journal'
import { getLocalizedText } from '../utils/localization'

export function MemorySection({ memories }: { memories: NonNullable<JournalEntry['memories']> }) {
  const { language, t } = useLanguage()
  if (!memories.summary && !memories.favoriteMoment && !memories.notes) return null

  return (
    <section className="detail-section memory-section">
      <div className="section-kicker-row">
        <p className="eyebrow">{t.memories}</p>
        <h2 className="section-heading">{t.reflection}</h2>
      </div>
      <div className="memory-grid">
        {memories.summary && (
          <article>
            <NotebookText aria-hidden="true" />
            <h3>{t.travelNotes}</h3>
            <p>{getLocalizedText(memories.summary, language)}</p>
          </article>
        )}
        {memories.favoriteMoment && (
          <article>
            <Heart aria-hidden="true" />
            <h3>{t.favoriteMoment}</h3>
            <p>{getLocalizedText(memories.favoriteMoment, language)}</p>
          </article>
        )}
        {memories.notes && (
          <article>
            <NotebookText aria-hidden="true" />
            <h3>{t.notes}</h3>
            <p>{getLocalizedText(memories.notes, language)}</p>
          </article>
        )}
      </div>
    </section>
  )
}

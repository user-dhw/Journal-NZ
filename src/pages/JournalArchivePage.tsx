import { JournalCard } from '../components/JournalCard'
import { journalEntries } from '../data/journal'
import { useLanguage } from '../hooks/useLanguage'
import { sortEntries } from '../utils/journal'

export function JournalArchivePage() {
  const { language, t } = useLanguage()
  const entries = sortEntries(journalEntries)

  return (
    <div className="page-body journal-index-page">
      <header className="site-shell journal-index-header">
        <div>
          <p className="eyebrow">{t.journal}</p>
          <h1>{t.journeys}</h1>
        </div>
        <p>{journalEntries.length.toString().padStart(2, '0')} {language === 'zh' ? '段旅程' : journalEntries.length === 1 ? 'journey' : 'journeys'}</p>
      </header>
      <section className="site-shell archive-grid archive-grid-simple">
        {entries.map((entry) => <JournalCard entry={entry} key={entry.id} />)}
      </section>
    </div>
  )
}

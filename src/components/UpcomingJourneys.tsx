import { ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import type { JournalEntry } from '../types/journal'
import { formatDateRange } from '../utils/dates'
import { getLocalizedText } from '../utils/localization'
import { NextJourney } from './NextJourney'
import { StatusBadge } from './StatusBadge'
import { getJournalStatus } from '../utils/status'

export function UpcomingJourneys({ entries }: { entries: JournalEntry[] }) {
  const { language, t } = useLanguage()
  if (entries.length === 0) return null
  const [nextEntry, ...laterEntries] = entries

  return (
    <section className="site-shell upcoming-section" aria-labelledby="upcoming-title">
      <header className="home-section-header">
        <div>
          <h2 id="upcoming-title">{t.upcomingPlans}</h2>
        </div>
        <p>{t.upcomingPlansNote}</p>
      </header>
      <NextJourney entry={nextEntry} />

      {laterEntries.length > 0 && (
        <div className="later-plans">
          {laterEntries.map((entry) => (
            <Link className="later-plan-row" to={`/journal/${entry.slug}`} key={entry.id}>
              <CalendarDays aria-hidden="true" size={19} />
              <time>{formatDateRange(entry.startDate, entry.endDate, language)}</time>
              <strong>{getLocalizedText(entry.title, language)}</strong>
              <StatusBadge status={getJournalStatus(entry)} />
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

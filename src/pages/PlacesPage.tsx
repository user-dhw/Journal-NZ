import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { StatusBadge } from '../components/StatusBadge'
import { journalEntries } from '../data/journal'
import { useLanguage } from '../hooks/useLanguage'
import { formatDateRange } from '../utils/dates'
import { sortEntries } from '../utils/journal'
import { getLocalizedText } from '../utils/localization'
import { getJournalStatus } from '../utils/status'

export function PlacesPage() {
  const { language, t } = useLanguage()
  const journeys = sortEntries(journalEntries)
  const placeCount = new Set(journalEntries.flatMap((entry) => entry.locations)).size

  return (
    <div className="page-body places-page">
      <header className="site-shell places-route-header">
        <div>
          <h1>{t.places}</h1>
        </div>
        <p>{placeCount} {language === 'zh' ? '个停靠点' : placeCount === 1 ? 'stop' : 'stops'} · {journeys.length} {language === 'zh' ? '段旅程' : journeys.length === 1 ? 'journey' : 'journeys'}</p>
      </header>
      <div className="site-shell places-route-list">
        {journeys.map((entry) => (
          <section className="places-journey" key={entry.id}>
            <header>
              <div>
                <div className="places-journey-meta">
                  <StatusBadge status={getJournalStatus(entry)} />
                  <time>{formatDateRange(entry.startDate, entry.endDate, language)}</time>
                </div>
                <h2>{getLocalizedText(entry.title, language)}</h2>
              </div>
              <Link to={`/journal/${entry.slug}`}>
                {language === 'zh' ? '查看旅程' : 'View journey'}<ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </header>
            <ol className="places-route-track">
              {entry.locations.map((place, index) => (
                <li key={place}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{place}</strong>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}

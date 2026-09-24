import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import type { JournalEntry } from '../types/journal'
import { formatDateRange } from '../utils/dates'
import { getLocalizedText } from '../utils/localization'
import { getJournalStatus } from '../utils/status'
import { JournalImage } from './JournalImage'
import { StatusBadge } from './StatusBadge'

export function JournalCard({ entry }: { entry: JournalEntry }) {
  const { language } = useLanguage()
  return (
    <article className="journal-card">
      {entry.coverImage && (
        <Link to={`/journal/${entry.slug}`} className="journal-card-image-link" tabIndex={-1}>
          <JournalImage src={entry.coverImage} alt="" className="journal-card-image" />
        </Link>
      )}
      <div className="journal-card-content">
        <div className="journal-card-meta">
          <time>{formatDateRange(entry.startDate, entry.endDate, language)}</time>
          <StatusBadge status={getJournalStatus(entry)} />
        </div>
        <h2><Link to={`/journal/${entry.slug}`}>{getLocalizedText(entry.title, language)}</Link></h2>
        <p>{getLocalizedText(entry.summary, language)}</p>
        <div className="journal-card-footer">
          <span>{entry.locations.slice(0, 3).join(' · ')}</span>
          <Link to={`/journal/${entry.slug}`} aria-label={getLocalizedText(entry.title, language)}>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}

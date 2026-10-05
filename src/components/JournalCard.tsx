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
    <Link className="journal-card" to={`/journal/${entry.slug}`} aria-label={getLocalizedText(entry.title, language)}>
      {entry.coverImage && (
        <div className="journal-card-image-link">
          <JournalImage src={entry.coverImage} alt="" className="journal-card-image" />
        </div>
      )}
      <div className="journal-card-content">
        <div className="journal-card-meta">
          <time>{formatDateRange(entry.startDate, entry.endDate, language)}</time>
          <StatusBadge status={getJournalStatus(entry)} />
        </div>
        <h2>{getLocalizedText(entry.title, language)}</h2>
        <p>{getLocalizedText(entry.summary, language)}</p>
        <div className="journal-card-footer">
          <span>{entry.locations.slice(0, 3).join(' · ')}</span>
          <span className="card-cta" aria-hidden="true">{language === 'zh' ? '查看旅程' : 'View journey'}<ArrowUpRight size={17} /></span>
        </div>
      </div>
    </Link>
  )
}

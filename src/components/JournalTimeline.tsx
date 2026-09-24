import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import type { JournalEntry } from '../types/journal'
import { formatDateRange, formatMonth } from '../utils/dates'
import { groupEntriesByMonth, groupEntriesByYear } from '../utils/journal'
import { getLocalizedText } from '../utils/localization'
import { getJournalStatus } from '../utils/status'
import { JournalImage } from './JournalImage'
import { StatusBadge } from './StatusBadge'

export function JournalTimeline({ entries, compact = false }: { entries: JournalEntry[]; compact?: boolean }) {
  const { language, t } = useLanguage()
  const reduceMotion = useReducedMotion()
  const byYear = groupEntriesByYear(entries)

  return (
    <div className={compact ? 'journal-timeline is-compact' : 'journal-timeline'}>
      {Object.entries(byYear).map(([year, yearEntries]) => (
        <section className="timeline-year" key={year}>
          <header className="year-heading">
            <span>{t.archive}</span>
            <Link to={`/year/${year}`}>{year}<ArrowUpRight aria-hidden="true" size={18} /></Link>
          </header>
          {Object.entries(groupEntriesByMonth(yearEntries)).map(([month, monthEntries]) => (
            <div className="timeline-month" key={`${year}-${month}`}>
              <h3>{formatMonth(monthEntries[0].startDate, language)}</h3>
              <div className="month-entries">
                {monthEntries.map((entry) => (
                  <motion.article
                    className="journal-timeline-entry"
                    key={entry.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                  >
                    <div className="entry-date">
                      <time dateTime={entry.startDate}>{formatDateRange(entry.startDate, entry.endDate, language)}</time>
                    </div>
                    <span className="entry-marker" aria-hidden="true" />
                    <Link className="entry-body" to={`/journal/${entry.slug}`}>
                      <div className="entry-copy">
                        <div className="entry-title-row">
                          <h4>{getLocalizedText(entry.title, language)}</h4>
                          <StatusBadge status={getJournalStatus(entry)} />
                        </div>
                        <p>{getLocalizedText(entry.summary, language)}</p>
                        <div className="tag-list compact-tags">
                          {entry.tags?.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
                        </div>
                      </div>
                      {!compact && entry.coverImage && (
                        <JournalImage
                          src={entry.coverImage}
                          alt={getLocalizedText(entry.title, language)}
                          className="entry-thumbnail"
                        />
                      )}
                      <ArrowUpRight className="entry-arrow" aria-hidden="true" />
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}

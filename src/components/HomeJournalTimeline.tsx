import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import type { JournalEntry } from '../types/journal'
import { getDateStampParts, formatMonth } from '../utils/dates'
import { groupEntriesByMonth, groupEntriesByYear } from '../utils/journal'
import { getLocalizedText } from '../utils/localization'
import { JournalImage } from './JournalImage'

export function HomeJournalTimeline({ entries }: { entries: JournalEntry[] }) {
  const { language } = useLanguage()
  const reduceMotion = useReducedMotion()
  const grouped = groupEntriesByYear(entries)

  return (
    <div className="home-journal-timeline">
      {Object.entries(grouped).map(([year, yearEntries]) => (
        <section className="home-journal-year" key={year}>
          <Link className="home-year-link" to={`/year/${year}`}>{year}</Link>
          {Object.entries(groupEntriesByMonth(yearEntries)).map(([month, monthEntries]) => (
            <div className="home-journal-month" key={`${year}-${month}`}>
              <h3>{formatMonth(monthEntries[0].startDate, language)}</h3>
              <div className="home-month-entries">
                {monthEntries.map((entry) => {
                  const date = getDateStampParts(entry.startDate, entry.endDate)
                  const previewPhoto = entry.photos?.[1] ?? entry.photos?.[0]
                  return (
                    <motion.article
                      className="home-timeline-entry"
                      key={entry.id}
                      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.45 }}
                    >
                      <time className="home-entry-date" dateTime={entry.startDate}>
                        <strong>{date.day}</strong>
                        <span>{date.month}</span>
                      </time>
                      <span className="home-entry-marker" aria-hidden="true" />
                      <Link className="home-entry-content" to={`/journal/${entry.slug}`}>
                        <h4>{getLocalizedText(entry.title, language)}</h4>
                        <p>{getLocalizedText(entry.excerpt ?? entry.summary, language)}</p>
                        {(previewPhoto?.src ?? entry.coverImage) && (
                          <JournalImage
                            src={previewPhoto?.src ?? entry.coverImage ?? ''}
                            alt=""
                            className="home-entry-photo"
                          />
                        )}
                        <div className="home-entry-footer">
                          <div className="tag-list compact-tags">
                            {(entry.featuredTags ?? entry.tags?.slice(0, 3))?.map((tag) => <span key={tag}>{tag}</span>)}
                          </div>
                          <ArrowRight aria-hidden="true" size={18} />
                        </div>
                      </Link>
                    </motion.article>
                  )
                })}
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}

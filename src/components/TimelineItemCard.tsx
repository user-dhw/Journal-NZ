import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { AlertTriangle, ChevronDown, Clock3, MapPin, Route } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import type { TimelineItem } from '../types/journal'
import { getLocalizedText } from '../utils/localization'
import { JournalImage } from './JournalImage'
import { UsefulLinks } from './UsefulLinks'

export function TimelineItemCard({ item }: { item: TimelineItem }) {
  const { language, t } = useLanguage()
  const [expanded, setExpanded] = useState(item.featured ?? false)
  const reduceMotion = useReducedMotion()
  const hasDetails = Boolean(
    item.description || item.warning || item.links?.length || item.image || item.duration || item.distance,
  )

  return (
    <motion.article
      className={`day-timeline-item ${item.featured ? 'is-featured' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="timeline-dot" aria-hidden="true" />
      <div className="timeline-time">
        <time>{item.time ?? '—'}</time>
        {item.featured && <span>{t.timeCritical}</span>}
      </div>
      <div className="timeline-content">
        <div className="timeline-content-header">
          <div>
            <h3>{getLocalizedText(item.title, language)}</h3>
            {item.location && (
              <p className="timeline-location"><MapPin aria-hidden="true" size={14} />{item.location}</p>
            )}
          </div>
          {hasDetails && (
            <button
              type="button"
              className="details-toggle"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
            >
              <span>{expanded ? t.hideDetails : t.details}</span>
              <ChevronDown aria-hidden="true" size={17} className={expanded ? 'rotate-180' : ''} />
            </button>
          )}
        </div>

        {(item.tags?.length || item.flexible) && (
          <div className="tag-list compact-tags">
            {item.flexible && <span>{t.flexible}</span>}
            {item.tags?.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        )}

        <AnimatePresence initial={false}>
          {expanded && hasDetails && (
            <motion.div
              className="timeline-details"
              initial={reduceMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {item.image && (
                <JournalImage
                  src={item.image}
                  alt={getLocalizedText(item.title, language)}
                  className="timeline-image"
                />
              )}
              {item.description && <p>{getLocalizedText(item.description, language)}</p>}
              {(item.duration || item.distance) && (
                <div className="timeline-metrics">
                  {item.duration && <span><Clock3 aria-hidden="true" size={15} />{t.duration}: {item.duration}</span>}
                  {item.distance && <span><Route aria-hidden="true" size={15} />{t.distance}: {item.distance}</span>}
                </div>
              )}
              {item.warning && (
                <aside className="warning-note">
                  <AlertTriangle aria-hidden="true" size={18} />
                  <p>{getLocalizedText(item.warning, language)}</p>
                </aside>
              )}
              {item.links?.length ? <UsefulLinks links={item.links} title={false} /> : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

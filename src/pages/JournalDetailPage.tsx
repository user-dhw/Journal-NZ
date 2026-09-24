import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, MapPinned } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CostSummary } from '../components/CostSummary'
import { DaySelector } from '../components/DaySelector'
import { DayTimeline } from '../components/DayTimeline'
import { JournalGallery } from '../components/JournalGallery'
import { JournalImage } from '../components/JournalImage'
import { MemorySection } from '../components/MemorySection'
import { StatusBadge } from '../components/StatusBadge'
import { TripRoute } from '../components/TripRoute'
import { getJournalEntry } from '../data/journal'
import { useLanguage } from '../hooks/useLanguage'
import { formatDateRange } from '../utils/dates'
import { getLocalizedText } from '../utils/localization'
import { getJournalStatus } from '../utils/status'
import { NotFoundPage } from './NotFoundPage'

export function JournalDetailPage() {
  const { slug } = useParams()
  const { language, t } = useLanguage()
  const reduceMotion = useReducedMotion()
  const [activeDay, setActiveDay] = useState(0)
  const entry = slug ? getJournalEntry(slug) : undefined

  const overviewRoute = useMemo(() => {
    if (!entry) return []
    const firstRoute = entry.days?.[0]?.route ?? entry.locations
    const lastRoute = entry.days?.at(-1)?.route ?? []
    const combined = [...firstRoute, ...lastRoute]
    return combined.filter((place, index) => index === 0 || place !== combined[index - 1])
  }, [entry])

  if (!entry) return <NotFoundPage />
  const status = getJournalStatus(entry)
  const hasMemories = Boolean(entry.memories && Object.values(entry.memories).some(Boolean))
  const activeJournalDay = entry.days?.[activeDay]
  const activeDayPhotos = entry.photos?.filter((photo) => !photo.date || photo.date === activeJournalDay?.date) ?? []
  const activeDayCosts = entry.costs?.filter((cost) => !cost.date || cost.date === activeJournalDay?.date) ?? []

  const timelineSection = entry.days?.length ? (
    <section className="detail-section itinerary-section">
      <div className="section-kicker-row">
        <p className="eyebrow">{status === 'past' ? t.plan : t.plans}</p>
        <h2 className="section-heading">{t.timeline}</h2>
      </div>
      <DaySelector days={entry.days} activeIndex={activeDay} onChange={setActiveDay} />
      <AnimatePresence mode="wait">
        <motion.div
          className="active-day-content"
          key={entry.days[activeDay].date}
          initial={reduceMotion ? false : { opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
          transition={{ duration: 0.25 }}
        >
          <DayTimeline day={entry.days[activeDay]} />
          {activeDayCosts.length ? <CostSummary costs={activeDayCosts} /> : null}
          {activeDayPhotos.length ? <JournalGallery photos={activeDayPhotos} /> : null}
        </motion.div>
      </AnimatePresence>
    </section>
  ) : null

  return (
    <article className="journal-detail-page">
      <header className="detail-hero">
        {entry.coverImage && (
          <JournalImage
            src={entry.coverImage}
            alt={getLocalizedText(entry.title, language)}
            className="detail-cover-image"
            loading="eager"
          />
        )}
        <div className="detail-cover-shade" />
        <div className="site-shell detail-header-content">
          <Link className="back-link" to="/journal"><ArrowLeft aria-hidden="true" />{t.backToJournal}</Link>
          <div className="detail-title-copy">
            <div className="detail-title-meta">
              <StatusBadge status={status} />
              <time>{formatDateRange(entry.startDate, entry.endDate, language)}</time>
            </div>
            <h1>{getLocalizedText(entry.title, language)}</h1>
            {entry.subtitle && <p className="detail-subtitle">{getLocalizedText(entry.subtitle, language)}</p>}
          </div>
        </div>
      </header>

      <div className="site-shell detail-overview">
        <div className="detail-summary">
          <p>{getLocalizedText(entry.summary, language)}</p>
          <div className="tag-list">
            {entry.tags?.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <aside className="detail-route">
          <div className="detail-route-title"><MapPinned aria-hidden="true" /><span>{t.route}</span></div>
          <TripRoute route={overviewRoute} />
        </aside>
      </div>

      <div className="site-shell detail-content">
        {status === 'past' && hasMemories && entry.memories ? <MemorySection memories={entry.memories} /> : null}
        {timelineSection}
        {!entry.days?.length && entry.costs?.length ? <CostSummary costs={entry.costs} /> : null}
        {!entry.days?.length && entry.photos?.length ? <JournalGallery photos={entry.photos} /> : null}
        {status !== 'past' && hasMemories && entry.memories ? <MemorySection memories={entry.memories} /> : null}
      </div>
    </article>
  )
}

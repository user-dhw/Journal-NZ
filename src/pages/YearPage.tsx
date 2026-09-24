import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { JournalTimeline } from '../components/JournalTimeline'
import { PageHeader } from '../components/PageHeader'
import { journalEntries } from '../data/journal'
import { useLanguage } from '../hooks/useLanguage'
import { getJournalYears } from '../utils/journal'
import { NotFoundPage } from './NotFoundPage'

export function YearPage() {
  const { year } = useParams()
  const { language, t } = useLanguage()
  const years = getJournalYears(journalEntries)
  const entries = journalEntries.filter((entry) => entry.startDate.startsWith(year ?? ''))
  if (!year || !entries.length) return <NotFoundPage />
  const currentIndex = years.indexOf(year)
  const newer = currentIndex > 0 ? years[currentIndex - 1] : undefined
  const older = currentIndex >= 0 && currentIndex < years.length - 1 ? years[currentIndex + 1] : undefined

  return (
    <div className="page-body year-page">
      <PageHeader
        eyebrow={t.archive}
        title={year}
        description={language === 'zh' ? `${entries.length} 篇旅程，按月份排列。` : `${entries.length} journey, arranged month by month.`}
        aside={
          <nav className="year-navigation" aria-label={t.archive}>
            {older ? <Link to={`/year/${older}`}><ChevronLeft aria-hidden="true" />{older}</Link> : <span />}
            {newer ? <Link to={`/year/${newer}`}>{newer}<ChevronRight aria-hidden="true" /></Link> : <span />}
          </nav>
        }
      />
      <section className="site-shell">
        <JournalTimeline entries={entries} />
      </section>
    </div>
  )
}

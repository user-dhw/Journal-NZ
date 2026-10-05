import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { useLanguage } from '../hooks/useLanguage'
import type { JournalEntry } from '../types/journal'
import { formatDateRange } from '../utils/dates'
import { getLocalizedText } from '../utils/localization'
import { JournalImage } from './JournalImage'
import { TripRoute } from './TripRoute'

export function NextJourney({ entry }: { entry: JournalEntry }) {
  const { language, t } = useLanguage()
  const route = entry.featuredRoute ?? entry.locations.slice(0, 3)
  const detailPath = `/journal/${entry.slug}`

  return (
    <Link className="next-journey" to={detailPath} aria-labelledby="next-journey-title">
      <div className="next-photo-link" aria-hidden="true">
        <JournalImage
          src={entry.coverImage ?? entry.photos?.[0]?.src ?? siteConfig.heroImage}
          alt=""
          className="next-photo"
          loading="eager"
        />
      </div>
      <div className="next-main">
        <div className="next-main-copy">
          <p className="next-label">{t.nextPlan}</p>
          <p className="next-date">{formatDateRange(entry.startDate, entry.endDate, language)}</p>
          <h2 id="next-journey-title">{getLocalizedText(entry.title, language)}</h2>
          <div className="next-tags">
            {(entry.featuredTags ?? entry.tags?.slice(0, 3))?.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <TripRoute route={route} compact />
          <span className="next-link" aria-hidden="true">
            {language === 'zh' ? '查看旅程' : 'View journey'}<ArrowRight aria-hidden="true" size={17} />
          </span>
        </div>
      </div>
    </Link>
  )
}

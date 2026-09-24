import { ArrowRight, MapPin } from 'lucide-react'
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

  return (
    <article className="next-journey" aria-labelledby="next-journey-title">
      <Link className="next-photo-link" to={`/journal/${entry.slug}`} tabIndex={-1} aria-hidden="true">
        <JournalImage
          src={siteConfig.heroImage}
          alt={language === 'zh' ? 'Milford Sound 群山与湖面' : 'Mountains reflected in Milford Sound'}
          className="next-photo"
          loading="eager"
        />
      </Link>
      <div className="next-journey-shade" aria-hidden="true" />
      <div className="next-main">
        <div className="next-main-copy">
          <p className="next-label">{t.nextPlan}</p>
          <p className="next-date">{formatDateRange(entry.startDate, entry.endDate, language)}</p>
          <h2 id="next-journey-title">{getLocalizedText(entry.title, language)}</h2>
          <div className="next-tags">
            {(entry.featuredTags ?? entry.tags?.slice(0, 3))?.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <TripRoute route={route} compact />
          <Link className="next-link" to={`/journal/${entry.slug}`}>
            {language === 'zh' ? '查看旅程' : 'View journey'}<ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <p className="next-photo-location"><MapPin aria-hidden="true" size={15} />Milford Sound · Aotearoa</p>
      </div>
    </article>
  )
}

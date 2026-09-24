import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import type { PlaceSummary } from '../utils/places'
import { formatDateRange } from '../utils/dates'

export function PlaceCard({ place, index }: { place: PlaceSummary; index: number }) {
  const { language, t } = useLanguage()
  return (
    <Link className="place-card" to={`/journal/${place.entries[0].slug}`}>
      <span className="place-index">{String(index + 1).padStart(2, '0')}</span>
      <div className="place-card-copy">
        <h3>{place.name}</h3>
        <p>
          {place.status === 'past' ? t.visited : t.upcoming}
          <span aria-hidden="true"> · </span>
          {formatDateRange(place.latestVisit, undefined, language)}
        </p>
      </div>
      <ArrowUpRight aria-hidden="true" size={20} />
    </Link>
  )
}

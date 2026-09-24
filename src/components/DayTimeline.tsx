import type { JournalDay } from '../types/journal'
import { useLanguage } from '../hooks/useLanguage'
import { getLocalizedText } from '../utils/localization'
import { TripRoute } from './TripRoute'
import { TimelineItemCard } from './TimelineItemCard'

export function DayTimeline({ day }: { day: JournalDay }) {
  const { language } = useLanguage()
  return (
    <section className="day-panel" role="tabpanel">
      <header className="day-panel-header">
        <div>
          <p className="eyebrow">{day.date}</p>
          <h2>{getLocalizedText(day.title, language)}</h2>
          {day.subtitle && <p>{getLocalizedText(day.subtitle, language)}</p>}
        </div>
        {day.route?.length ? <TripRoute route={day.route} compact /> : null}
      </header>
      {day.timeline?.length ? (
        <div className="day-timeline">
          {day.timeline.map((item) => <TimelineItemCard key={item.id} item={item} />)}
        </div>
      ) : null}
    </section>
  )
}

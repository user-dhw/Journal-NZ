import type { JournalDay } from '../types/journal'
import { useLanguage } from '../hooks/useLanguage'
import { formatDayTab } from '../utils/dates'
import { getLocalizedText } from '../utils/localization'

type Props = {
  days: JournalDay[]
  activeIndex: number
  onChange: (index: number) => void
}

export function DaySelector({ days, activeIndex, onChange }: Props) {
  const { language, t } = useLanguage()
  if (days.length <= 1) return null

  return (
    <div className="day-selector" role="tablist" aria-label={t.timeline}>
      {days.map((day, index) => (
        <button
          type="button"
          role="tab"
          key={day.date}
          aria-selected={index === activeIndex}
          className={index === activeIndex ? 'is-active' : ''}
          onClick={() => onChange(index)}
        >
          <span className="day-number">{language === 'zh' ? `${t.day}${index + 1}天` : `${t.day} ${index + 1}`}</span>
          <span className="day-date">{formatDayTab(day.date, language)}</span>
          <span className="day-title">{getLocalizedText(day.title, language)}</span>
        </button>
      ))}
    </div>
  )
}

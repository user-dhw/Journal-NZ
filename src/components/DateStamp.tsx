import { getDateStampParts } from '../utils/dates'

export function DateStamp({ startDate, endDate }: { startDate: string; endDate?: string }) {
  const parts = getDateStampParts(startDate, endDate)
  return (
    <time className="date-stamp" dateTime={startDate}>
      <span className="date-stamp-day">{parts.day}</span>
      {parts.month && <span className="date-stamp-month">{parts.month}</span>}
      <span className="date-stamp-year">{parts.year}</span>
    </time>
  )
}

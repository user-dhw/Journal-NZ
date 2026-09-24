import { format } from 'date-fns'
import { enNZ, zhCN } from 'date-fns/locale'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { StatusBadge } from '../components/StatusBadge'
import { journalEntries } from '../data/journal'
import { useLanguage } from '../hooks/useLanguage'
import { formatDateRange } from '../utils/dates'
import { getJournalYears, groupEntriesByMonth } from '../utils/journal'
import { getLocalizedText } from '../utils/localization'
import { getJournalStatus } from '../utils/status'

const monthNumbers = Array.from({ length: 12 }, (_, index) => String(index + 1).padStart(2, '0'))

export function CalendarPage() {
  const { language, t } = useLanguage()
  const years = getJournalYears(journalEntries)

  return (
    <div className="page-body calendar-page">
      <PageHeader
        eyebrow={t.calendar}
        title={t.monthIndex}
        description={language === 'zh' ? '不是日程表，而是一份按月份整理的旅行索引。' : 'Not a schedule—a year-by-year index of where the months led.'}
      />
      <div className="site-shell calendar-years">
        {years.map((year) => {
          const yearEntries = journalEntries.filter((entry) => entry.startDate.startsWith(year))
          const byMonth = groupEntriesByMonth(yearEntries)
          return (
            <section key={year} className="calendar-year">
              <Link to={`/year/${year}`} className="calendar-year-title">{year}</Link>
              <div className="calendar-month-grid">
                {monthNumbers.map((month) => {
                  const entries = byMonth[month] ?? []
                  const monthDate = new Date(Number(year), Number(month) - 1, 1)
                  const monthName = format(monthDate, language === 'zh' ? 'M月' : 'MMM', {
                    locale: language === 'zh' ? zhCN : enNZ,
                  }).toUpperCase()
                  return (
                    <article className={`calendar-month ${entries.length ? 'has-entry' : ''}`} key={month}>
                      <h2>{monthName}</h2>
                      {entries.length ? entries.map((entry) => (
                        <Link key={entry.id} to={`/journal/${entry.slug}`}>
                          <time>{formatDateRange(entry.startDate, entry.endDate, language).replace(year, '').trim()}</time>
                          <strong>{getLocalizedText(entry.title, language)}</strong>
                          <StatusBadge status={getJournalStatus(entry)} />
                        </Link>
                      )) : <span className="month-empty">—</span>}
                    </article>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

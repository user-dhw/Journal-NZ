import { RotateCcw } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import type { JournalStatus } from '../types/journal'

export type ArchiveFilters = {
  status: 'all' | Exclude<JournalStatus, 'current'>
  year: string
  place: string
  tag: string
  sort: 'desc' | 'asc'
}

type Props = {
  filters: ArchiveFilters
  years: string[]
  places: string[]
  tags: string[]
  onChange: (filters: ArchiveFilters) => void
}

export function FilterBar({ filters, years, places, tags, onChange }: Props) {
  const { t } = useLanguage()
  const reset = () => onChange({ status: 'all', year: '', place: '', tag: '', sort: 'desc' })
  const hasFilters = filters.status !== 'all' || filters.year || filters.place || filters.tag || filters.sort !== 'desc'

  return (
    <div className="filter-panel">
      <div className="status-filter" role="group" aria-label={t.filters}>
        {(['all', 'upcoming', 'past'] as const).map((status) => (
          <button
            type="button"
            key={status}
            className={filters.status === status ? 'is-active' : ''}
            onClick={() => onChange({ ...filters, status })}
          >
            {status === 'all' ? t.all : t[status]}
          </button>
        ))}
      </div>
      <div className="select-filters">
        <label>
          <span>{t.year}</span>
          <select value={filters.year} onChange={(event) => onChange({ ...filters, year: event.target.value })}>
            <option value="">{t.all}</option>
            {years.map((year) => <option key={year} value={year}>{year}</option>)}
          </select>
        </label>
        <label>
          <span>{t.place}</span>
          <select value={filters.place} onChange={(event) => onChange({ ...filters, place: event.target.value })}>
            <option value="">{t.all}</option>
            {places.map((place) => <option key={place} value={place}>{place}</option>)}
          </select>
        </label>
        <label>
          <span>{t.tag}</span>
          <select value={filters.tag} onChange={(event) => onChange({ ...filters, tag: event.target.value })}>
            <option value="">{t.all}</option>
            {tags.map((tag) => <option key={tag} value={tag}>{tag}</option>)}
          </select>
        </label>
        <label>
          <span>{t.archive}</span>
          <select value={filters.sort} onChange={(event) => onChange({ ...filters, sort: event.target.value as 'asc' | 'desc' })}>
            <option value="desc">{t.newest}</option>
            <option value="asc">{t.oldest}</option>
          </select>
        </label>
        {hasFilters && (
          <button className="reset-filters" type="button" onClick={reset}>
            <RotateCcw aria-hidden="true" size={15} />{t.clearFilters}
          </button>
        )}
      </div>
    </div>
  )
}

import { Search, X } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export function SearchBar({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const { t } = useLanguage()
  return (
    <label className="search-bar">
      <Search aria-hidden="true" size={19} />
      <span className="sr-only">{t.searchPlaceholder}</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={t.searchPlaceholder}
      />
      {value && (
        <button type="button" onClick={() => onChange('')} aria-label={t.clearFilters}>
          <X aria-hidden="true" size={17} />
        </button>
      )}
    </label>
  )
}

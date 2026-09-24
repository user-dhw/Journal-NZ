import { Check, RotateCcw } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import type { ChecklistItem } from '../types/journal'
import { getLocalizedText } from '../utils/localization'

export function PackingChecklist({ items, entryId }: { items: ChecklistItem[]; entryId: string }) {
  const { language, t } = useLanguage()
  const storageKey = `travel-journal-checklist-${entryId}`
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = window.localStorage.getItem(storageKey)
      return saved ? (JSON.parse(saved) as string[]) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(checkedIds))
  }, [checkedIds, storageKey])

  const grouped = useMemo(
    () =>
      items.reduce<Record<string, ChecklistItem[]>>((groups, item) => {
        const group = item.category ?? t.packing
        groups[group] = [...(groups[group] ?? []), item]
        return groups
      }, {}),
    [items, t.packing],
  )

  if (items.length === 0) return null
  const toggle = (id: string) => {
    setCheckedIds((current) =>
      current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id],
    )
  }

  return (
    <section className="detail-section packing-section">
      <div className="section-title-actions">
        <div className="section-kicker-row">
          <p className="eyebrow">{t.packing}</p>
          <h2 className="section-heading">{checkedIds.length} / {items.length}</h2>
        </div>
        {checkedIds.length > 0 && (
          <button type="button" className="text-button" onClick={() => setCheckedIds([])}>
            <RotateCcw aria-hidden="true" size={15} /> Reset
          </button>
        )}
      </div>
      <div className="checklist-groups">
        {Object.entries(grouped).map(([category, categoryItems]) => (
          <fieldset key={category}>
            <legend>{category}</legend>
            <div className="checklist-grid">
              {categoryItems.map((item) => {
                const checked = checkedIds.includes(item.id)
                return (
                  <label key={item.id} className={checked ? 'is-checked' : ''}>
                    <input type="checkbox" checked={checked} onChange={() => toggle(item.id)} />
                    <span className="custom-checkbox"><Check aria-hidden="true" size={14} /></span>
                    <span>{getLocalizedText(item.text, language)}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>
    </section>
  )
}

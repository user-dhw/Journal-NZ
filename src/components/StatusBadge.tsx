import { useLanguage } from '../hooks/useLanguage'
import type { JournalStatus } from '../types/journal'

export function StatusBadge({ status }: { status: JournalStatus }) {
  const { t } = useLanguage()
  const labels: Record<JournalStatus, string> = {
    upcoming: t.upcoming,
    current: t.current,
    past: t.past,
  }

  return <span className={`status-badge status-${status}`}>{labels[status]}</span>
}

import {
  CalendarCheck,
  CloudSun,
  ExternalLink,
  Fish,
  Globe2,
  MapPinned,
  Waves,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import type { JournalLink, JournalLinkType } from '../types/journal'
import { getLocalizedText } from '../utils/localization'

const iconMap: Record<JournalLinkType, LucideIcon> = {
  official: Globe2,
  maps: MapPinned,
  booking: CalendarCheck,
  weather: CloudSun,
  marine: Waves,
  reference: Fish,
}

export function UsefulLinks({ links, title = true }: { links: JournalLink[]; title?: boolean }) {
  const { language, t } = useLanguage()
  if (links.length === 0) return null

  return (
    <section className="useful-links" aria-labelledby={title ? 'useful-links-title' : undefined}>
      {title && <h2 id="useful-links-title" className="section-heading">{t.usefulLinks}</h2>}
      <div className="links-list">
        {links.map((link) => {
          const Icon = iconMap[link.type ?? 'reference'] ?? ExternalLink
          return (
            <a key={link.url + link.label.en} href={link.url} target="_blank" rel="noopener noreferrer">
              <Icon aria-hidden="true" size={18} strokeWidth={1.5} />
              <span>{getLocalizedText(link.label, language)}</span>
              <ExternalLink className="link-external" aria-hidden="true" size={14} />
            </a>
          )
        })}
      </div>
    </section>
  )
}

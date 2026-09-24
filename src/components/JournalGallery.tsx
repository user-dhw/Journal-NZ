import { motion, useReducedMotion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import type { JournalPhoto } from '../types/journal'
import { formatDateRange } from '../utils/dates'
import { getLocalizedText } from '../utils/localization'
import { JournalImage } from './JournalImage'

export function JournalGallery({ photos }: { photos: JournalPhoto[] }) {
  const { language, t } = useLanguage()
  const reduceMotion = useReducedMotion()
  if (photos.length === 0) return null

  return (
    <section className="detail-section gallery-section">
      <div className="section-kicker-row">
        <p className="eyebrow">{t.photos}</p>
        <h2 className="section-heading">{t.photoJournal}</h2>
      </div>
      <div className="journal-gallery">
        {photos.map((photo, index) => (
          <motion.figure
            key={`${photo.src}-${index}`}
            className={`gallery-item gallery-${photo.orientation ?? 'landscape'}`}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.2) }}
          >
            <JournalImage
              src={photo.src}
              alt={getLocalizedText(photo.alt, language)}
              className="gallery-image"
            />
            {(photo.caption || photo.location || photo.date) && (
              <figcaption>
                <p>{getLocalizedText(photo.caption, language)}</p>
                <span>
                  {photo.location && <><MapPin aria-hidden="true" size={13} />{photo.location}</>}
                  {photo.date && ` · ${formatDateRange(photo.date, undefined, language)}`}
                </span>
              </figcaption>
            )}
          </motion.figure>
        ))}
      </div>
    </section>
  )
}

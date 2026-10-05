import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { useLanguage } from '../hooks/useLanguage'
import type { JournalEntry } from '../types/journal'
import { getLocalizedText } from '../utils/localization'
import { JournalImage } from './JournalImage'

export function JournalHero({ featuredEntry }: { featuredEntry?: JournalEntry }) {
  const { language } = useLanguage()
  const reduceMotion = useReducedMotion()

  return (
    <section className="journal-hero">
      <div className="site-shell home-intro">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <p className="home-intro-kicker">
            {language === 'zh' ? '新西兰，慢慢探索。' : 'A little more of New Zealand.'}
          </p>
          <h1>{getLocalizedText(siteConfig.name, language)}</h1>
          <p className="hero-subtitle">{getLocalizedText(siteConfig.heroSubtitle, language)}</p>
          <Link className="primary-button" to="/journal">
            {language === 'zh' ? '探索旅程' : 'Explore journeys'}<ArrowRight aria-hidden="true" size={16} />
          </Link>
        </motion.div>
      </div>
      <Link
        className="site-shell hero-image-link"
        to={featuredEntry ? `/journal/${featuredEntry.slug}` : '/journal'}
        aria-label={featuredEntry ? getLocalizedText(featuredEntry.title, language) : language === 'zh' ? '探索旅程' : 'Explore journeys'}
      >
        <JournalImage src={siteConfig.heroImage} alt={language === 'zh' ? 'Milford Sound 的群山与湖面' : 'Mountains reflected in Milford Sound'} className="hero-image" loading="eager" />
        <span className="hero-image-caption" aria-hidden="true">Milford Sound, New Zealand<ArrowRight size={16} /></span>
      </Link>
    </section>
  )
}

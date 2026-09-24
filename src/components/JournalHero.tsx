import { motion, useReducedMotion } from 'framer-motion'
import { siteConfig } from '../config/site'
import { useLanguage } from '../hooks/useLanguage'
import { getLocalizedText } from '../utils/localization'

export function JournalHero() {
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
            {language === 'zh' ? '个人旅行档案 · 新西兰' : 'PERSONAL TRAVEL ARCHIVE · NEW ZEALAND'}
          </p>
          <h1>{getLocalizedText(siteConfig.name, language)}</h1>
          <p className="hero-subtitle">{getLocalizedText(siteConfig.heroSubtitle, language)}</p>
        </motion.div>
        <div className="home-intro-mark" aria-hidden="true"><span>NZ</span><strong>26</strong></div>
      </div>
    </section>
  )
}

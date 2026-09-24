import { Archive, Languages, Map } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { siteConfig } from '../config/site'
import { useLanguage } from '../hooks/useLanguage'
import { getLocalizedText } from '../utils/localization'

export function AboutPage() {
  const { language, t } = useLanguage()
  return (
    <div className="page-body about-page">
      <PageHeader
        eyebrow={t.about}
        title={t.aboutTitle}
        description={getLocalizedText(siteConfig.subtitle, language)}
      />
      <section className="site-shell about-content">
        <p className="about-lead">{t.aboutBody}</p>
        <div className="about-principles">
          <article>
            <Archive aria-hidden="true" />
            <span>01</span>
            <h2>{t.addEntryTitle}</h2>
            <p>{t.addEntryBody}</p>
          </article>
          <article>
            <Map aria-hidden="true" />
            <span>02</span>
            <h2>{language === 'zh' ? '计划与记忆并存' : 'Plans stay with the memories'}</h2>
            <p>{language === 'zh' ? '出发前的路线不会被旅后记录覆盖，它们共同组成完整的旅程。' : 'The route imagined before departure remains beside the photos, costs and reflections added later.'}</p>
          </article>
          <article>
            <Languages aria-hidden="true" />
            <span>03</span>
            <h2>{language === 'zh' ? '双语书写' : 'Written in two languages'}</h2>
            <p>{language === 'zh' ? '每一段重要内容都可以用中文与英文记录，而无需维护两套页面。' : 'Every important note can be kept in English and Chinese without maintaining duplicate pages.'}</p>
          </article>
        </div>
      </section>
    </div>
  )
}

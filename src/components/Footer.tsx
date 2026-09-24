import { siteConfig } from '../config/site'
import { useLanguage } from '../hooks/useLanguage'
import { getLocalizedText } from '../utils/localization'

export function Footer() {
  const { language, t } = useLanguage()
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <div>
          <p className="footer-title">{getLocalizedText(siteConfig.name, language)}</p>
          <p>{t.footerNote}</p>
        </div>
        <p className="footer-year">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

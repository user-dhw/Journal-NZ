import { useLanguage } from '../hooks/useLanguage'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-switcher" aria-label="Language">
      <button
        type="button"
        className={language === 'en' ? 'is-active' : ''}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={language === 'zh' ? 'is-active' : ''}
        onClick={() => setLanguage('zh')}
        aria-pressed={language === 'zh'}
      >
        中文
      </button>
    </div>
  )
}

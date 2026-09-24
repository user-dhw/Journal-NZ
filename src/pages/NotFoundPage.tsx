import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

export function NotFoundPage() {
  const { t } = useLanguage()
  return (
    <section className="not-found site-shell">
      <p className="not-found-code">404</p>
      <h1>{t.notFound}</h1>
      <Link to="/"><ArrowLeft aria-hidden="true" />{t.returnHome}</Link>
    </section>
  )
}

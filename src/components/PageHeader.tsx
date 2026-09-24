import type { ReactNode } from 'react'

export function PageHeader({ eyebrow, title, description, aside }: {
  eyebrow: string
  title: string
  description?: string
  aside?: ReactNode
}) {
  return (
    <header className="page-header site-shell">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </div>
      {aside && <div className="page-header-aside">{aside}</div>}
    </header>
  )
}

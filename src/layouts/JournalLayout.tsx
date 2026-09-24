import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { JournalHeader } from '../components/JournalHeader'

export function JournalLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="min-h-screen">
      <JournalHeader />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

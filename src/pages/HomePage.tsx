import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HomeJournalTimeline } from '../components/HomeJournalTimeline'
import { JournalHero } from '../components/JournalHero'
import { UpcomingJourneys } from '../components/UpcomingJourneys'
import { journalEntries } from '../data/journal'
import { useLanguage } from '../hooks/useLanguage'
import { sortEntries } from '../utils/journal'
import { getJournalStatus } from '../utils/status'

export function HomePage() {
  const { t } = useLanguage()
  const upcomingJourneys = sortEntries(
    journalEntries.filter((entry) => getJournalStatus(entry) !== 'past'),
    'asc',
  )
  const pastJourneys = sortEntries(
    journalEntries.filter((entry) => getJournalStatus(entry) === 'past'),
    'desc',
  )

  return (
    <>
      <JournalHero />
      <UpcomingJourneys entries={upcomingJourneys} />
      <section id="history" className="history-section">
        <div className="site-shell">
          <header className="home-section-header history-heading">
            <div>
              <p className="section-number">02</p>
              <h2>{t.pastJourneys}</h2>
            </div>
            <div className="history-heading-copy">
              <p>{t.pastJourneysNote}</p>
              <Link to="/journal">{t.archive}<ArrowRight aria-hidden="true" size={17} /></Link>
            </div>
          </header>
          {pastJourneys.length > 0 ? (
            <HomeJournalTimeline entries={pastJourneys} />
          ) : (
            <div className="history-empty">
              <span aria-hidden="true" />
              <p>{t.noPastJourneys}</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

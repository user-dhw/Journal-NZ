import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './hooks/useLanguage'
import { JournalLayout } from './layouts/JournalLayout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { JournalArchivePage } from './pages/JournalArchivePage'
import { JournalDetailPage } from './pages/JournalDetailPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PlacesPage } from './pages/PlacesPage'
import { YearPage } from './pages/YearPage'

const AppRouter = import.meta.env.BASE_URL === '/' ? BrowserRouter : HashRouter

function App() {
  return (
    <AppRouter>
      <LanguageProvider>
        <Routes>
          <Route element={<JournalLayout />}>
            <Route index element={<HomePage />} />
            <Route path="journal" element={<JournalArchivePage />} />
            <Route path="journal/:slug" element={<JournalDetailPage />} />
            <Route path="places" element={<PlacesPage />} />
            <Route path="calendar" element={<Navigate to="/#history" replace />} />
            <Route path="year/:year" element={<YearPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </AppRouter>
  )
}

export default App

import type { LocalizedText } from '../types/journal'

export const siteConfig: {
  name: LocalizedText
  subtitle: LocalizedText
  heroSubtitle: LocalizedText
  heroImage: string
} = {
  name: {
    en: 'Travel Journal',
    zh: '旅行日记',
  },
  subtitle: {
    en: 'Places I went. Plans I made. Moments I want to remember.',
    zh: '走过的地方，计划中的旅程，值得记住的瞬间。',
  },
  heroSubtitle: {
    en: 'Places, roads and memories.',
    zh: '地点，道路与回忆。',
  },
  heroImage:
    'https://images.unsplash.com/photo-1602366242300-7ba8b37a16ec?auto=format&fit=crop&w=2400&q=88',
}

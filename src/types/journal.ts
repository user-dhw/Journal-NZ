export type Language = 'en' | 'zh'

export type LocalizedText = {
  en: string
  zh: string
}

export type JournalLinkType =
  | 'official'
  | 'maps'
  | 'booking'
  | 'weather'
  | 'marine'
  | 'reference'

export type JournalLink = {
  label: LocalizedText
  url: string
  type?: JournalLinkType
}

export type JournalPhoto = {
  src: string
  alt?: LocalizedText
  caption?: LocalizedText
  date?: string
  location?: string
  orientation?: 'landscape' | 'portrait' | 'wide'
}

export type TimelineItem = {
  id: string
  time?: string
  title: LocalizedText
  location?: string
  description?: LocalizedText
  duration?: string
  distance?: string
  image?: string
  tags?: string[]
  warning?: LocalizedText
  links?: JournalLink[]
  featured?: boolean
  flexible?: boolean
}

export type JournalDay = {
  date: string
  title: LocalizedText
  subtitle?: LocalizedText
  route?: string[]
  timeline?: TimelineItem[]
}

export type CostItem = {
  id: string
  name: LocalizedText
  date?: string
  planned?: number
  actual?: number
  currency: string
  note?: LocalizedText
  url?: string
}

export type ChecklistItem = {
  id: string
  text: LocalizedText
  category?: string
}

export type JournalEntryType =
  | 'plan'
  | 'journey'
  | 'memory'
  | 'day-trip'
  | 'road-trip'
  | 'event'

export type JournalEntry = {
  id: string
  slug: string
  title: LocalizedText
  subtitle?: LocalizedText
  summary?: LocalizedText
  excerpt?: LocalizedText
  startDate: string
  endDate?: string
  type: JournalEntryType
  coverImage?: string
  locations: string[]
  featuredRoute?: string[]
  featuredTags?: string[]
  tags?: string[]
  days?: JournalDay[]
  photos?: JournalPhoto[]
  costs?: CostItem[]
  links?: JournalLink[]
  checklist?: ChecklistItem[]
  memories?: {
    summary?: LocalizedText
    favoriteMoment?: LocalizedText
    notes?: LocalizedText
  }
}

export type JournalStatus = 'upcoming' | 'current' | 'past'

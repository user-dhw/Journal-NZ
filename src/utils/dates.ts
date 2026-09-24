import { format, isSameDay, parseISO } from 'date-fns'
import { enNZ, zhCN } from 'date-fns/locale'
import type { Language } from '../types/journal'

const locales = { en: enNZ, zh: zhCN }

export function formatDateRange(
  start: string,
  end: string | undefined,
  language: Language,
): string {
  const startDate = parseISO(start)
  const endDate = parseISO(end ?? start)
  const locale = locales[language]

  if (isSameDay(startDate, endDate)) {
    return format(startDate, language === 'zh' ? 'yyyy年 M月 d日' : 'd MMM yyyy', {
      locale,
    }).toUpperCase()
  }

  const sameMonth = format(startDate, 'yyyy-MM') === format(endDate, 'yyyy-MM')
  if (language === 'zh') {
    return sameMonth
      ? `${format(startDate, 'yyyy年 M月 d日', { locale })}–${format(endDate, 'd日', { locale })}`
      : `${format(startDate, 'yyyy年 M月 d日', { locale })}–${format(endDate, 'M月 d日', { locale })}`
  }

  return sameMonth
    ? `${format(startDate, 'd', { locale })}–${format(endDate, 'd MMM yyyy', { locale })}`.toUpperCase()
    : `${format(startDate, 'd MMM', { locale })}–${format(endDate, 'd MMM yyyy', { locale })}`.toUpperCase()
}

export function getDateStampParts(start: string, end?: string) {
  const startDate = parseISO(start)
  const endDate = parseISO(end ?? start)
  const sameMonth = format(startDate, 'yyyy-MM') === format(endDate, 'yyyy-MM')
  return {
    day: isSameDay(startDate, endDate)
      ? format(startDate, 'dd')
      : sameMonth
        ? `${format(startDate, 'dd')}–${format(endDate, 'dd')}`
        : `${format(startDate, 'dd MMM')}–${format(endDate, 'dd MMM')}`,
    month: sameMonth ? format(startDate, 'MMM').toUpperCase() : '',
    year: format(startDate, 'yyyy'),
  }
}

export function formatMonth(date: string, language: Language) {
  return format(parseISO(date), language === 'zh' ? 'M月' : 'LLLL', {
    locale: locales[language],
  }).toUpperCase()
}

export function formatDayTab(date: string, language: Language) {
  return format(parseISO(date), language === 'zh' ? 'M月d日 EEE' : 'EEE d MMM', {
    locale: locales[language],
  }).toUpperCase()
}

export function formatYear(date: string) {
  return format(parseISO(date), 'yyyy')
}

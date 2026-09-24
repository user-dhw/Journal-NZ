import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import type { CostItem } from '../types/journal'
import { getLocalizedText } from '../utils/localization'

function formatCurrency(value: number, currency: string, language: 'en' | 'zh') {
  return new Intl.NumberFormat(language === 'zh' ? 'zh-CN' : 'en-NZ', {
    style: 'currency',
    currency,
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value)
}

export function CostSummary({ costs }: { costs: CostItem[] }) {
  const { language, t } = useLanguage()
  if (costs.length === 0) return null
  const currency = costs[0]?.currency ?? 'NZD'
  const total = costs.reduce((sum, item) => sum + (item.actual ?? item.planned ?? 0), 0)

  return (
    <section className="detail-section cost-section">
      <div className="section-kicker-row">
        <p className="eyebrow">{t.cost}</p>
        <h2 className="section-heading">{t.perPerson}</h2>
      </div>
      <div className="cost-table">
        {costs.map((item) => (
          <div className="cost-row" key={item.id}>
            <div>
              <h3>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {getLocalizedText(item.name, language)}<ArrowUpRight aria-hidden="true" size={17} />
                  </a>
                ) : getLocalizedText(item.name, language)}
              </h3>
              {item.note && <p>{getLocalizedText(item.note, language)}</p>}
            </div>
            <div className="cost-values">
              <strong>{formatCurrency(item.actual ?? item.planned ?? 0, item.currency, language)}</strong>
            </div>
          </div>
        ))}
        <div className="cost-total">
          <span>{t.perPersonTotal}</span>
          <strong>{formatCurrency(total, currency, language)}</strong>
        </div>
      </div>
      <p className="cost-footnote">
        {language === 'zh'
          ? '以上为单人估算，点击项目名称可查看官网最新价格。合计不包含燃油、饮品、停车费或额外预订费用。'
          : 'Per-person estimates. Select an item for the latest official price. The total excludes fuel, drinks, parking and additional booking fees.'}
      </p>
    </section>
  )
}

import { useLanguage } from '../i18n'

interface BrandMarkProps {
  compact?: boolean
}

export default function BrandMark({ compact = false }: BrandMarkProps) {
  const { translate: t } = useLanguage()
  return (
    <span className="inline-flex flex-col items-start">
      <img
        src="/logo.jpg"
        alt={t("Duopole Imports — Sourcing Nature's Best")}
        className={compact ? 'h-16 w-16 object-contain' : 'h-auto w-32 max-w-full object-contain'}
      />
      {!compact && <span className="mt-1 text-xs font-medium tracking-wide text-white/80">{t('Fresh and Premium')}</span>}
    </span>
  )
}

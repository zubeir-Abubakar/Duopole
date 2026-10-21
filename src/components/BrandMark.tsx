interface BrandMarkProps {
  compact?: boolean
}

export default function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex flex-col items-start">
      <img
        src="/logo.jpg"
        alt="Duopole Imports — Sourcing Nature's Best"
        className={compact ? 'h-16 w-16 object-contain' : 'h-auto w-32 max-w-full object-contain'}
      />
      {!compact && <span className="mt-1 text-xs font-medium tracking-wide text-white/80">Fresh and Premium</span>}
    </span>
  )
}

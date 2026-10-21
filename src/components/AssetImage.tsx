import { useState } from 'react'

interface AssetImageProps {
  src: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
  objectPosition?: string
}

export default function AssetImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority,
  objectPosition = 'center',
}: AssetImageProps) {
  const [failed, setFailed] = useState(false)
  const filename = src.split('/').pop() || src

  if (failed) {
    return (
      <div className={`asset-fallback ${className}`} role="img" aria-label={`${alt}. Image file missing: ${filename}`}>
        <div className="asset-fallback__content">
          <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="asset-fallback__icon">
            <path d="M32 7c-4 8-17 18-17 31a17 17 0 0 0 34 0C49 25 36 15 32 7Z" stroke="currentColor" strokeWidth="2" />
            <path d="M25 39c1 5 4 8 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="asset-fallback__label">Image asset not supplied</span>
          <span className="asset-fallback__filename">{filename}</span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={loading === 'lazy' ? 'async' : 'auto'}
      onError={() => setFailed(true)}
      className={className}
      style={{ objectPosition }}
    />
  )
}

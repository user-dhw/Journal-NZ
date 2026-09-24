import { ImageOff } from 'lucide-react'
import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
}

export function JournalImage({ src, alt, className = '', loading = 'lazy' }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`image-fallback ${className}`} role="img" aria-label={alt}>
        <ImageOff aria-hidden="true" size={26} strokeWidth={1.3} />
        <span>{alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setFailed(true)}
    />
  )
}

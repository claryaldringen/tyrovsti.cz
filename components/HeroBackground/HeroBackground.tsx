import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import styles from './HeroBackground.module.scss'

interface HeroBackgroundProps {
  images: string[]
  intervalMs?: number
  fadeMs?: number
  topOffsetPx?: number
  className?: string
  children?: ReactNode
}

export const HeroBackground = ({
  images,
  intervalMs = 7000,
  fadeMs = 1500,
  topOffsetPx = 50,
  className = '',
  children,
}: HeroBackgroundProps) => {
  const safeImages = useMemo(
    () => (Array.isArray(images) ? images.filter(Boolean) : []),
    [images]
  )

  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (safeImages.length <= 1) return

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % safeImages.length)
    }, intervalMs)

    return () => clearInterval(id)
  }, [safeImages.length, intervalMs])

  return (
    <div
      className={`${styles.hero} ${className}`}
      style={
        {
          '--fade-ms': `${fadeMs}ms`,
          '--bg-pos-y': `${topOffsetPx}px`,
        } as React.CSSProperties
      }
    >
      {safeImages.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className={`${styles.bg} ${i === index ? styles.active : ''}`}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden="true"
        />
      ))}

      <div className={styles.content}>{children}</div>
    </div>
  )
}

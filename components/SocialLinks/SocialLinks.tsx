import React from 'react'
import styles from './SocialLinks.module.scss'

const ICON_PATH: Record<string, string> = {
  facebook: '/images/icons/facebook.svg',
  instagram: '/images/icons/instagram.svg',
  x: '/images/icons/twitter-x.svg',
}

const humanLabel = (key: string): string => {
  switch (key) {
    case 'facebook':
      return 'Facebook'
    case 'instagram':
      return 'Instagram'
    case 'x':
      return 'X'
    default:
      return ''
  }
}

interface IconProps {
  name: string
  size?: number
  className?: string
}

const Icon = ({ name, size = 24, className }: IconProps) => {
  return (
    <span
      className={[styles.icon, className].filter(Boolean).join(' ')}
      style={
        {
          '--icon-url': `url("${ICON_PATH[name]}")`,
          '--icon-size': `${size}px`,
        } as React.CSSProperties
      }
      aria-hidden="true"
    />
  )
}

interface SocialItem {
  key: string
  href: string
  text: string
}

interface SocialLinkProps {
  item: SocialItem
  iconSize?: number
}

const SocialLink = ({ item, iconSize = 24 }: SocialLinkProps) => {
  const label = humanLabel(item.key)

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      aria-label={`${label}: ${item.text}`}
      title={label}
    >
      <Icon name={item.key} size={iconSize} />
      <span className={styles.text}>{item.text}</span>
    </a>
  )
}

interface SocialLinksProps {
  items: SocialItem[]
  iconSize?: number
}

export const SocialLinks = ({ items, iconSize = 24 }: SocialLinksProps) => {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <SocialLink key={item.key} item={item} iconSize={iconSize} />
      ))}
    </div>
  )
}

import { QuoteContext } from './QuoteProvider'
import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
import styles from './Qt.module.scss'
import Link from 'next/link'
import { useOutsideClickHandler } from '../../hooks/useOutsideClickHandler'
import { getCity } from './utils'
import { useLanguage } from '../Language'
import { Publication } from '../../types'

interface QtProps {
  publication: Publication
  href?: string
  note?: string
}

export const Qt = ({ publication, href, note }: QtProps) => {
  const [open, setOpen] = useState(false)
  const { setPublication, usedPublications } = useContext(QuoteContext)
  const { lang } = useLanguage()
  const ref = useRef<HTMLSpanElement>(null)

  useIsomorphicLayoutEffect(() => {
    setPublication(publication)
  }, [setPublication, publication])

  useEffect(() => {
    const element = ref.current

    if (element) {
      const rect = element.getBoundingClientRect()
      element.style.maxWidth = `calc(100vw - ${rect.left}px)`
    }
  }, [open])

  const handleToggle = useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  const index = useMemo(
    () =>
      usedPublications.findIndex(
        ({ author, name }) =>
          publication.author === author && publication.name === name
      ) + 1,
    [publication, usedPublications]
  )

  const closeQuote = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    },
    [setOpen]
  )

  useOutsideClickHandler(ref, () => setOpen(false))

  if (!index) return null

  const _href = href || publication.href

  return (
    <span className={styles.wrapper}>
      <span
        className={styles.quote}
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={closeQuote}
        style={{ verticalAlign: 'super', fontSize: 'smaller' }}
      >
        {index}
      </span>
      {open && (
        <span className={styles.box} ref={ref}>
          {_href ? (
            <Link
              href={_href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.boxLink}
            >
              {publication.author ? `${publication.author}: ` : null}
              <i>{publication.name}</i>
              {(getCity(publication.city, lang) || publication.year) && ', '}
              {getCity(publication.city, lang)} {publication.year}
            </Link>
          ) : (
            <span>
              {publication.author ? `${publication.author}: ` : null}
              <i>{publication.name}</i>
              {(getCity(publication.city, lang) || publication.year) && ', '}
              {getCity(publication.city, lang)} {publication.year}
            </span>
          )}
          {note && <p>{note}</p>}
        </span>
      )}
    </span>
  )
}

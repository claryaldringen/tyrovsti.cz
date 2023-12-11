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
import styles from './Qt.module.scss'
import Link from 'next/link'
import { useOutsideClickHandler } from '../../hooks/useOutsideClickHandler'

export const Qt = ({ publication, href, note }) => {
  const [open, setOpen] = useState(false)
  const { setPublication, usedPublications } = useContext(QuoteContext)
  const ref = useRef(null)

  useLayoutEffect(() => {
    setPublication(publication)
  }, [setPublication, publication])

  useEffect(() => {
    const element = ref.current

    if (element) {
      const rect = element.getBoundingClientRect()
      element.style.maxWidth = `calc(100vw - ${rect.left}px)`
    }
  })

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
    (event) => {
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
      <sup
        className={styles.quote}
        onClick={handleToggle}
        role="presentation"
        onKeyDown={closeQuote}
      >
        {index}
      </sup>
      {open && (
        <span className={styles.box} ref={ref}>
          {_href ? (
            <Link href={_href} target="_blank">
              {publication.author ? `${publication.author}: ` : null}
              <i>{publication.name}</i>
              {(publication.city || publication.year) && ', '}
              {publication.city} {publication.year}
            </Link>
          ) : (
            <span>
              {publication.author ? `${publication.author}: ` : null}
              <i>{publication.name}</i>
              {(publication.city || publication.year) && ', '}
              {publication.city} {publication.year}
            </span>
          )}
          {note && <p>{note}</p>}
        </span>
      )}
    </span>
  )
}

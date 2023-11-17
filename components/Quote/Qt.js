import { QuoteContext } from './QuoteProvider'
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import styles from './Qt.module.scss'
import Link from 'next/link'

export const Qt = ({ publication, href }) => {
  const [open, setOpen] = useState(false)
  const { setPublication, usedPublications } = useContext(QuoteContext)
  const ref = useRef(null)

  useEffect(() => {
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

  if (!index) return null

  return (
    <span className={styles.wrapper}>
      <sup className={styles.quote} onClick={handleToggle} role="contentinfo">
        {index}
      </sup>
      {open && (
        <span className={styles.box} ref={ref}>
          {href ? (
            <Link href={href} target="_blank">
              {' '}
              {publication.author}: <i>{publication.name}</i>,{' '}
              {publication.city} {publication.year}
            </Link>
          ) : (
            <span>
              {publication.author}: <i>{publication.name}</i>,{' '}
              {publication.city} {publication.year}
            </span>
          )}
        </span>
      )}
    </span>
  )
}

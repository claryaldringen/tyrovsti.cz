import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './Menu.module.scss'
import classNames from 'classnames'

const lockBodyScroll = (lock) => {
  const body = document.body
  if (lock) {
    const scrollY = window.scrollY
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'
    body.dataset.scrollY = String(scrollY)
  } else {
    const scrollY = Number(body.dataset.scrollY || '0')
    body.style.position = ''
    body.style.top = ''
    body.style.width = ''
    body.dataset.scrollY = ''
    window.scrollTo(0, scrollY)
  }
}

export const MenuOverlay = ({ open, onClose, children }) => {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) {
      return
    }

    lockBodyScroll(true)

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', onKeyDown)

    // Basic focus: po otevření dej focus na panel
    queueMicrotask(() => panelRef.current?.focus())

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      lockBodyScroll(false)
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className={styles.overlayRoot} role="dialog" aria-modal="true">
      <div
        ref={panelRef}
        tabIndex={-1}
        className={classNames(styles.overlayPanel)}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

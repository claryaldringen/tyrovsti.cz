import React, { ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './Menu.module.scss'

const lockBodyScroll = (lock: boolean) => {
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

interface MenuOverlayProps {
  open: boolean
  onClose: () => void
  children: ReactNode
}

export const MenuOverlay = ({ open, onClose, children }: MenuOverlayProps) => {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) {
      return
    }

    lockBodyScroll(true)

    const onKeyDown = (e: KeyboardEvent) => {
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
    <div
      className={styles.overlayRoot}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div ref={panelRef} tabIndex={-1} className={styles.overlayPanel}>
        {children}
      </div>
    </div>,
    document.body
  )
}

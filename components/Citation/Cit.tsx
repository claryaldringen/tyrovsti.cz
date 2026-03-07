import React, { ReactNode } from 'react'
import { useLanguage } from '../Language'
import { LANG_EN, LANG_IT } from '../../shared/constants'

interface CitProps {
  children: ReactNode
}

export const Cit = ({ children }: CitProps) => {
  const { lang } = useLanguage()

  if (lang === LANG_EN) {
    return <i>&ldquo;{children}&rdquo;</i>
  }
  if (lang === LANG_IT) {
    return <i>&laquo;{children}&raquo;</i>
  }
  return <i>&bdquo;{children}&ldquo;</i>
}

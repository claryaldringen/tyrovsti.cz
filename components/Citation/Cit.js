import React from 'react'
import { useRouter } from 'next/router'
import { LANG_EN } from '../../shared/constants'

export const Cit = ({ children }) => {
  const { locale } = useRouter()

  if (locale === LANG_EN) {
    return <i>&ldquo;{children}&rdquo;</i>
  }
  return <i>&bdquo;{children}&ldquo;</i>
}

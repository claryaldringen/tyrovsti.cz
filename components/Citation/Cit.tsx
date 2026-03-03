import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { LANG_EN } from '../../shared/constants'

interface CitProps {
  children: ReactNode
}

export const Cit = ({ children }: CitProps) => {
  const { locale } = useRouter()

  if (locale === LANG_EN) {
    return <i>&ldquo;{children}&rdquo;</i>
  }
  return <i>&bdquo;{children}&ldquo;</i>
}

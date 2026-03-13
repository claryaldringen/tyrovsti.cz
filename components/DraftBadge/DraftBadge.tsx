import React from 'react'
import { Badge } from 'reactstrap'
import { useLanguage } from '../Language'

const labels: Record<string, string> = {
  cs: 'Rozpracováno',
  en: 'Work in progress',
  it: 'In lavorazione',
  de: 'In Bearbeitung',
}

export const DraftBadge = () => {
  const { lang } = useLanguage()
  return (
    <Badge color="warning" className="ms-2">
      {labels[lang] || labels.cs}
    </Badge>
  )
}

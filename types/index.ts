export type Language = 'cs' | 'en' | 'de' | 'it'

export type LocalizedString = { cs: string; en: string; de: string; it: string }

export type LanguageDest = Partial<Record<Language, string>>

export interface Publication {
  name: string
  author: string
  city: string | LocalizedString
  year: number | undefined
  href?: string
}

export interface MenuItem {
  href: string
  title?: string
}

export interface QuoteContextValue {
  usedPublications: Publication[]
  setPublication: (publication: Publication) => void
}

export interface LanguageContextValue {
  lang: Language
  dest?: LanguageDest
}

export interface PageProps {
  lang: Language
  dest: LanguageDest
}

export type QuoteAction = {
  type: 'ADD_PUBLICATION'
  payload: Publication
}

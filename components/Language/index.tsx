import React, { createContext, ReactNode, useContext } from 'react'
import { LANG_CS } from '../../shared/constants'
import { Language, LanguageDest, LanguageContextValue } from '../../types'

const LanguageContext = createContext<LanguageContextValue>({
  lang: LANG_CS,
})

export const LanguageProvider = ({
  children,
  lang,
  dest,
}: {
  children: ReactNode
  lang: Language
  dest?: LanguageDest
}) => {
  return (
    <LanguageContext.Provider value={{ lang, dest }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

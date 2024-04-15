import { createContext, useContext } from 'react'
import { LANG_CS } from '../../shared/constants'

const LanguageContext = createContext({
  lang: LANG_CS,
  setLang: () => {},
})

export const LanguageProvider = ({ children, lang, dest }) => {
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

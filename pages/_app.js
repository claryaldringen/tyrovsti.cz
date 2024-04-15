import React from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { QuoteProvider } from '../components/Quote/QuoteProvider'
import { LanguageProvider } from '../components/Language'
import { LANG_CS } from '../shared/constants'

function MyApp({ Component, pageProps }) {
  const { lang, dest, ...otherProps } = pageProps

  return (
    <LanguageProvider lang={lang || LANG_CS} dest={dest || '/'}>
      <QuoteProvider>
        <Component {...otherProps} />
      </QuoteProvider>
    </LanguageProvider>
  )
}

export default MyApp

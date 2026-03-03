import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { QuoteProvider } from '../components/Quote/QuoteProvider'
import { LanguageProvider } from '../components/Language'
import { LANG_CS } from '../shared/constants'
import type { AppProps } from 'next/app'
import { PageProps } from '../types'

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
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

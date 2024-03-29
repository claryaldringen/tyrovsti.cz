import React from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import en from '../locales/en.json'
import { QuoteProvider } from '../components/Quote/QuoteProvider'

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter()

  return (
    <IntlProvider locale={locale} messages={en}>
      <QuoteProvider>
        <Component {...pageProps} />
      </QuoteProvider>
    </IntlProvider>
  )
}

export default MyApp

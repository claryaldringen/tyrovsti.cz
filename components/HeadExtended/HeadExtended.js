import Head from 'next/head'
import React from 'react'
import { Menu } from '../Menu'
import { LANG_EN } from '../../shared/constants'
import { useLanguage } from '../Language'

const TITLE_CS = 'Jošt z Einsiedlu a na Týřově'
const TITLE_EN = 'Jobst of Einsiedl and Tyrzow'

export const HeadExtended = ({ title, image, description }) => {
  const { lang } = useLanguage()

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>
          {title ? `${title} - ${lang === LANG_EN ? TITLE_EN : TITLE_CS}` : ''}
        </title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ClaryAldringen" />
        <meta
          name="twitter:title"
          content={`${title} - ${lang === LANG_EN ? TITLE_EN : TITLE_CS}`}
        />
        {description && (
          <meta name="twitter:description" content={description} />
        )}

        {image && (
          <meta
            name="twitter:image"
            content="https://www.yourwebsite.com/path/to/image.jpg"
          />
        )}

        <meta
          property="og:title"
          content={`${title} - ${lang === LANG_EN ? TITLE_EN : TITLE_CS}`}
        />
        {description && <meta name="og:description" content={description} />}
        {image && (
          <meta
            property="og:image"
            content={`https://tyrovsti.cz/images/${image}`}
          />
        )}
        <meta property="og:type" content="website" />
      </Head>
      <Menu />
    </>
  )
}

import Head from 'next/head'
import React from 'react'
import { Menu } from '../Menu'
import { LANG_EN } from '../../shared/constants'

const TITLE_CS = 'Jošt z Einsiedlu a na Týřově'
const TITLE_EN = 'Jobst of Einsiedl and Tyrzow'

export const HeadExtended = ({ lang, title, image }) => (
  <>
    <Head>
      <title>
        {title ? `${title} - ` : ''}
        {lang === LANG_EN ? TITLE_EN : TITLE_CS}
      </title>
      <meta
        property="og:title"
        content={`${title} - ${lang === LANG_EN ? TITLE_EN : TITLE_CS}`}
      />
      {image && (
        <meta
          property="og:image"
          content={`https://tyrovsti.cz/images/${image}`}
        />
      )}
    </Head>
    <Menu lang={lang} />
  </>
)

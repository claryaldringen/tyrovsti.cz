import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import { Menu } from '../Menu'
import { LANG_EN } from '../../shared/constants'
import { useLanguage } from '../Language'

const TITLE_CS = 'Jošt z Einsiedlu a na Týřově'
const TITLE_EN = 'Jobst von Einsiedl of Tyrzow'

const FALLBACK_DESCRIPTION_CS =
  'Jošt z Einsiedlu a na Týřově – historická dokumentace vojenství, odívání a zbrojířství v 15. století v Čechách'
const FALLBACK_DESCRIPTION_EN =
  'Jobst von Einsiedl of Tyrzow – historical documentation of 15th century warfare, clothing and armoury in Bohemia'

const BASE_URL = 'https://tyrovsti.cz'

interface HeadExtendedProps {
  title?: string
  image?: string
  description?: string
}

export const HeadExtended = ({
  title,
  image,
  description,
}: HeadExtendedProps) => {
  const { lang, dest } = useLanguage()
  const router = useRouter()

  const titleSuffix = lang === LANG_EN ? TITLE_EN : TITLE_CS
  const fullTitle = title ? `${title} - ${titleSuffix}` : titleSuffix

  const metaDescription =
    description ||
    (lang === LANG_EN ? FALLBACK_DESCRIPTION_EN : FALLBACK_DESCRIPTION_CS)

  const canonicalPath = router.asPath.split(/[?#]/)[0]
  const canonicalUrl = `${BASE_URL}${canonicalPath}`

  const isEnglish = lang === LANG_EN
  const csPath = isEnglish ? dest : canonicalPath
  const enPath = isEnglish ? canonicalPath : dest

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />

        {dest && csPath && enPath && (
          <>
            <link rel="alternate" hrefLang="cs" href={`${BASE_URL}${csPath}`} />
            <link rel="alternate" hrefLang="en" href={`${BASE_URL}${enPath}`} />
            <link
              rel="alternate"
              hrefLang="x-default"
              href={`${BASE_URL}${csPath}`}
            />
          </>
        )}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ClaryAldringen" />
        <meta name="twitter:title" content={fullTitle} />
        {description && (
          <meta name="twitter:description" content={description} />
        )}

        {image && (
          <meta name="twitter:image" content={`${BASE_URL}/images/${image}`} />
        )}

        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        {image && (
          <meta property="og:image" content={`${BASE_URL}/images/${image}`} />
        )}
        <meta property="og:type" content="website" />
      </Head>
      <Menu />
    </>
  )
}

import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import { Menu } from '../Menu'
import {
  LANG_CS,
  LANG_DE,
  LANG_EN,
  LANG_IT,
  BASE_URL,
} from '../../shared/constants'
import { useLanguage } from '../Language'

const TITLE_CS = 'Jošt z Einsiedlu a na Týřově'
const TITLE_EN = 'Jobst von Einsiedl of Tyrzow'
const TITLE_DE = 'Jobst von Einsidl, Ritter von Tyrzow'
const TITLE_IT = 'Jobst von Einsiedl di Týřov'

const SITE_NAME_CS = 'Jošt z Einsiedlu a na Týřově'
const SITE_NAME_EN = 'Jobst von Einsiedl of Tyrzow'
const SITE_NAME_DE = 'Jobst von Einsidl, Ritter von Tyrzow'
const SITE_NAME_IT = 'Jobst von Einsiedl di Týřov'

const FALLBACK_DESCRIPTION_CS =
  'Jošt z Einsiedlu a na Týřově – historická dokumentace vojenství, odívání a zbrojířství v 15. století v Čechách'
const FALLBACK_DESCRIPTION_EN =
  'Jobst von Einsiedl of Tyrzow – historical documentation of 15th century warfare, clothing and armoury in Bohemia'
const FALLBACK_DESCRIPTION_DE =
  'Jobst von Einsidl, Ritter von Tyrzow – historische Dokumentation des Kriegswesens, der Bekleidung und der Rüstung im 15. Jahrhundert in Böhmen'
const FALLBACK_DESCRIPTION_IT =
  "Jobst von Einsiedl di Týřov – documentazione storica sulla guerra, l'abbigliamento e le armature nella Boemia del XV secolo"

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

  const titleSuffix =
    lang === LANG_IT
      ? TITLE_IT
      : lang === LANG_DE
        ? TITLE_DE
        : lang === LANG_EN
          ? TITLE_EN
          : TITLE_CS
  const fullTitle = title ? `${title} - ${titleSuffix}` : titleSuffix

  const metaDescription =
    description ||
    (lang === LANG_IT
      ? FALLBACK_DESCRIPTION_IT
      : lang === LANG_DE
        ? FALLBACK_DESCRIPTION_DE
        : lang === LANG_EN
          ? FALLBACK_DESCRIPTION_EN
          : FALLBACK_DESCRIPTION_CS)

  const ogLocale =
    lang === LANG_IT
      ? 'it_IT'
      : lang === LANG_DE
        ? 'de_DE'
        : lang === LANG_EN
          ? 'en_GB'
          : 'cs_CZ'
  const siteName =
    lang === LANG_IT
      ? SITE_NAME_IT
      : lang === LANG_DE
        ? SITE_NAME_DE
        : lang === LANG_EN
          ? SITE_NAME_EN
          : SITE_NAME_CS

  const canonicalPath = router.asPath.split(/[?#]/)[0]
  const canonicalUrl = `${BASE_URL}${canonicalPath}`

  const csPath = lang === LANG_CS ? canonicalPath : dest?.cs
  const enPath = lang === LANG_EN ? canonicalPath : dest?.en
  const dePath = lang === LANG_DE ? canonicalPath : dest?.de
  const itPath = lang === LANG_IT ? canonicalPath : dest?.it

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />

        {csPath && (
          <link rel="alternate" hrefLang="cs" href={`${BASE_URL}${csPath}`} />
        )}
        {enPath && (
          <link rel="alternate" hrefLang="en" href={`${BASE_URL}${enPath}`} />
        )}
        {dePath && (
          <link rel="alternate" hrefLang="de" href={`${BASE_URL}${dePath}`} />
        )}
        {itPath && (
          <link rel="alternate" hrefLang="it" href={`${BASE_URL}${itPath}`} />
        )}
        {csPath && (
          <link
            rel="alternate"
            hrefLang="x-default"
            href={`${BASE_URL}${csPath}`}
          />
        )}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ClaryAldringen" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />

        {image && (
          <meta name="twitter:image" content={`${BASE_URL}/images/${image}`} />
        )}

        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:site_name" content={siteName} />
        {image && (
          <meta property="og:image" content={`${BASE_URL}/images/${image}`} />
        )}
        <meta property="og:type" content="website" />
      </Head>
      <Menu />
    </>
  )
}

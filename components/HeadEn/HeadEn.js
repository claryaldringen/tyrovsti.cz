import Head from 'next/head'
import React from 'react'

export const HeadEn = ({ title, image }) => (
  <Head>
    <title>Jobst of Einsiedl and Tyrzow - {title}</title>
    <meta
      property="og:title"
      content={`Jobst of Einsiedl and Tyrzow - ${title}`}
    />
    {image && (
      <meta
        property="og:image"
        content={`https://tyrovsti.cz/images/${image}`}
      />
    )}
  </Head>
)

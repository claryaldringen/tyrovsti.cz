import Head from 'next/head'
import React from 'react'

export const HeadCs = ({ title, image }) => (
  <Head>
    <title>Jošt z Einsiedlu a na Týřově - {title}</title>
    <meta
      property="og:title"
      content={`Jošt z Einsiedlu a na Týřově - ${title}`}
    />
    {image && (
      <meta
        property="og:image"
        content={`https://tyrovsti.cz/images/${image}`}
      />
    )}
  </Head>
)

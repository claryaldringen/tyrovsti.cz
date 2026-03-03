import React from 'react'
import { Container } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_DE } from '../shared/constants'
import { HeroBackground } from '../components/HeroBackground'

const BACKGROUND_IMAGES = [
  '/images/background/background1.webp',
  '/images/background/background2.webp',
  '/images/background/background3.webp',
  '/images/background/background4.webp',
]

const Page = () => {
  return (
    <>
      <HeadExtended description="Jobst von Einsiedl auf Burg Tyrzow – historische Dokumentation des Kriegswesens, der Bekleidung und der Rüstung im 15. Jahrhundert in Böhmen" />
      <HeroBackground images={BACKGROUND_IMAGES}>
        <Container fluid />
      </HeroBackground>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: { cs: '/', en: '/en' },
  },
})

export default Page

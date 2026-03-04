import React from 'react'
import { Container } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { BACKGROUND_IMAGES, LANG_DE } from '../shared/constants'
import { HeroBackground } from '../components/HeroBackground'

const Page = () => {
  return (
    <>
      <HeadExtended description="Jobst von Einsidl, Ritter von Tyrzow – historische Dokumentation des Kriegswesens, der Bekleidung und der Rüstung im 15. Jahrhundert in Böhmen" />
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

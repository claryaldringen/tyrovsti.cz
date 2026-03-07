import React from 'react'
import { Container } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { BACKGROUND_IMAGES, LANG_IT } from '../shared/constants'
import { HeroBackground } from '../components/HeroBackground'

const Page = () => {
  return (
    <>
      <HeadExtended description="Jobst von Einsiedl di Tyrov - documentazione storica sulla guerra, l'abbigliamento e le armature nella Boemia del XV secolo" />
      <HeroBackground images={BACKGROUND_IMAGES}>
        <Container fluid />
      </HeroBackground>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: { cs: '/', en: '/en', de: '/de' },
  },
})

export default Page

import React from 'react'
import { Container } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { BACKGROUND_IMAGES, LANG_EN } from '../shared/constants'
import { HeroBackground } from '../components/HeroBackground'

const Page = () => {
  return (
    <>
      <HeadExtended description="Jobst von Einsiedl of Tyrzow – historical documentation of 15th century warfare, clothing and armoury in Bohemia" />
      <HeroBackground images={BACKGROUND_IMAGES}>
        <Container fluid />
      </HeroBackground>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: { cs: '/', de: '/de' },
  },
})

export default Page

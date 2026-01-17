import React from 'react'
import { Container } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_EN } from '../shared/constants'
import { HeroBackground } from '../components/HeroBackground'

const BACKGROUND_IMAGES = [
  '/images/background/background1.jpg',
  '/images/background/background2.jpeg',
  '/images/background/background3.jpg',
  '/images/background/background4.jpg',
]

const Page = () => {
  return (
    <>
      <HeadExtended />
      <HeroBackground images={BACKGROUND_IMAGES}>
        <Container fluid />
      </HeroBackground>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: '/',
  },
})

export default Page

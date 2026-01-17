import React from 'react'
import { Container } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_CS } from '../shared/constants'
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

export async function getServerSideProps({ req }) {
  const language =
    req.headers['accept-language']?.split(',')[0] || 'default-language'

  if (language !== 'cs') {
    return {
      redirect: {
        destination: '/en',
        permanent: false,
      },
    }
  }

  return {
    props: {
      lang: LANG_CS,
      dest: '/en',
    },
  }
}

export default Page

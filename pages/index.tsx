import React, { useEffect } from 'react'
import { Container } from 'reactstrap'
import { useRouter } from 'next/router'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_CS } from '../shared/constants'
import { HeroBackground } from '../components/HeroBackground'

const BACKGROUND_IMAGES = [
  '/images/background/background1.webp',
  '/images/background/background2.webp',
  '/images/background/background3.webp',
  '/images/background/background4.webp',
]

const Page = () => {
  const router = useRouter()

  useEffect(() => {
    const lang = navigator.language?.split('-')[0]
    if (lang === 'de') {
      router.replace('/de')
    } else if (lang !== 'cs') {
      router.replace('/en')
    }
  }, [router])

  return (
    <>
      <HeadExtended description="Jošt z Einsiedlu a na Týřově – historická dokumentace vojenství, odívání a zbrojířství v 15. století v Čechách" />
      <HeroBackground images={BACKGROUND_IMAGES}>
        <Container fluid />
      </HeroBackground>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: { en: '/en', de: '/de' },
  },
})

export default Page

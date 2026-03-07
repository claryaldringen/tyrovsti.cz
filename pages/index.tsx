import React, { useEffect } from 'react'
import { Container } from 'reactstrap'
import { useRouter } from 'next/router'
import { HeadExtended } from '../components/HeadExtended'
import { BACKGROUND_IMAGES, LANG_CS } from '../shared/constants'
import { HeroBackground } from '../components/HeroBackground'

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
    dest: { en: '/en', de: '/de', it: '/it' },
  },
})

export default Page

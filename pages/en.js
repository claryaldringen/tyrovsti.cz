import React from 'react'
import { Container } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_EN } from '../shared/constants'

const Page = () => {
  return (
    <>
      <HeadExtended />
      <Container fluid />
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

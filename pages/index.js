import React from 'react'
import { Container } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_CS } from '../shared/constants'

const Page = () => {
  return (
    <>
      <HeadExtended />
      <Container fluid />
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

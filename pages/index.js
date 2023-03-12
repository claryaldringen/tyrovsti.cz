import React from 'react'
import { Container } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { useRouter } from 'next/router'

const Page = () => {
  const { locale } = useRouter()
  return (
    <>
      <HeadExtended lang={locale} />
      <Container fluid />
    </>
  )
}

export default Page

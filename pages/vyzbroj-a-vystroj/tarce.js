import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import { Sources } from '../../components/Quote/Sources'
import { Tarce } from '../../components/Articles/cz/zbroj/Tarce'
import { Payment } from '../../components/Payment'

const Page = () => {
  return (
    <>
      <HeadExtended title="Tarče" image="Malba.JPG" />
      <Container>
        <Row>
          <Col className="text">
            <Tarce />
            <Sources />
            <Payment />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: '/arms-and-armour/targe',
  },
})

export default Page

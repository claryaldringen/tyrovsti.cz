import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import { Sources } from '../../components/Quote/Sources'
import { Targe } from '../../components/Articles/en/armour/Targe'
import { Payment } from '../../components/Payment'

const Page = () => {
  return (
    <>
      <HeadExtended title="Tarče" image="Malba.JPG" />
      <Container>
        <Row>
          <Col className="text">
            <Targe />
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
    lang: LANG_EN,
    dest: '/vyzbroj-a-vystroj/tarce',
  },
})

export default Page

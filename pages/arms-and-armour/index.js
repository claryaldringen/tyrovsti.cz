import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import { Sources } from '../../components/Quote/Sources'
import { Targe } from '../../components/Articles/en/armour/Targe'
import { Payment } from '../../components/Payment'

const Page = () => {
  return (
    <>
      <HeadExtended title="Arms and armour" />
      <Container>
        <Row>
          <Col className="text">
            <h1>Arms and armour</h1>
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
    dest: '/vyzbroj-a-vystroj',
  },
})

export default Page

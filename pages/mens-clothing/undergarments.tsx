import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Undergarments } from '../../components/Articles/en/garment/Undergarments'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Men's clothing - Undergarments"
      image="kosile_rajhrad.jpg"
      description="Undergarments in the 15th century – shirts, chemises and braies in medieval Bohemia"
    />
    <Container>
      <Row>
        <Col className="text">
          <Undergarments />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: {
      cs: '/muzsky-odev/spodni-odev',
      de: '/herrenkleidung/unterkleidung',
      it: '/abbigliamento-maschile/biancheria-intima',
    },
  },
})

export default Page

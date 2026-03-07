import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Obuv } from '../../components/Articles/cz/odev/Obuv'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Mužský oděv - Obuv"
      description="Obuv ve středověku – typy a konstrukce bot v 15. století"
    />
    <Container>
      <Row>
        <Col className="text">
          <Obuv />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: {
      en: '/mens-clothing/footwear',
      de: '/herrenkleidung/schuhwerk',
      it: '/abbigliamento-maschile/calzature',
    },
  },
})

export default Page

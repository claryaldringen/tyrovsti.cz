import { Sukne } from '../../components/Articles/cz/odev/Sukne'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Mužský oděv - Sukně"
      image="kabat5.jpg"
      description="Sukně (gown) – svrchní oděv mužů ve středověku"
    />
    <Container>
      <Row>
        <Col className="text">
          <Sukne />
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
      en: '/mens-clothing/gown',
      de: '/herrenkleidung/rock',
      it: '/abbigliamento-maschile/veste',
    },
  },
})

export default Page

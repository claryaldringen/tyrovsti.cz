import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Plast } from '../../components/Articles/cz/odev/Plast'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Mužský oděv - Plášť"
      description="Plášť – svrchní ochranný oděv ve středověku"
    />
    <Container>
      <Row>
        <Col className="text">
          <Plast />
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
      en: '/mens-clothing/cloak',
      de: '/herrenkleidung/mantel',
      it: '/abbigliamento-maschile/mantello',
    },
  },
})

export default Page

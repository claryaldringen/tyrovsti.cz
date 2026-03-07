import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Veste } from '../../components/Articles/it/abbigliamento/Veste'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Abbigliamento maschile - Veste"
      image="kabat5.jpg"
      description="Veste - indumento esterno maschile nel tardo Medioevo"
    />
    <Container>
      <Row>
        <Col className="text">
          <Veste />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: {
      cs: '/muzsky-odev/sukne',
      en: '/mens-clothing/gown',
      de: '/herrenkleidung/rock',
    },
  },
})

export default Page

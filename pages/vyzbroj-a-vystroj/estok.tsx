import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Estok } from '../../components/Articles/cz/zbroj/Estok'
import { Payment } from '../../components/Payment'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Výzbroj a výstroj - Estok"
      image="estoc0.jpg"
      description="Estok (panzerstecher) – bodná zbraň proti plátové zbroji"
    />
    <Container>
      <Row>
        <Col className="text">
          <Estok />
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
      en: '/arms-and-armour/estoc',
      de: '/waffen-und-ruestung/panzerstecher',
    },
  },
})

export default Page

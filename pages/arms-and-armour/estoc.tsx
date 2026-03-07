import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Estoc } from '../../components/Articles/en/armour/Estoc'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Arms and armour - Estoc"
      image="estoc1.png"
      description="Estoc (panzerstecher) – a thrusting weapon against plate armour"
    />
    <Container>
      <Row>
        <Col className="text">
          <Estoc />
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
      cs: '/vyzbroj-a-vystroj/estok',
      de: '/waffen-und-ruestung/panzerstecher',
      it: '/armi-e-armature/stocco',
    },
  },
})

export default Page

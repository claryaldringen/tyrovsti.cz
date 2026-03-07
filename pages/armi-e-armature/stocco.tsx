import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Stocco } from '../../components/Articles/it/armi/Stocco'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Armi e armature - Stocco"
      image="estoc1.png"
      description="Stocco (panzerstecher) – un'arma da punta contro l'armatura a piastre"
    />
    <Container>
      <Row>
        <Col className="text">
          <Stocco />
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
      cs: '/vyzbroj-a-vystroj/estok',
      en: '/arms-and-armour/estoc',
      de: '/waffen-und-ruestung/panzerstecher',
    },
  },
})

export default Page

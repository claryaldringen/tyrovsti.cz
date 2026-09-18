import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { AdalbertIgnazVonEinsiedl } from '../../components/Articles/de/hausTyrovsky/AdalbertIgnazVonEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Vojtěch Ignác (Adalbert Ignaz) Týřovský von Einsiedl"
      image="erb.png"
      description="Vojtěch Ignác Týřovský von Einsiedl und das Ende des Geschlechts auf Chříč (1695–1701)"
    />
    <Container>
      <Row>
        <Col className="text">
          <AdalbertIgnazVonEinsiedl />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: {
      cs: '/tyrovsti-z-einsiedlu/vojtech-ignac-tyrovsky-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl/adalbert-ignatius-of-einsiedl',
      it: '/tyrovsky-di-einsiedl/adalberto-ignazio-di-einsiedl',
    },
  },
})

export default Page

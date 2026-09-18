import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { AdamHeinrichVonEinsiedl } from '../../components/Articles/de/hausTyrovsky/AdamHeinrichVonEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Adam Jindřich (Adam Heinrich) Týřovský von Einsiedl"
      image="erb.png"
      description="Adam Jindřich Týřovský von Einsiedl – das Geschlecht im Dreißigjährigen Krieg, gestorben 1652"
    />
    <Container>
      <Row>
        <Col className="text">
          <AdamHeinrichVonEinsiedl />
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
      cs: '/tyrovsti-z-einsiedlu/adam-jindrich-tyrovsky-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl/adam-henry-of-einsiedl',
      it: '/tyrovsky-di-einsiedl/adamo-enrico-di-einsiedl',
    },
  },
})

export default Page

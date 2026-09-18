import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeinrichJakobVonEinsiedl } from '../../components/Articles/de/hausTyrovsky/HeinrichJakobVonEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Jindřich Jakub (Heinrich Jakob) Týřovský von Einsiedl"
      image="erb.png"
      description="Jindřich Jakub Týřovský von Einsiedl – Hauptmann des Rakonitzer Kreises, gestorben 1618"
    />
    <Container>
      <Row>
        <Col className="text">
          <HeinrichJakobVonEinsiedl />
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
      cs: '/tyrovsti-z-einsiedlu/jindrich-jakub-tyrovsky-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl/henry-jacob-of-einsiedl',
      it: '/tyrovsky-di-einsiedl/enrico-giacomo-di-einsiedl',
    },
  },
})

export default Page

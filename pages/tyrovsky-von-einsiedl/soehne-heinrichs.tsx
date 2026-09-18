import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { SoehneHeinrichs } from '../../components/Articles/de/hausTyrovsky/SoehneHeinrichs'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Heinrichs Söhne von Einsiedl"
      image="erb.png"
      description="Die Söhne Jindřich Týřovskýs von Einsiedl und die Teilung des Geschlechts, 1556–1578"
    />
    <Container>
      <Row>
        <Col className="text">
          <SoehneHeinrichs />
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
      cs: '/tyrovsti-z-einsiedlu/synove-jindrichovi',
      en: '/tyrovsky-of-einsiedl/sons-of-henry',
      it: '/tyrovsky-di-einsiedl/figli-di-enrico',
    },
  },
})

export default Page
